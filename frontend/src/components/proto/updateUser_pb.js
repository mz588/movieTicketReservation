// source: updateUser.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.updateUserPackage.UpdateUserReservationRequest', null, global);
goog.exportSymbol('proto.updateUserPackage.UpdateUserReservationResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.updateUserPackage.UpdateUserReservationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.updateUserPackage.UpdateUserReservationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.updateUserPackage.UpdateUserReservationRequest.displayName = 'proto.updateUserPackage.UpdateUserReservationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.updateUserPackage.UpdateUserReservationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.updateUserPackage.UpdateUserReservationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.updateUserPackage.UpdateUserReservationResponse.displayName = 'proto.updateUserPackage.UpdateUserReservationResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.updateUserPackage.UpdateUserReservationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.updateUserPackage.UpdateUserReservationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.updateUserPackage.UpdateUserReservationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    useremail: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newreservationlist: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.updateUserPackage.UpdateUserReservationRequest}
 */
proto.updateUserPackage.UpdateUserReservationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.updateUserPackage.UpdateUserReservationRequest;
  return proto.updateUserPackage.UpdateUserReservationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.updateUserPackage.UpdateUserReservationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.updateUserPackage.UpdateUserReservationRequest}
 */
proto.updateUserPackage.UpdateUserReservationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseremail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewreservationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.updateUserPackage.UpdateUserReservationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.updateUserPackage.UpdateUserReservationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.updateUserPackage.UpdateUserReservationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseremail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewreservationlist();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string userEmail = 1;
 * @return {string}
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.getUseremail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.updateUserPackage.UpdateUserReservationRequest} returns this
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.setUseremail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string newReservationList = 2;
 * @return {string}
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.getNewreservationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.updateUserPackage.UpdateUserReservationRequest} returns this
 */
proto.updateUserPackage.UpdateUserReservationRequest.prototype.setNewreservationlist = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.updateUserPackage.UpdateUserReservationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.updateUserPackage.UpdateUserReservationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.updateUserPackage.UpdateUserReservationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    currreservationlist: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.updateUserPackage.UpdateUserReservationResponse}
 */
proto.updateUserPackage.UpdateUserReservationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.updateUserPackage.UpdateUserReservationResponse;
  return proto.updateUserPackage.UpdateUserReservationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.updateUserPackage.UpdateUserReservationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.updateUserPackage.UpdateUserReservationResponse}
 */
proto.updateUserPackage.UpdateUserReservationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStatus(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCurrreservationlist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.updateUserPackage.UpdateUserReservationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.updateUserPackage.UpdateUserReservationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.updateUserPackage.UpdateUserReservationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCurrreservationlist();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool status = 1;
 * @return {boolean}
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.getStatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.updateUserPackage.UpdateUserReservationResponse} returns this
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string currReservationList = 2;
 * @return {string}
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.getCurrreservationlist = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.updateUserPackage.UpdateUserReservationResponse} returns this
 */
proto.updateUserPackage.UpdateUserReservationResponse.prototype.setCurrreservationlist = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.updateUserPackage);