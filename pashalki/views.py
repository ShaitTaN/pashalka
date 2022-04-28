from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from rest_framework.generics import RetrieveAPIView

from pashalki.models import Pictures
from .serializers import PicturesSerializer
from rest_framework import permissions

def home(request):
    template = loader.get_template('index.html')
    context = {}
    return HttpResponse(
        template.render(context, request)
        )
    
def slides(request):
    template = loader.get_template('slides_img.html')
    context = {}
    return HttpResponse(
        template.render(context, request)
        )

def serverresponse(request):
    response = HttpResponse('Пж, не слушай сервер')
    response['login'] = 'yaneskazutebelogin'
    response['password'] = 'ParolTozeNeSkazu101'
    return response

class PicturesSerializerView(RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Pictures.objects.all()
    serializer_class = PicturesSerializer
