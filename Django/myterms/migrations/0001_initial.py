# Generated by Django 4.1.2 on 2022-10-20 13:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyTermsUser',
            fields=[
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('terms_user_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('username', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=70)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(default='.', max_length=255)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'myterms_user',
            },
        ),
        migrations.CreateModel(
            name='MyTermsModels',
            fields=[
                ('terms_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('game_title', models.CharField(max_length=255)),
                ('game_category', models.CharField(choices=[('MOBA', 'MOBA'), ('FPS', 'FPS'), ('TPS', 'TPS')], max_length=9)),
                ('player_for', models.DateField()),
                ('skins', models.PositiveBigIntegerField()),
                ('price', models.PositiveBigIntegerField(default=100)),
                ('level', models.PositiveBigIntegerField()),
                ('description', models.TextField()),
                ('platform', models.CharField(choices=[('PC', 'PC'), ('PS5', 'PS5'), ('XBOX', 'XBOX')], max_length=9)),
                ('producent', models.TextField()),
                ('rank', models.CharField(max_length=60)),
                ('date_added', models.DateField(auto_now=True)),
                ('photo', models.ImageField(blank=True, null=True, upload_to='')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
