# -*- coding: utf-8 -*-

from django.http import Http404,HttpResponse
from django.shortcuts import render,render_to_response
import datetime
from myweb.models import *

#调用首页127.0.0.1:8080 演示代码
def index(request):
    return render(request,'index.html')

#显示hello的页面
def hello(request):
    #return HttpResponse("")
    return render(request, 'hello.html')

#显示插入数据的页面
def insert_person_tb_mth(request):
    return render(request, 'insert_person_tb.html')

#通过调用save()方法插入数据到Person表
def inst_person_tb_sql(request):
    name = request.GET['name']
    age = request.GET['age']
    #try:
    #    offset = int(age)
    #except ValueError:
    #    raise Http404()
    if name == '' or age == '' :
        return HttpResponse("<script>alert('输入框不能为空！！'); window.location='/inst_pers_tb/'; </script>")
    inst_to_person_tb = Person.objects.create(name=name,age=age)
    #p=Person.objects.get_or_create(name=name, age=age)
    #cs=str(p)
    #if p == '0' :
    #    cs='OK2'
    #else:
    #    cs='NO'
    cs='YES'
    inst_to_person_tb.save()
    name=str(name)
    age=str(age)
    html="<script>alert('姓名：%s 年龄：%s \\n添加 %s ！！'); window.location='/inst_pers_tb/'; </script>" % (name,age,cs)
    #select_person_tb = Person.objects.all()
    return HttpResponse(html)

#列出表中的数据
def lst_person_tb_mth(request):
    #lst_person_tb = Person.objects.all()
    #print lst_person_tb
    lst_person_all = Person.objects.all()
    return render(request, 'lst_person_tb.html', {'lst_person_all_html':lst_person_all})
    #return HttpResponse(lst_person_tb)

#将2个参数相加，http://127.0.0.1:8080/add/?a=14&b=25
def add(request):
    a = request.GET['a']
    b = request.GET['b']
    if a == '' or b == '' :
        return HttpResponse("<script>alert('输入框不能为空！！'); window.location='/jiafa/'; </script>")
    c = int(a)+int(b)
    return HttpResponse(str(c))


#在网页中显示文本
def ls_text_mth(request):
    strings = u"My Django web site(text)."
    return render(request,'ls_text.html',{'strings_html':strings})

#在网页中循环显示列表中的数据
def ls_list_mth(request):
    TutoList = ['a','b','c','d',1,2]
    return render(request,'ls_list.html',{'TutoList_html':TutoList})

#在网页中循环显示字典中的数据
def ls_dict_mth(request):
    info_dict = {'site':'My django + python web','content':'字典中的内容'}
    return render(request,'ls_dict.html',{'ls_dict_html':info_dict})

def ls_for_list_mth(request):
    For_List = map(str,range(100))
    return




# 数据库操作
def testdb(request):
	test1 = Test.objects.create (name='aaa')
	test1.save()
	return HttpResponse('<p> %s 数据添加成功！</p>')

def jiafa(request):
    return render(request,'jiafa.html')



#第2中传递参数的方法
def add2(request,a,b):
    c = int(a) + int(b)
    return HttpResponse(c)

def add3(request):
    c = request.GET['c']
    d = request.GET['d']
    if c == '' or d == '' :
        return HttpResponse("<script>alert('输入框不能为空！！'); window.location='/jiafa/'; </script>")
    e = int(c) + int(d)
    c=str(c)
    d=str(d)
    rs_cn=str(e)
    html="<script>alert('%s + %s = \\n %s '); window.location='/jiafa/'; </script>" % (c,d,rs_cn)
    return HttpResponse(html)

#显示首页
def home(request):
    return render(request, 'index.html')

#列出数据库mybaseinfo中cxm_tst表中的数据
def lstcxm_tst(request):
    return HttpResponse("<br><br><br><br><center><h1>Hello World！Welcome to my python website.</h1></center>")



#方法传递参数
def lst_cs(request):
    name = request.GET['name']
    dis_name=str(name)
    html="<html><body>例：<BR>http://127.0.0.1:8080/lst_cs/?name=123<br><h1>（不能输入中文的）你输入的name参数的值是： %s </h1></body></html>" % dis_name
    return HttpResponse(html)
   # return render(request, 'index.html')

def latest_books(request):
    book_list = Book.objects.order_by('-pub_date')[:10]
    return render_to_response('latest_books.html', {'book_list': book_list})

#显示系统运行的时间
def current_datetime(request):
    now=datetime.datetime.now()
    name='cxm'
    html= "<html><body><script>alert('It is now %s \\r %s');window.location='/'; </script></body></html>" % (now,name)
    return HttpResponse(html)

def hours_ahead(request,offset):
    try:
        offset = int(offset)
    except ValueError:
        raise Http404()
    now=datetime.datetime.now()
    dt = datetime.datetime.now() + datetime.timedelta(hours=offset)
#    assert False
    html = "<html><body> now is : %s <br> In %s hour(s) later,it will be %s .</body></html>" % (now,offset,dt)
    return HttpResponse(html)

def search_person(request):
    return render(request, 'serch_per.html')
def search_person_result(request):
    name = request.GET['name']
    if name == '' :
        return HttpResponse("<script>alert('输入框不能为空！！'); window.location='/search_person/'; </script>")
    now  = Person.objects.filter(name=name)
    return render(request, 'search_person_result.html', {'now':now})
