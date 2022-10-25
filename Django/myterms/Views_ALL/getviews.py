from rest_framework import viewsets, generics
from ..serializers import Sell_Games_Serializer, Sell_Account_Serializer, Boosting_Serializer, Coach_Serializer
from ..models import Sell_Account, Sell_Games, Boosting, Coach, MyTermsUser
from drf_multiple_model.views import FlatMultipleModelAPIView
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from drf_multiple_model.views import ObjectMultipleModelAPIView

class get_sell_games(generics.ListAPIView):
    queryset = Sell_Games.objects.all()
    serializer_class = Sell_Games_Serializer
    permission_classes = []
    http_method_names = ['get']

class get_sell_acc(generics.ListAPIView):
    queryset = Sell_Account.objects.all()
    serializer_class = Sell_Account_Serializer
    permission_classes = []
    http_method_names = ['get']

class get_coach(generics.ListAPIView):
    queryset = Coach.objects.all()
    serializer_class = Coach_Serializer
    permission_classes = []
    http_method_names = ['get']
    
class get_boosting(generics.ListAPIView):
    queryset = Boosting.objects.all()
    serializer_class = Boosting_Serializer
    permission_classes = []
    http_method_names = ['get']

# ============ GET ALL POSTS ============
class LimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 99999999

class get_all_posts(FlatMultipleModelAPIView):

    sorting_fields = ['terms_id']

    add_model_type = False
    pagination_class = LimitPagination
    querylist = [
        { 'queryset': Sell_Games.objects.all(), 'serializer_class': Sell_Games_Serializer},
        { 'queryset': Sell_Account.objects.all(), 'serializer_class': Sell_Account_Serializer},
        { 'queryset': Boosting.objects.all(), 'serializer_class': Boosting_Serializer},
        { 'queryset': Coach.objects.all(), 'serializer_class': Coach_Serializer},
    ]
    http_method_names = ['get']

    @classmethod
    def get_extra_actions(cls):
        return []

class sort_terms(generics.ListAPIView):

    permission_classes = [IsAuthenticated]
    http_method_names = ['get']

    def get(self, request, *args, **kwargs):    
        qs_acc_sell = Sell_Account.objects.filter(user=request.user)
        qs_acc_sell_serializer = Sell_Account_Serializer(qs_acc_sell, many=True).data
        qs_games_sell = Sell_Games.objects.filter(user=request.user)
        qs_games_sell_serializer = Sell_Games_Serializer(qs_games_sell, many=True).data
        qs_boost = Boosting.objects.filter(user=request.user)
        qs_boost_serializer = Boosting_Serializer(qs_boost, many=True).data
        qs_coach = Coach.objects.filter(user=request.user)
        qs_coach_serializer = Coach_Serializer(qs_coach, many=True).data
        result = qs_acc_sell_serializer+qs_boost_serializer+qs_coach_serializer+qs_games_sell_serializer
        return Response(result)
