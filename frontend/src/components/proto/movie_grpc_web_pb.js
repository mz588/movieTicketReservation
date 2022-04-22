/**
 * @fileoverview gRPC-Web generated client stub for moviePackage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.moviePackage = require('./movie_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.moviePackage.MovieServiceClient =
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
proto.moviePackage.MovieServicePromiseClient =
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
 *   !proto.moviePackage.Empty,
 *   !proto.moviePackage.AllMovieResponse>}
 */
const methodDescriptor_MovieService_GetAll = new grpc.web.MethodDescriptor(
  '/moviePackage.MovieService/GetAll',
  grpc.web.MethodType.UNARY,
  proto.moviePackage.Empty,
  proto.moviePackage.AllMovieResponse,
  /**
   * @param {!proto.moviePackage.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.moviePackage.AllMovieResponse.deserializeBinary
);


/**
 * @param {!proto.moviePackage.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.moviePackage.AllMovieResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.moviePackage.AllMovieResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.moviePackage.MovieServiceClient.prototype.getAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/moviePackage.MovieService/GetAll',
      request,
      metadata || {},
      methodDescriptor_MovieService_GetAll,
      callback);
};


/**
 * @param {!proto.moviePackage.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.moviePackage.AllMovieResponse>}
 *     Promise that resolves to the response
 */
proto.moviePackage.MovieServicePromiseClient.prototype.getAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/moviePackage.MovieService/GetAll',
      request,
      metadata || {},
      methodDescriptor_MovieService_GetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.moviePackage.SearchMovieRequest,
 *   !proto.moviePackage.SearchMovieResponse>}
 */
const methodDescriptor_MovieService_Seach = new grpc.web.MethodDescriptor(
  '/moviePackage.MovieService/Seach',
  grpc.web.MethodType.UNARY,
  proto.moviePackage.SearchMovieRequest,
  proto.moviePackage.SearchMovieResponse,
  /**
   * @param {!proto.moviePackage.SearchMovieRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.moviePackage.SearchMovieResponse.deserializeBinary
);


/**
 * @param {!proto.moviePackage.SearchMovieRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.moviePackage.SearchMovieResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.moviePackage.SearchMovieResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.moviePackage.MovieServiceClient.prototype.seach =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/moviePackage.MovieService/Seach',
      request,
      metadata || {},
      methodDescriptor_MovieService_Seach,
      callback);
};


/**
 * @param {!proto.moviePackage.SearchMovieRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.moviePackage.SearchMovieResponse>}
 *     Promise that resolves to the response
 */
proto.moviePackage.MovieServicePromiseClient.prototype.seach =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/moviePackage.MovieService/Seach',
      request,
      metadata || {},
      methodDescriptor_MovieService_Seach);
};


module.exports = proto.moviePackage;

