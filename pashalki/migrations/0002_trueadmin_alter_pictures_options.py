# Generated by Django 4.0.3 on 2022-04-28 18:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pashalki', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Trueadmin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('picture', models.ImageField(blank=True, null=True, upload_to='', verbose_name='Каких нахрен ОС? Мы же не пастыри')),
                ('link', models.CharField(max_length=100, verbose_name='СсылОчка')),
            ],
            options={
                'verbose_name': 'ЯМыЛюбимОС',
                'verbose_name_plural': 'ЯМыЛюбимОС',
            },
        ),
        migrations.AlterModelOptions(
            name='pictures',
            options={'verbose_name': 'Картиночка', 'verbose_name_plural': 'Картиночки'},
        ),
    ]
