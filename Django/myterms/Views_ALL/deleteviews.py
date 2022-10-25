from ..serializers import Sell_Games_Serializer, Sell_Account_Serializer, Boosting_Serializer, Coach_Serializer
from ..models import Sell_Account, Sell_Games, Boosting, Coach
from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import exceptions, _
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class delete_sell_games(generics.DestroyAPIView):
    queryset = Sell_Games.objects.all()
    serializer_class = Sell_Games_Serializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['delete']

    def delete(self, request, pk=0, *args, **kwargs):
        try:
            get_user_id_from_token = Token.objects.filter(user=request.user)[0].user.terms_user_id
            qs_check_if_user_posted = Sell_Games.objects.filter(terms_id=pk)[0].user.terms_user_id
        
            if int(get_user_id_from_token) == int(qs_check_if_user_posted):
                self.destroy(request, *args, **kwargs)
                return Response("Usunięto Pomyślnie")
            else:
                return Response("Nie poprawna Autoryzacja Urzytkownika")
        except: 
            raise exceptions.AuthenticationFailed(_('Nie Znaleziono Urzytkownika Lub Obiektu'))
            
class delete_sell_acc(generics.DestroyAPIView):
    queryset = Sell_Account.objects.all()
    serializer_class = Sell_Account_Serializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['delete']

    def delete(self, request, pk=0, *args, **kwargs):
        try:
            get_user_id_from_token = Token.objects.filter(user=request.user)[0].user.terms_user_id
            qs_check_if_user_posted = Sell_Account.objects.filter(terms_id=pk)[0].user.terms_user_id
        
            if int(get_user_id_from_token) == int(qs_check_if_user_posted):
                self.destroy(request, *args, **kwargs)
                return Response("Usunięto Pomyślnie")
            else:
                return Response("Nie poprawna Autoryzacja Urzytkownika")
        except: 
            raise exceptions.AuthenticationFailed(_('Nie Znaleziono Urzytkownika Lub Obiektu'))

class delete_boosting(generics.DestroyAPIView):
    queryset = Boosting.objects.all()
    serializer_class = Boosting_Serializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['delete']

    def delete(self, request, pk=0, *args, **kwargs):
        try:
            get_user_id_from_token = Token.objects.filter(user=request.user)[0].user.terms_user_id
            qs_check_if_user_posted = Boosting.objects.filter(terms_id=pk)[0].user.terms_user_id
        
            if int(get_user_id_from_token) == int(qs_check_if_user_posted):
                self.destroy(request, *args, **kwargs)
                return Response("Usunięto Pomyślnie")
            else:
                return Response("Nie poprawna Autoryzacja Urzytkownika")
        except: 
            raise exceptions.AuthenticationFailed(_('Nie Znaleziono Urzytkownika Lub Obiektu'))

class delete_coach(generics.DestroyAPIView):
    queryset = Coach.objects.all()
    serializer_class = Coach_Serializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['delete']

    def delete(self, request, pk=0, *args, **kwargs):
        try:
            get_user_id_from_token = Token.objects.filter(user=request.user)[0].user.terms_user_id
            qs_check_if_user_posted = Coach.objects.filter(terms_id=pk)[0].user.terms_user_id
        
            if int(get_user_id_from_token) == int(qs_check_if_user_posted):
                self.destroy(request, *args, **kwargs)
                return Response("Usunięto Pomyślnie")
            else:
                return Response("Nie poprawna Autoryzacja Urzytkownika")
        except: 
            raise exceptions.AuthenticationFailed(_('Nie Znaleziono Urzytkownika Lub Obiektu'))