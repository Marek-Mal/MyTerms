# Generated by Django 4.1.2 on 2022-10-22 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myterms', '0004_boosting_post_type_coach_post_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='boosting',
            name='date_added',
            field=models.DateField(auto_now=True),
        ),
        migrations.AddField(
            model_name='coach',
            name='date_added',
            field=models.DateField(auto_now=True),
        ),
    ]
