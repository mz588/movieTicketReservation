# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import movie_pb2 as movie__pb2


class MovieServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.GetAll = channel.unary_unary(
                '/moviePackage.MovieService/GetAll',
                request_serializer=movie__pb2.Empty.SerializeToString,
                response_deserializer=movie__pb2.AllMovieResponse.FromString,
                )
        self.Seach = channel.unary_unary(
                '/moviePackage.MovieService/Seach',
                request_serializer=movie__pb2.SearchMovieRequest.SerializeToString,
                response_deserializer=movie__pb2.SearchMovieResponse.FromString,
                )


class MovieServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def GetAll(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Seach(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_MovieServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'GetAll': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAll,
                    request_deserializer=movie__pb2.Empty.FromString,
                    response_serializer=movie__pb2.AllMovieResponse.SerializeToString,
            ),
            'Seach': grpc.unary_unary_rpc_method_handler(
                    servicer.Seach,
                    request_deserializer=movie__pb2.SearchMovieRequest.FromString,
                    response_serializer=movie__pb2.SearchMovieResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'moviePackage.MovieService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class MovieService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def GetAll(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/moviePackage.MovieService/GetAll',
            movie__pb2.Empty.SerializeToString,
            movie__pb2.AllMovieResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Seach(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/moviePackage.MovieService/Seach',
            movie__pb2.SearchMovieRequest.SerializeToString,
            movie__pb2.SearchMovieResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)