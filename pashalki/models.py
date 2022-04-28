from django.db import models

# Create your models here.
class Pictures(models.Model):
    picture = models.ImageField(verbose_name='Картиночка', null=True, blank=True)
    
    class Meta:
        verbose_name = 'Картиночка'
        verbose_name_plural = 'Картиночки'
        
    def __str__(self):
        return f"{self.picture}"
    

class Trueadmin(models.Model):
    picture = models.ImageField(verbose_name='Каких нахрен ОС? Мы же не пастыри', null=True, blank=True)
    link = models.CharField(max_length=100, verbose_name='СсылОчка')
    
    class Meta:
        verbose_name = 'ЯМыЛюбимОС'
        verbose_name_plural = 'ЯМыЛюбимОС'
        
    def __str__(self):
        return f"{self.picture}"
