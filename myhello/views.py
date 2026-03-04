from django.http import HttpResponse

def my_hello(request):
    name = request.GET.get('name', 'CGU')
    return HttpResponse(f"Hello {name}")