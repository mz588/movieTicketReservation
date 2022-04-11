"use strict";
/**
 * @fileoverview gRPC-Web generated client stub for formPackage
 * @enhanceable
 * @public
 */
exports.__esModule = true;
exports.FormServiceClient = void 0;
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck
var grpcWeb = require("grpc-web");
var proto_form_pb = require("../proto/form_pb");
var FormServiceClient = /** @class */ (function () {
    function FormServiceClient(hostname, credentials, options) {
        this.methodDescriptorEcho = new grpcWeb.MethodDescriptor('/formPackage.FormService/Echo', grpcWeb.MethodType.UNARY, proto_form_pb.FormRequest, proto_form_pb.FormResponse, function (request) {
            return request.serializeBinary();
        }, proto_form_pb.FormResponse.deserializeBinary);
        this.methodDescriptorSignup = new grpcWeb.MethodDescriptor('/formPackage.FormService/Signup', grpcWeb.MethodType.UNARY, proto_form_pb.SignupRequest, proto_form_pb.SignupResponse, function (request) {
            return request.serializeBinary();
        }, proto_form_pb.SignupResponse.deserializeBinary);
        this.methodDescriptorLogin = new grpcWeb.MethodDescriptor('/formPackage.FormService/Login', grpcWeb.MethodType.UNARY, proto_form_pb.LoginRequest, proto_form_pb.LoginResponse, function (request) {
            return request.serializeBinary();
        }, proto_form_pb.LoginResponse.deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpcWeb.GrpcWebClientBase(options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    FormServiceClient.prototype.echo = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/formPackage.FormService/Echo', request, metadata || {}, this.methodDescriptorEcho, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/formPackage.FormService/Echo', request, metadata || {}, this.methodDescriptorEcho);
    };
    FormServiceClient.prototype.signup = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/formPackage.FormService/Signup', request, metadata || {}, this.methodDescriptorSignup, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/formPackage.FormService/Signup', request, metadata || {}, this.methodDescriptorSignup);
    };
    FormServiceClient.prototype.login = function (request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/formPackage.FormService/Login', request, metadata || {}, this.methodDescriptorLogin, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/formPackage.FormService/Login', request, metadata || {}, this.methodDescriptorLogin);
    };
    return FormServiceClient;
}());
exports.FormServiceClient = FormServiceClient;
