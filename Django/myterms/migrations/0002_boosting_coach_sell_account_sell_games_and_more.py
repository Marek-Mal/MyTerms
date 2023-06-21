# Generated by Django 4.1.2 on 2022-10-21 09:11

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myterms', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Boosting',
            fields=[
                ('terms_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('game_title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.PositiveBigIntegerField(default=100)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('terms_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('game_title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.PositiveBigIntegerField(default=100)),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Sell_Account',
            fields=[
                ('terms_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('game_title', models.CharField(max_length=255)),
                ('game_category', models.CharField(max_length=255)),
                ('player_for', models.DateField()),
                ('skins', models.PositiveBigIntegerField()),
                ('price', models.PositiveBigIntegerField(default=100)),
                ('level', models.PositiveBigIntegerField()),
                ('description', models.TextField()),
                ('platform', models.CharField(choices=[('PC', 'PC'), ('PS5', 'PS5'), ('XBOX', 'XBOX')], max_length=9)),
                ('producent', models.CharField(max_length=255)),
                ('rank', models.CharField(max_length=60)),
                ('date_added', models.DateField(auto_now=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Sell_Games',
            fields=[
                ('terms_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('game_title', models.CharField(max_length=255)),
                ('game_category', models.CharField(max_length=255)),
                ('price', models.PositiveBigIntegerField(default=100)),
                ('description', models.TextField()),
                ('platform', models.CharField(choices=[('PC', 'PC'), ('PS5', 'PS5'), ('XBOX', 'XBOX')], max_length=9)),
                ('producent', models.TextField()),
                ('date_added', models.DateField(auto_now=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='MyTermsModels',
        ),
    ]