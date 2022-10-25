from django.db import models
from .UserManager.UserManager import UserManager_Terms
from django.contrib.auth.models import AbstractBaseUser


class MyTermsUser(AbstractBaseUser):

    terms_user_id = models.AutoField(primary_key=True, unique=True)
    username = models.CharField(max_length=50)
    surname = models.CharField(max_length=70)
    email = models.EmailField(max_length=254, unique=True)
    # PayPal = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=255, default=".")
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=True)

    objects = UserManager_Terms()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []

    def has_module_perms(self, app_label):
        return True
    
    def has_perm(self, perm, obj=None):
        return True

    class Meta:
        db_table = "myterms_user"

class Sell_Games(models.Model):

    platform_choice = (
        ("PC", "PC"),
        ("PS5", "PS5"),
        ("XBOX" ,"XBOX"),
    )

    terms_id = models.AutoField(primary_key=True, unique=True)
    game_title = models.CharField(max_length=255, blank=False, null=False)
    game_category = models.CharField(max_length=255, blank=False, null=False)
    price = models.PositiveBigIntegerField(default=100, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    platform = models.CharField(max_length=9, blank=False, null=False, choices=platform_choice)
    producent = models.TextField(blank=False, null=False)
    date_added = models.DateField(auto_now=True, blank=False, null=False)
    photo = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(MyTermsUser, on_delete=models.CASCADE, null=True)
    
    post_type_choice = (
        ("Sprzedaż Gry", "Sprzedaż Gry"),
    )
    post_type = models.CharField(max_length=14, blank=False, null=False, choices=post_type_choice, default=post_type_choice[0][0])

    def __str__(self):
        return self.game_title

class Boosting(models.Model):

    terms_id = models.AutoField(primary_key=True, unique=True)
    game_title = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    price = models.PositiveBigIntegerField(default=100, blank=False, null=False)
    date_added = models.DateField(auto_now=True, blank=False, null=False)
    photo = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(MyTermsUser, on_delete=models.CASCADE, null=True)
    
    post_type_choice = (
        ("Boosting", "Boosting"),
    )
    post_type = models.CharField(max_length=14, blank=False, null=False, choices=post_type_choice, default=post_type_choice[0][0])

    def __str__(self):
        return self.game_title

class Coach(models.Model):

    terms_id = models.AutoField(primary_key=True, unique=True)
    game_title = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    price = models.PositiveBigIntegerField(default=100, blank=False, null=False)
    date_added = models.DateField(auto_now=True, blank=False, null=False)
    photo = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(MyTermsUser, on_delete=models.CASCADE, null=True)
    
    post_type_choice = (
        ("Coach", "Coach"),
    )
    post_type = models.CharField(max_length=14, blank=False, null=False, choices=post_type_choice, default=post_type_choice[0][0])

    def __str__(self):
        return self.game_title


class Sell_Account(models.Model):

    platform_choice = (
        ("PC", "PC"),
        ("PS5", "PS5"),
        ("XBOX" ,"XBOX"),
    )

    terms_id = models.AutoField(primary_key=True, unique=True)
    game_title = models.CharField(max_length=255, blank=False, null=False)
    game_category = models.CharField(max_length=255, blank=False, null=False)
    player_for = models.DateField(blank=False, null=False)
    skins = models.PositiveBigIntegerField(blank=False, null=False)
    price = models.PositiveBigIntegerField(default=100, blank=False, null=False)
    level = models.PositiveBigIntegerField(blank=False, null=False)
    description = models.TextField(blank=False, null=False)
    platform = models.CharField(max_length=9, blank=False, null=False, choices=platform_choice)
    producent = models.CharField(max_length=255, blank=False, null=False)
    rank = models.CharField(max_length=60, blank=False, null=False)
    date_added = models.DateField(auto_now=True, blank=False, null=False)
    photo = models.ImageField(null=True, blank=True)
    user = models.ForeignKey(MyTermsUser, on_delete=models.CASCADE, null=True)

    post_type_choice = (
        ("Sprzedaż Konta", "Sprzedaż Konta"),
    )
    post_type = models.CharField(max_length=14, blank=False, null=False, choices=post_type_choice, default=post_type_choice[0][0])

    def __str__(self):
        return self.game_title
