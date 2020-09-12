# Generated by Django 3.1.1 on 2020-09-12 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0004_casepage_location'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='casepagegalleryimage',
            name='caption',
        ),
        migrations.AddField(
            model_name='casepage',
            name='full_time',
            field=models.BooleanField(blank=True, help_text='Full time job', null=True),
        ),
    ]
