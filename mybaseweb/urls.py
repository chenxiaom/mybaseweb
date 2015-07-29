"""mybaseweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.8/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Add an import:  from blog import urls as blog_urls
    2. Add a URL to urlpatterns:  url(r'^blog/', include(blog_urls))
"""
#from django.conf.urls import include, url,patterns
#from views import *
#urlpatterns = patterns("",
#        url('^testdb/$', testdb, name='mybaseinfo'),
#)
#from django.conf.urls import url,patterns,include
from django.conf.urls import *
from django.contrib import admin
from myweb.views import *

urlpatterns = patterns("",
        #url(r'^admin/', include(admin.site.urls)),
        #url(r'^testdb/$', testdb, name='testdb'),
        url(r'^$', index, name='index'),
        url(r'^inst_pers_tb/$', insert_person_tb_mth, name='insert_person_tb_mth'),
        url(r'^inst_pers_tb_sql/$', inst_person_tb_sql, name='inst_person_tb_sql'),

        url(r'^search_person/$',search_person),
        url(r'^search_person_result/$',search_person_result),

        url(r'^lst_pers_tb/$', lst_person_tb_mth, name='lst_person_tb_mth'),
        url(r'^lst_cs/$',lst_cs, name='lst_cs'),

        url(r'^ls_text/$',ls_text_mth),
        url(r'^ls_list/$',ls_list_mth),
         url(r'^ls_dict/$',ls_dict_mth),

        url(r'^index/$',index),
        url(r'^hello/$',hello),
        url(r'^jiafa/$',jiafa,name='jiafa'),
        url(r'^add/$',add,name='add'),
        url(r'^add2/(\d+)/(\d+)/$', add2, name='add2'),
        url(r'^add3/$',add3,name='add3'),
        url(r'^home/$', home, name='home'),
        url(r'^listtb/$',lstcxm_tst),
        url(r'^latest/$',latest_books),
        url(r'^time/$',current_datetime),
        url(r'^time123/$',current_datetime),
        url(r'^time/plus/(\d{1,2})/$',hours_ahead),

)