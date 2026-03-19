from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json
import logging

from .models import Post
from .models import User

from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .models import Course

logger=logging.getLogger('django')
# 1. 回傳課程列表 API
def course_list(request):
   courses = Course.objects.all().values() # 抓出所有課程轉成字典格式
   return JsonResponse(list(courses), safe=False, json_dumps_params={'ensure_ascii': False})
# 2. 加入課程 API
def add_course(request):
   # 從網址抓參數 (GET)
   dept = request.GET.get('Department')
   title = request.GET.get('CourseTitle')
   instr = request.GET.get('Instructor')
   if dept and title and instr:
       # 存進資料庫
       Course.objects.create(Department=dept, CourseTitle=title, Instructor=instr)
       return HttpResponse(f"成功加入：{title}")
   else:
       return HttpResponse("請提供完整的課程資訊：Department, CourseTitle, Instructor")


@api_view(['GET'])
def add_post(request):
    title=request.GET.get('title','')
    content=request.GET.get('content','')
    photo=request.GET.get('photo','')
    location=request.GET.get('location','')

    new_post=Post()
    new_post.title=title
    new_post.content=content
    new_post.photo=photo
    new_post.location=location
    new_post.save()
    logger.debug("************** myhello_api:"+title)
    if title:
        return Response({"data":title+" insert!"},status=status.HTTP_200_OK)
    else:
        return Response(
            {"res":"parameter name is None!"},
            status=status.HTTP_400_BAD_REQUEST
        )
    
@api_view(['GET'])
def list_users(request):
    users=User.objects.all().values()
    return JsonResponse(list(users),safe=False)

    #return Response({"data":
    #                json.dumps(
    #                    list(posts),
    #                    sort_keys=True,
    #                    indent=1,
    #                    cls=DjangoJSONEncoder)},
    #                status=status.HTTP_200_OK)

class HelloApiView(APIView):
    def get(self,request):
        my_name=request.GET.get('name',None)
        if my_name:
            retValue={}
            retValue['data']="Hello"+my_name
            return Response(retValue,status=status.HTTP_200_OK)
        else:
            return Response(
                {"res":"parameter:name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )