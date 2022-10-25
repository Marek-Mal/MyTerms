from django.urls import path, include
from rest_framework import routers
from .views import *
from .Views_ALL.getviews import *
from .Views_ALL.postviews import *
from .Views_ALL.putviews import *
from .Views_ALL.deleteviews import *
from .terms_serializers.AuthToken import Auth_Token

router = routers.DefaultRouter()
router.register(r'users', users, basename="View_Users")

urlpatterns = [
    path('', include(router.urls)),

    # ============ GET ALL POSTS ============
    path('get/', get_all_posts.as_view()),

    # ============ GET DIFFRENT TABLE POSTS ============
    path('get_sell_games/', get_sell_games.as_view()),
    path('get_sell_acc/', get_sell_acc.as_view()),
    path('get_coach/', get_coach.as_view()),
    path('get_boost/', get_boosting.as_view()),

    path('sort_terms/', sort_terms.as_view()),

    # ============ POST GAMES WITH AUTH ============
    path('post_sell_games/', post_sell_games.as_view()),
    path('post_sell_acc/', post_sell_acc.as_view()),
    path('post_boost/', post_boosting.as_view()),
    path('post_coach/', post_coach.as_view()),

    # ============ UPDATE GAMES WITH AUTH ============
    path('update_sell_games/<int:pk>', put_sell_games.as_view()),
    path('update_sell_acc/<int:pk>', put_sell_acc.as_view()),
    path('update_coach/<int:pk>', put_coach.as_view()),
    path('update_boost/<int:pk>', put_boosting.as_view()),

    # ============ DELETE POSTS ============
    path('delete_sell_games/<int:pk>', delete_sell_games.as_view()),
    path('delete_sell_acc/<int:pk>', delete_sell_acc.as_view()),
    path('delete_boost/<int:pk>', delete_boosting.as_view()),
    path('delete_coach/<int:pk>', delete_coach.as_view()),

    # ============ USER METHODS ============
    path('update_user/<int:pk>', updateuser.as_view()),
    path('delete_user/<int:pk>', deleteuser.as_view()),
    path('show_current_user/', currentuser.as_view({'get':'list'})),

    path('login/', Auth_Token.as_view()),
    
    # ============ AUTH DRF ============
    path('auth/', include('rest_framework.urls', namespace='rest_framework')),
]