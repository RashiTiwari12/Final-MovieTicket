# Generated by Django 4.0.10 on 2024-01-25 10:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movietkt04', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='seat',
            name='user',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
