/**
 * @fileoverview gRPC-Web generated client stub for formPackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.formPackage = require('./form_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.formPackage.FormServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.formPackage.FormServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.formPackage.FormRequest,
 *   !proto.formPackage.FormResponse>}
 */
const methodDescriptor_FormService_Echo = new grpc.web.MethodDescriptor(
  '/formPackage.FormService/Echo',
  grpc.web.MethodType.UNARY,
  proto.formPackage.FormRequest,
  proto.formPackage.FormResponse,
  /**
   * @param {!proto.formPackage.FormRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.formPackage.FormResponse.deserializeBinary
);


/**
 * @param {!proto.formPackage.FormRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.formPackage.FormResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.formPackage.FormResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.formPackage.FormServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/formPackage.FormService/Echo',
      request,
      metadata || {},
      methodDescriptor_FormService_Echo,
      callback);
};


/**
 * @param {!proto.formPackage.FormRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.formPackage.FormResponse>}
 *     Promise that resolves to the response
 */
proto.formPackage.FormServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/formPackage.FormService/Echo',
      request,
      metadata || {},
      methodDescriptor_FormService_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.formPackage.SignupRequest,
 *   !proto.formPackage.SignupResponse>}
 */
const methodDescriptor_FormService_Signup = new grpc.web.MethodDescriptor(
  '/formPackage.FormService/Signup',
  grpc.web.MethodType.UNARY,
  proto.formPackage.SignupRequest,
  proto.formPackage.SignupResponse,
  /**
   * @param {!proto.formPackage.SignupRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.formPackage.SignupResponse.deserializeBinary
);


/**
 * @param {!proto.formPackage.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.formPackage.SignupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.formPackage.SignupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.formPackage.FormServiceClient.prototype.signup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/formPackage.FormService/Signup',
      request,
      metadata || {},
      methodDescriptor_FormService_Signup,
      callback);
};


/**
 * @param {!proto.formPackage.SignupRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.formPackage.SignupResponse>}
 *     Promise that resolves to the response
 */
proto.formPackage.FormServicePromiseClient.prototype.signup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/formPackage.FormService/Signup',
      request,
      metadata || {},
      methodDescriptor_FormService_Signup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.formPackage.LoginRequest,
 *   !proto.formPackage.LoginResponse>}
 */
const methodDescriptor_FormService_Login = new grpc.web.MethodDescriptor(
  '/formPackage.FormService/Login',
  grpc.web.MethodType.UNARY,
  proto.formPackage.LoginRequest,
  proto.formPackage.LoginResponse,
  /**
   * @param {!proto.formPackage.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.formPackage.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.formPackage.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.formPackage.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.formPackage.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.formPackage.FormServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/formPackage.FormService/Login',
      request,
      metadata || {},
      methodDescriptor_FormService_Login,
      callback);
};


/**
 * @param {!proto.formPackage.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.formPackage.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.formPackage.FormServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/formPackage.FormService/Login',
      request,
      metadata || {},
      methodDescriptor_FormService_Login);
};


module.exports = proto.formPackage;

