# Generated by Django 4.0.3 on 2022-04-25 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Pictures',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Картиночка')),
            ],
            options={
                'verbose_name': 'Картиночку',
                'verbose_name_plural': 'Картиночки',
            },
        ),
    ]
