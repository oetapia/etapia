# Generated by Django 3.1 on 2020-08-22 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_auto_20200822_1438'),
    ]

    operations = [
        migrations.AddField(
            model_name='homepage',
            name='no_child',
            field=models.BooleanField(blank=True, default=False),
        ),
        migrations.AddField(
            model_name='homepage',
            name='no_siblings',
            field=models.BooleanField(blank=True, default=False),
        ),
    ]
