from django.db import models
from rest_framework import serializers

class BaseUserManager_Terms(models.Manager):

    @classmethod
    def normalize_email(cls, email):
        email = email or ''
        try:
            email_name, domain_part = email.strip().rsplit('@', 1)
        except ValueError:
            pass
        else:
            email = email_name + '@' + domain_part.lower()
        return email

    def get_by_natural_key(self, email):
        return self.get(**{self.model.EMAIL_FIELD: email})