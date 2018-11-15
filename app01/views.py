from django.shortcuts import render,HttpResponse,redirect
import json
# Create your views here.

def classes(request):
    s = {'a':123}
    # return HttpResponse('<input type=text>')
    return render(request,'login.html',{'msg':'看见了'})
    # return redirect('http://www.s.com')
    # return redirect('http://www.oldboyedu.com')
