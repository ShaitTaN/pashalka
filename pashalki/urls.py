from django.urls import path, re_path
from .views import *
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    path('', home),
    path('slides/', slides, name='slides'),
    path('serverresponse/', serverresponse, name='serverresponse'),
    
    
    path('pictures/<pk>/', PicturesSerializerView.as_view()),
    re_path(r'^images/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT,
        }),
]
