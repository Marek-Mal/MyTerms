from django.db import models
from .BaseUserManager import BaseUserManager_Terms

class UserManager_Terms(BaseUserManager_Terms):
    def create_user(self, email, username, surname, password):
        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=self.normalize_email(email),
            username=username,
            surname=surname
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, surname, password):
        user = self.model(
            email=self.normalize_email(email),
            username=username,
            surname=surname
        )

        user.is_staff = True
        user.is_admin = True
        user.is_active = True
        user.set_password(password)
        user.save(using=self._db)
        return user