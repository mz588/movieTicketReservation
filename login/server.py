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

db = pymongo.MongoClient("login_db", 27017).membership_system


class Listener(form_pb2_grpc.FormServiceServicer):
  def __init__(self, *arg, **kwargs) -> None:
    super().__init__()
  def Echo(self, request, context):
    print(request)
    return form_pb2.FormResponse(success=True,message="All clear!")
     
  def Signup(self, request, context):
    name, email, password1, password2 = request.form.name, request.form.email, request.form.password1, request.form.password2
    
    if(password1 != password2): return form_pb2.SignupResponse(success = False,message="Passwords do not match")
    user = {
      "_id": uuid.uuid4().hex,
      "name": name,
      "email":email,
      "password":pbkdf2_sha256.hash(password1)
    }
    if db.users.find_one({"email":email}): return form_pb2.SignupResponse(success = False,message="Email address already in use")
    if db.users.insert_one(user): return form_pb2.SignupResponse(success=True,message="SignupResponse from server!")
    return form_pb2.SignupResponse(success = False,message="Unknown error happend, please try again later.")
  
  def Login(self, request, context):
    email, password = request.form.email, request.form.password
    userinfo = db.users.find_one({"email":email})
    # print(userinfo)
    if userinfo is None:
      return form_pb2.LoginResponse(success=False, message="Invalid email address")
    elif not pbkdf2_sha256.verify(password, userinfo["password"]):
      return form_pb2.LoginResponse(success=False, message="Wrong password!")
    
    # reservation
    res = []
    res.append(form_pb2.Reservation(movie = "Star War", theater="Cornell", date="2021/12/31", time="14:45 - 17:00", count=1))
    res.append(form_pb2.Reservation(movie = "Star War", theater="NYC", date="2021/12/25", time="13:45 - 16:00", count=1))
    return form_pb2.LoginResponse(success = True, message="Server successfully received request from client", name=userinfo["name"], email=userinfo["email"], reservations=res)
  
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