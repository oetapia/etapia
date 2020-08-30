# Generated by Django 3.1 on 2020-08-30 14:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cases', '0002_auto_20200830_1343'),
    ]

    operations = [
        migrations.AddField(
            model_name='casepage',
            name='date_end',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='casepage',
            name='date_start',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='casepage',
            name='industry',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
