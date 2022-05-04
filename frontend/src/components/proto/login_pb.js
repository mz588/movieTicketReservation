// source: login.proto
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

goog.exportSymbol('proto.loginPackage.LoginForm', null, global);
goog.exportSymbol('proto.loginPackage.LoginRequest', null, global);
goog.exportSymbol('proto.loginPackage.LoginResponse', null, global);
goog.exportSymbol('proto.loginPackage.Reservation', null, global);
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
proto.loginPackage.LoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.loginPackage.LoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.loginPackage.LoginRequest.displayName = 'proto.loginPackage.LoginRequest';
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
proto.loginPackage.Reservation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.loginPackage.Reservation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.loginPackage.Reservation.displayName = 'proto.loginPackage.Reservation';
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
proto.loginPackage.LoginResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.loginPackage.LoginResponse.repeatedFields_, null);
};
goog.inherits(proto.loginPackage.LoginResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.loginPackage.LoginResponse.displayName = 'proto.loginPackage.LoginResponse';
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
proto.loginPackage.LoginForm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.loginPackage.LoginForm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.loginPackage.LoginForm.displayName = 'proto.loginPackage.LoginForm';
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
proto.loginPackage.LoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.loginPackage.LoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.loginPackage.LoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    form: (f = msg.getForm()) && proto.loginPackage.LoginForm.toObject(includeInstance, f)
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
 * @return {!proto.loginPackage.LoginRequest}
 */
proto.loginPackage.LoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.loginPackage.LoginRequest;
  return proto.loginPackage.LoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.loginPackage.LoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.loginPackage.LoginRequest}
 */
proto.loginPackage.LoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.loginPackage.LoginForm;
      reader.readMessage(value,proto.loginPackage.LoginForm.deserializeBinaryFromReader);
      msg.setForm(value);
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
proto.loginPackage.LoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.loginPackage.LoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.loginPackage.LoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForm();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.loginPackage.LoginForm.serializeBinaryToWriter
    );
  }
};


/**
 * optional LoginForm form = 1;
 * @return {?proto.loginPackage.LoginForm}
 */
proto.loginPackage.LoginRequest.prototype.getForm = function() {
  return /** @type{?proto.loginPackage.LoginForm} */ (
    jspb.Message.getWrapperField(this, proto.loginPackage.LoginForm, 1));
};


/**
 * @param {?proto.loginPackage.LoginForm|undefined} value
 * @return {!proto.loginPackage.LoginRequest} returns this
*/
proto.loginPackage.LoginRequest.prototype.setForm = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.loginPackage.LoginRequest} returns this
 */
proto.loginPackage.LoginRequest.prototype.clearForm = function() {
  return this.setForm(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.loginPackage.LoginRequest.prototype.hasForm = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.loginPackage.Reservation.prototype.toObject = function(opt_includeInstance) {
  return proto.loginPackage.Reservation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.loginPackage.Reservation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.Reservation.toObject = function(includeInstance, msg) {
  var f, obj = {
    movie: jspb.Message.getFieldWithDefault(msg, 1, ""),
    theater: jspb.Message.getFieldWithDefault(msg, 2, ""),
    date: jspb.Message.getFieldWithDefault(msg, 3, ""),
    time: jspb.Message.getFieldWithDefault(msg, 4, ""),
    count: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.loginPackage.Reservation}
 */
proto.loginPackage.Reservation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.loginPackage.Reservation;
  return proto.loginPackage.Reservation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.loginPackage.Reservation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.loginPackage.Reservation}
 */
proto.loginPackage.Reservation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMovie(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTheater(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
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
proto.loginPackage.Reservation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.loginPackage.Reservation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.loginPackage.Reservation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.Reservation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMovie();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTheater();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string movie = 1;
 * @return {string}
 */
proto.loginPackage.Reservation.prototype.getMovie = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.Reservation} returns this
 */
proto.loginPackage.Reservation.prototype.setMovie = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string theater = 2;
 * @return {string}
 */
proto.loginPackage.Reservation.prototype.getTheater = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.Reservation} returns this
 */
proto.loginPackage.Reservation.prototype.setTheater = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string date = 3;
 * @return {string}
 */
proto.loginPackage.Reservation.prototype.getDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.Reservation} returns this
 */
proto.loginPackage.Reservation.prototype.setDate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string time = 4;
 * @return {string}
 */
proto.loginPackage.Reservation.prototype.getTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.Reservation} returns this
 */
proto.loginPackage.Reservation.prototype.setTime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 count = 5;
 * @return {number}
 */
proto.loginPackage.Reservation.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.loginPackage.Reservation} returns this
 */
proto.loginPackage.Reservation.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.loginPackage.LoginResponse.repeatedFields_ = [5];



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
proto.loginPackage.LoginResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.loginPackage.LoginResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.loginPackage.LoginResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    reservationsList: jspb.Message.toObjectList(msg.getReservationsList(),
    proto.loginPackage.Reservation.toObject, includeInstance)
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
 * @return {!proto.loginPackage.LoginResponse}
 */
proto.loginPackage.LoginResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.loginPackage.LoginResponse;
  return proto.loginPackage.LoginResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.loginPackage.LoginResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.loginPackage.LoginResponse}
 */
proto.loginPackage.LoginResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = new proto.loginPackage.Reservation;
      reader.readMessage(value,proto.loginPackage.Reservation.deserializeBinaryFromReader);
      msg.addReservations(value);
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
proto.loginPackage.LoginResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.loginPackage.LoginResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.loginPackage.LoginResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReservationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.loginPackage.Reservation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.loginPackage.LoginResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.loginPackage.LoginResponse} returns this
 */
proto.loginPackage.LoginResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.loginPackage.LoginResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.LoginResponse} returns this
 */
proto.loginPackage.LoginResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.loginPackage.LoginResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.LoginResponse} returns this
 */
proto.loginPackage.LoginResponse.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.loginPackage.LoginResponse.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.LoginResponse} returns this
 */
proto.loginPackage.LoginResponse.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Reservation reservations = 5;
 * @return {!Array<!proto.loginPackage.Reservation>}
 */
proto.loginPackage.LoginResponse.prototype.getReservationsList = function() {
  return /** @type{!Array<!proto.loginPackage.Reservation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.loginPackage.Reservation, 5));
};


/**
 * @param {!Array<!proto.loginPackage.Reservation>} value
 * @return {!proto.loginPackage.LoginResponse} returns this
*/
proto.loginPackage.LoginResponse.prototype.setReservationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.loginPackage.Reservation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.loginPackage.Reservation}
 */
proto.loginPackage.LoginResponse.prototype.addReservations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.loginPackage.Reservation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.loginPackage.LoginResponse} returns this
 */
proto.loginPackage.LoginResponse.prototype.clearReservationsList = function() {
  return this.setReservationsList([]);
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
proto.loginPackage.LoginForm.prototype.toObject = function(opt_includeInstance) {
  return proto.loginPackage.LoginForm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.loginPackage.LoginForm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginForm.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.loginPackage.LoginForm}
 */
proto.loginPackage.LoginForm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.loginPackage.LoginForm;
  return proto.loginPackage.LoginForm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.loginPackage.LoginForm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.loginPackage.LoginForm}
 */
proto.loginPackage.LoginForm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.loginPackage.LoginForm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.loginPackage.LoginForm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.loginPackage.LoginForm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.loginPackage.LoginForm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.loginPackage.LoginForm.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.LoginForm} returns this
 */
proto.loginPackage.LoginForm.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.loginPackage.LoginForm.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.loginPackage.LoginForm} returns this
 */
proto.loginPackage.LoginForm.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.loginPackage);