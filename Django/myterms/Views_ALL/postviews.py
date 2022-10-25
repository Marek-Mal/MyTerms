from ..serializers import UserSerializer, Sell_Games_Serializer, Sell_Account_Serializer, Boosting_Serializer, Coach_Serializer
from ..models import Sell_Account, Sell_Games, Boosting, Coach, MyTermsUser
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.authentication import TokenAuthentication, exceptions, _
from rest_framework.authtoken.models import Token

# ============ POST GAMES WITH AUTH ============
class post_sell_games(generics.CreateAPIView):
    queryset = Sell_Games.objects.all()
    serializer_class = Sell_Games_Serializer
    parser_class = (FileUploadParser,)
    permission_classes = (IsAuthenticated,)
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        file_serializer = Sell_Games_Serializer(data=request.data)

        token = Token.objects.filter(user=request.user)[0].user.terms_user_id

        if int(request.data['user']) == token:
            if file_serializer.is_valid():
                file_serializer.save()
                return Response("Dodano Pomyślnie")
            else:
                return Response(file_serializer.errors)
        else:
            raise exceptions.AuthenticationFailed(_('Błąd Niepoprawne ID/token Urzytkownika'))

# ============ POST ACC SELL WITH AUTH ============
class post_sell_acc(generics.CreateAPIView):
    queryset = Sell_Account.objects.all()
    serializer_class = Sell_Account_Serializer
    parser_class = (FileUploadParser,)
    permission_classes = (IsAuthenticated,)
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        file_serializer = Sell_Account_Serializer(data=request.data)

        token = Token.objects.filter(user=request.user)[0].user.terms_user_id

        if int(request.data['user']) == token:
            if file_serializer.is_valid():
                file_serializer.save()
                return Response("Dodano Pomyślnie")
            else:
                return Response(file_serializer.errors)
        else:
            raise exceptions.AuthenticationFailed(_('Błąd Niepoprawne ID/token Urzytkownika'))

# ============ POST BOOST WITH AUTH ============
class post_boosting(generics.CreateAPIView):
    queryset = Boosting.objects.all()
    serializer_class = Boosting_Serializer
    parser_class = (FileUploadParser,)
    permission_classes = (IsAuthenticated,)
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        file_serializer = Boosting_Serializer(data=request.data)

        token = Token.objects.filter(user=request.user)[0].user.terms_user_id

        if int(request.data['user']) == token:
            if file_serializer.is_valid():
                file_serializer.save()
                return Response("Dodano Pomyślnie")
            else:
                return Response(file_serializer.errors)
        else:
            raise exceptions.AuthenticationFailed(_('Błąd Niepoprawne ID/token Urzytkownika'))

# ============ POST COACH WITH AUTH ============
class post_coach(generics.CreateAPIView):
    queryset = Coach.objects.all()
    serializer_class = Coach_Serializer
    parser_class = (FileUploadParser,)
    permission_classes = (IsAuthenticated,)
    http_method_names = ['post']

    def post(self, request, *args, **kwargs):
        file_serializer = Coach_Serializer(data=request.data)

        token = Token.objects.filter(user=request.user)[0].user.terms_user_id

        if int(request.data['user']) == token:
            if file_serializer.is_valid():
                file_serializer.save()
                return Response("Dodano Pomyślnie")
            else:
                return Response(file_serializer.errors)
        else:
            raise exceptions.AuthenticationFailed(_('Błąd Niepoprawne ID/token Urzytkownika'))