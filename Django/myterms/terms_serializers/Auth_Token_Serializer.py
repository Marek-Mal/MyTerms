from rest_framework import serializers
from django.utils.translation import gettext_lazy as _
from ..models import MyTermsUser
from django.contrib.auth import get_user_model

UserModel = get_user_model()

class MyAuthTokenSerializer(serializers.Serializer):
    email = serializers.CharField(
        label=_("Email"),
        write_only=True
    )
    password = serializers.CharField(
        label=_("Password"),
        style={'input_type': 'password'},
        trim_whitespace=False,
        write_only=True
    )
    token = serializers.CharField(
        label=_("Token"),
        read_only=True
    )

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(request=self.context.get('request'),
                                email=email, password=password)
            # print('='*30)
            # print(user)
            # print('='*30)
            if not user:
                msg = _('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = _('Must include "Email" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs


def user_can_authenticate(user):
        is_active = getattr(user, 'is_active', None)
        return is_active or is_active is None

def authenticate(request, email=None, password=None, **kwargs):
        if email is None:
            email = kwargs.get(UserModel.EMAIL_FIELD)
        if email is None or password is None:
            return
        try:
            user = MyTermsUser.objects.get_by_natural_key(email)
        except Exception as e:
            print('='*30)
            print(str(e))
            print('='*30)
        else:
            if user.check_password(password) and user_can_authenticate(user):
                return user