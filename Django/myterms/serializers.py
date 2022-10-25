from rest_framework import serializers
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import Sell_Account, Sell_Games, Boosting, Coach, MyTermsUser
from rest_framework.authentication import TokenAuthentication, exceptions, _


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MyTermsUser
        fields = (
            "terms_user_id",
            "username",
            "surname",
            "email",
            "password"
        )
        extra_kwargs = {'password': {'write_only':True, 'required': True}}

    def create(self, validated_data):
        user = MyTermsUser.objects.create_user(validated_data['email'], validated_data['username'], validated_data['surname'], validated_data['password'])
        return user

    def update(self, instance, validated_data):
        if (instance.check_password(validated_data['password'])):
            instance.username = validated_data['username']
            instance.surname = validated_data['surname']
            instance.email = validated_data['email']

            instance.save()

            return instance
        else:
            raise exceptions.AuthenticationFailed(_('Złe Hasło'))

    def delete(self, instance, validated_data):
        print("ITS DELETE"*10)

class Sell_Games_Serializer(serializers.ModelSerializer):

    terms_user = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Sell_Games
        fields = (
            "terms_id",
            "game_title",
            "game_category",
            "price",
            "description",
            "platform",
            "producent",
            "date_added",
            "photo",
            "post_type",
            "user",
            "terms_user"
        )

class Sell_Account_Serializer(serializers.ModelSerializer):

    terms_user = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Sell_Account
        fields = (
            "terms_id",
            "game_title",
            "game_category",
            "player_for",
            "skins",
            "price",
            "level",
            "description",
            "platform",
            "producent",
            "rank",
            "date_added",
            "photo",
            "post_type",
            "user",
            "terms_user"
        )

class Boosting_Serializer(serializers.ModelSerializer):

    terms_user = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Boosting
        fields = (
            "terms_id",
            "game_title",
            "description",
            "price",
            "photo",
            "post_type",
            "user",
            "terms_user"
        )

class Coach_Serializer(serializers.ModelSerializer):

    terms_user = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Coach
        fields = (
            "terms_id",
            "game_title",
            "description",
            "price",
            "photo",
            "post_type",
            "user",
            "terms_user"
        )


# "terms_id",
# "game_title",
# "game_category",
# "price",
# "description",
# "platform",
# "producent",
# "date_added",
# "photo",
# "user",
