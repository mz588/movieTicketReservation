# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: updateUser.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x10updateUser.proto\x12\x11updateUserPackage\"M\n\x1cUpdateUserReservationRequest\x12\x11\n\tuserEmail\x18\x01 \x01(\t\x12\x1a\n\x12newReservationList\x18\x02 \x01(\t\"L\n\x1dUpdateUserReservationResponse\x12\x0e\n\x06status\x18\x01 \x01(\x08\x12\x1b\n\x13\x63urrReservationList\x18\x02 \x01(\t2\x8f\x01\n\x11updateUserService\x12z\n\x15UpdateUserReservation\x12/.updateUserPackage.UpdateUserReservationRequest\x1a\x30.updateUserPackage.UpdateUserReservationResponseb\x06proto3')



_UPDATEUSERRESERVATIONREQUEST = DESCRIPTOR.message_types_by_name['UpdateUserReservationRequest']
_UPDATEUSERRESERVATIONRESPONSE = DESCRIPTOR.message_types_by_name['UpdateUserReservationResponse']
UpdateUserReservationRequest = _reflection.GeneratedProtocolMessageType('UpdateUserReservationRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEUSERRESERVATIONREQUEST,
  '__module__' : 'updateUser_pb2'
  # @@protoc_insertion_point(class_scope:updateUserPackage.UpdateUserReservationRequest)
  })
_sym_db.RegisterMessage(UpdateUserReservationRequest)

UpdateUserReservationResponse = _reflection.GeneratedProtocolMessageType('UpdateUserReservationResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEUSERRESERVATIONRESPONSE,
  '__module__' : 'updateUser_pb2'
  # @@protoc_insertion_point(class_scope:updateUserPackage.UpdateUserReservationResponse)
  })
_sym_db.RegisterMessage(UpdateUserReservationResponse)

_UPDATEUSERSERVICE = DESCRIPTOR.services_by_name['updateUserService']
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _UPDATEUSERRESERVATIONREQUEST._serialized_start=39
  _UPDATEUSERRESERVATIONREQUEST._serialized_end=116
  _UPDATEUSERRESERVATIONRESPONSE._serialized_start=118
  _UPDATEUSERRESERVATIONRESPONSE._serialized_end=194
  _UPDATEUSERSERVICE._serialized_start=197
  _UPDATEUSERSERVICE._serialized_end=340
# @@protoc_insertion_point(module_scope)
