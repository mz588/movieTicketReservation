from concurrent import futures
import email
from sre_constants import SUCCESS
import grpc
import form_pb2 as form_pb2
import form_pb2_grpc as form_pb2_grpc
from passlib.hash import pbkdf2_sha256
import uuid

import logging

import pymongo

db = pymongo.MongoClient('mongodb:27017').movie_reservation

class Listener(form_pb2_grpc.FormServiceServicer):
  def __init__(self, *arg, **kwargs) -> None:
    super().__init__()
  def Echo(self, request, context):
    print(request)
    return form_pb2.FormResponse(success=True,message="All clear!")
     
  def Search(self, request, context):
    movieName = request.movieName
    movieInfo = db.allMovies.find_one({"title":movieName})
    # print(movieInfo)
    if movieInfo is None:
      pass
      #return form_pb2.LoginResponse(success=False, message="Invalid email address")
    else:
      pass
      #return form_pb2.LoginResponse(success=False, message="Wrong password!")
  
def serve():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  form_pb2_grpc.add_FormServiceServicer_to_server(
      Listener(), server)
  server.add_insecure_port('0.0.0.0:9090')
  server.start()
  server.wait_for_termination()

if __name__ == '__main__':
  logging.basicConfig()
  serve()