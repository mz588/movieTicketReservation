from concurrent import futures
import grpc
import movie_pb2 as movie_pb2
import movie_pb2_grpc as movie_pb2_grpc
import json
import logging
from bson.binary import Binary
import pymongo
from PIL import Image
import io

db = pymongo.MongoClient('localhost', 27017).movie_reservation
allMovies = db["allMovies"]

class Listener(movie_pb2_grpc.MovieServiceServicer):
  def __init__(self) -> None:
      super().__init__()
  def Seach(self, request, context):
    targets = allMovies.find({"title":{'$regex':f".*{request.movieName}.*", '$options':'isx'}})
    if targets is None: 
      print("Nothing")
      return movie_pb2.SearchMovieResponse(exist = False, movie=None)
    res = []
    for movie in targets:
      res.append(movie_pb2.Movie(
        title=movie["title"],
        description = movie["description"],
        subTitle=movie["subTitle"],
        type=movie["type"],
        titleImg=movie_pb2.B64Image(b64image=(movie["titleImg"]), height=810, width=1440),
        backgroundImg=movie_pb2.B64Image(b64image=(movie["backgroundImg"]), height=810, width=1440),
        cardImg=movie_pb2.B64Image(b64image=(movie["cardImg"]), height=225, width=400)
      ))
    if len(res) == 0:
      print("Nothing")
    return movie_pb2.SearchMovieResponse(exist = True, movie=res)
    
  def GetAll(self, request, context):
    movies = allMovies.find()
    res = []
    for movie in movies:
      res.append(movie_pb2.Movie(
        title=movie["title"],
        description = movie["description"],
        subTitle=movie["subTitle"],
        type=movie["type"],
        titleImg=movie_pb2.B64Image(b64image=(movie["titleImg"]), height=810, width=1440),
        backgroundImg=movie_pb2.B64Image(b64image=(movie["backgroundImg"]), height=810, width=1440),
        cardImg=movie_pb2.B64Image(b64image=(movie["cardImg"]), height=225, width=400)
      ))
    return movie_pb2.AllMovieResponse(movies=res)

def initialize():
  movie_file_name = "../frontend/src/disneyPlusMoviesData.json"
  movie_file = open(movie_file_name, encoding='utf-8')
  movies_Json = json.load(movie_file)
  print(len(movies_Json["movies"]))
  if len(list(allMovies.find({}))) == len(movies_Json["movies"]): return
  for key, value in movies_Json['movies'].items():
    movie = {"title": value["title"], "description":value["description"], "subTitle":value["subTitle"], "type":value["type"]}
    movie["cardImg"] = Binary(open(value["cardImg"], 'rb').read())
    movie["backgroundImg"] = Binary(open(value["backgroundImg"], 'rb').read())
    movie["titleImg"] = Binary(open(value["titleImg"], 'rb').read())
    print(value["title"])
    old_data = allMovies.find_one({"title":value["title"]})
    if old_data:
      for key, value in old_data.items():
        if key == '_id':
          continue
        if value != movie[key]:
          allMovies.update_one({key:key}, {"$set":{key:value}})
    else: 
      allMovies.insert_one(movie)

def checkAll():
  i = 0
  for movie in allMovies.find():
    if i > 0: break
    pic=Image.open(io.BytesIO(movie['backgroundImg']))
    pic.show()
    i += 1

def serve():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  movie_pb2_grpc.add_MovieServiceServicer_to_server(
      Listener(), server)
  server.add_insecure_port('0.0.0.0:9091')
  server.start()
  server.wait_for_termination()

if __name__ == '__main__':
  initialize()
  logging.basicConfig()
  serve()