# Generated by Django 3.1 on 2020-10-20 05:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0052_pagelogentry'),
        ('cases', '0005_auto_20200912_1631'),
    ]

    operations = [
        migrations.CreateModel(
            name='SearchPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.page')),
            ],
            options={
                'verbose_name': 'Search Page',
                'verbose_name_plural': 'Search Pages',
            },
            bases=('wagtailcore.page',),
        ),
    ]
