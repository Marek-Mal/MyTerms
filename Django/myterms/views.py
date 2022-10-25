from rest_framework import viewsets, generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import MyTermsUser
from rest_framework.authentication import exceptions, _
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

# ============ ALL USER METHODS ============
# ============ DISPLAY AND ADD USERS ============
class users(viewsets.ModelViewSet):
    queryset = MyTermsUser.objects.all()
    serializer_class = UserSerializer
    authentication_classes = ()
    http_method_names = ['get', 'post']

# ============ GET CURRENT LOGGED USER BASED ON request.user ============
class currentuser(viewsets.ModelViewSet):
    queryset = MyTermsUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['get']
    def list(self, request, *args, **kwargs):
        val = {
            "username": request.user.username,
            "surname": request.user.surname,
            "email": request.user.email,
            "terms_user_id": request.user.terms_user_id,
        }
        return Response(val)
    
# ============ CHANGE USER EMAIL ETC... ============
class updateuser(generics.UpdateAPIView):
    queryset = MyTermsUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['put']
    
# ============ DELETE USER MUST BE AUTH ============
class deleteuser(generics.DestroyAPIView):
    queryset = MyTermsUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]
    http_method_names = ['delete']
            

        

