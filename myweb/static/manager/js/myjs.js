/*
// 1根据tab切换，进行自动提交，查询UID是否唯一
function showUid(str)
{
var dis_uid;    
if (str=="")
  {
  document.getElementById("dis_check1").innerHTML="请输入UID！";
  return;
  }  
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  dis_uid=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  dis_uid=new ActiveXObject("Microsoft.XMLHTTP");
  }
dis_uid.onreadystatechange=function()
  {
  if (dis_uid.readyState==4 && dis_uid.status==200)
    {
    
	 if(dis_uid.responseText == "1"  )          //检查联系人是否在数据库中有记录，=1说明有该UID已存在
        {
        document.getElementById("dis_check1").innerHTML = "<font color=red size='1px'>该UID已存在，请使用其他UID！</font>";
        }
        else if(dis_uid.responseText == "0")
        {
        document.getElementById("dis_check1").innerHTML="<font color=green  size='1px'>可以使用该UID！</font>";
        }
        else
        {
        document.getElementById("dis_check1").innerHTML = "<font color=RED size='1px'>UID唯一性检测程序出错</font>";
        }
    }
  }
dis_uid.open("GET","validatechkuid.php?uid="+str,true);
dis_uid.send();
}
 
 //触发提交更新联系人的操作
function mod_conner()
{
document.modify_conner.action="update_conner.php";
document.modify_conner.submit();
}
 
 //触发提交删除联系人的操作
function del_conner()
{
document.modify_conner.action="delete_conner.php";
document.modify_conner.submit();
}
 
//触发提交更新部门的操作
function mod_dept()
{
document.modify_dept.action="update_dept.php";
document.modify_dept.submit();
}
 
 //触发提交删除部门的操作
function del_dept()
{
document.modify_dept.action="delete_dept.php";
document.modify_dept.submit();
} 
 //点击按钮生成UID
 function CreateUid()
{
var xmlhttp1;    
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp1=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp1=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp1.onreadystatechange=function()
  {
  if (xmlhttp1.readyState==4 && xmlhttp1.status==200)
    {
    document.getElementById("cid").innerHTML=xmlhttp1.responseText;
    }
  }
xmlhttp1.open("GET","createuid.php",true);
xmlhttp1.send();
}
*/
  
 //以下代码为最终代码************************************************************************
 //管理页面导航栏兼容IE设置
    (function() {		
     if (! 
     /*@cc_on!@*/
     0) return;
     var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
     var i= e.length;
     while (i--){
         document.createElement(e[i])
     } 
})() 



 //导航栏效果js代码
<!--//--><![CDATA[//><!--
function menuFix() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
        this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onMouseDown=function() {
        this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onMouseUp=function() {
        this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onmouseout=function() {
        this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"),
"");
        }
    }
}
window.onload=menuFix;
//--><!]]>

//提示是否注销/判断
function logout()
{
if(confirm('确定要退出登录吗？退出登录后需要重新登录才可以进行后台管理！'))
return true;
else
return false;
}

//这是用来关闭ADM右边提示框的
function    Lock_CheckForm(theForm){
document.all.ly.style.display='none';document.all.Layer2.style.display='none';
return   false;
}


//这是用来切换DIV的JS代码
	$(document).ready(function() 
    	{ 
      	  $(".tablesorter").tablesorter(); 
   	 } 
	);
	$(document).ready(function() {

	//When page loads...
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content

	//On Click Event
	$("ul.tabs li").click(function() {

		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content

		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});

});

//删除提示
function HTMerDel()
{
if(confirm('确定要删除该信息吗？删除将不能恢复！'))
return true;
else
return false;
}

/*
function codefans(){
var box=document.getElementById("divbox");
box.style.display="none"; 
}
*/
///////////////////////////<-------------------管理页面功能------------------------->////////////////////////////////////
///////////////////////////<-------------------管理页面功能------------------------->////////////////////////////////////
///////////////////////////<-------------------管理页面功能------------------------->////////////////////////////////////

//1-1 根据输入 
function ChkMachSn()
{
	var t1=document.getElementById ("mach_sn").value;
	var xmlhttp; 
	if (t1 =="")
	  {
		  document.getElementById("lischksn").innerHTML="<font color='red'>请输序列号！</font>";
		  return;
	  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp.onreadystatechange=function()
	  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("lischksn").innerHTML=xmlhttp.responseText;
			}
	  }
	xmlhttp.open("GET","chk_mach_sn.php?sn="+t1,true);
	xmlhttp.send();
	
	var xmlhttp2; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp2=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp2=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp2.onreadystatechange=function()
	  {
		  if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
			{
				document.getElementById("dis_maint_name").innerHTML=xmlhttp2.responseText;
			}
	  }
	xmlhttp2.open("GET","g_sn_get_maint.php?sn="+t1,true);
	xmlhttp2.send();
	
	
	var xmlhttp3; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp3=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp3=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp3.onreadystatechange=function()
	  {
		  if (xmlhttp3.readyState==4 && xmlhttp3.status==200)
			{
				document.getElementById("dis_maint_eng").innerHTML=xmlhttp3.responseText;
			}
	  }
	xmlhttp3.open("GET","g_sn_get_maint_eng.php?sn="+t1,true);
	xmlhttp3.send();
	
	var xmlhttp31; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp31=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp31=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp31.onreadystatechange=function()
	  {
		  if (xmlhttp31.readyState==4 && xmlhttp31.status==200)
			{
				document.getElementById("dis_recever_maint_name").innerHTML=xmlhttp31.responseText;
			}
	  }
	xmlhttp31.open("GET","g_sn_get_maint_eng_opt.php?sn="+t1,true);
	xmlhttp31.send();
	
	
	var xmlhttp4; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp4=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp4=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp4.onreadystatechange=function()
	  {
		  if (xmlhttp4.readyState==4 && xmlhttp4.status==200)
			{
				document.getElementById("dis_mach_room").innerHTML=xmlhttp4.responseText;
			}
	  }
	xmlhttp4.open("GET","g_sn_get_maint_room.php?sn="+t1,true);
	xmlhttp4.send();
	
	var xmlhttp5; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp5=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp5=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp5.onreadystatechange=function()
	  {
		  if (xmlhttp5.readyState==4 && xmlhttp5.status==200)
			{
				document.getElementById("dis_mach_cabinet").innerHTML=xmlhttp5.responseText;
			}
	  }
	xmlhttp5.open("GET","g_sn_get_maint_cabinet.php?sn="+t1,true);
	xmlhttp5.send();
	
	
		var xmlhttp6; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp6=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp6=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp6.onreadystatechange=function()
	  {
		  if (xmlhttp6.readyState==4 && xmlhttp6.status==200)
			{
				document.getElementById("dis_mach_type").innerHTML=xmlhttp6.responseText;
			}
	  }
	xmlhttp6.open("GET","g_sn_get_maint_type.php?sn="+t1,true);
	xmlhttp6.send();
	
	
	var xmlhttp7; 
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp7=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp7=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp7.onreadystatechange=function()
	  {
		  if (xmlhttp7.readyState==4 && xmlhttp7.status==200)
			{
				document.getElementById("dis_maint_import").innerHTML=xmlhttp7.responseText;
			}
	  }
	xmlhttp7.open("GET","g_sn_get_maint_imp.php?sn="+t1,true);
	xmlhttp7.send();
	
	var xmlhttp9; 	//验证设备是否已过保
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp9=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp9=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp9.onreadystatechange=function()
	  {
		  if (xmlhttp9.readyState==4 && xmlhttp9.status==200)
			{
				document.getElementById("dis_mach_wb").innerHTML=xmlhttp9.responseText;
			}
	  }
	xmlhttp9.open("GET","g_sn_get_maint_wb.php?sn="+t1,true);
	xmlhttp9.send();
	
	
	var xmlhttp10;    
	//if (str=="")
	//  {
	// document.getElementById("getconner").innerHTML="请输入用户名！";
	//  return;
	//  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp10=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp10=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp10.onreadystatechange=function()
	  {
	  if (xmlhttp10.readyState==4 && xmlhttp10.status==200)
		{
		  document.getElementById("get_hostname_id").innerHTML=xmlhttp10.responseText;
		}
	  }
	xmlhttp10.open("GET","g_sn_get_hostname.php?sn="+t1,true);
	xmlhttp10.send();

	
}

//根据序列号和切换选择的主机名，判断是否已报修，并显示报修发送邮件的按钮
function sn_hn_get_but()
{
	var t1=document.getElementById ("mach_sn").value;
	var t2=document.getElementById ("get_hostname_id").value;
	var t3=document.getElementById ("mach_fault_type_id").value;	//获取设备的故障类型
	
	var xmlhttp; 
	if (t1 =="")
	  {
		  document.getElementById("dis_send_mail_but").innerHTML="<font color='red'>请输序列号！</font>";
		  return;
	  }
	 if (t2 =="")
	  {
		  document.getElementById("dis_send_mail_but").innerHTML="<font color='red'>请选择主机名！</font>";
		  return;
	  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp.onreadystatechange=function()
	  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("dis_send_mail_but").innerHTML=xmlhttp.responseText;
			}
	  }
 
	xmlhttp.open("GET","g_sn_get_send_mail_but.php?msn="+t1+"&mhn="+t2+"&mtype="+t3,true);
	xmlhttp.send();
}

function sn_hn_get_eng()
{
	var t1=document.getElementById ("mach_sn").value;
	var t2=document.getElementById ("dis_recever_maint_name").value;
	//var t3=document.getElementById ("mach_fault_type_id").value;	//获取设备的故障类型
	
	var xmlhttp; 
	if (t1 =="")
	  {
		  document.getElementById("dis_send_mail_but").innerHTML="<font color='red'>请输序列号！</font>";
		  return;
	  }
	 if (t2 =="")
	  {
		  document.getElementById("dis_send_mail_but").innerHTML="<font color='red'>请选择主机名！</font>";
		  return;
	  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp.onreadystatechange=function()
	  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("dis_send_mail_but").innerHTML=xmlhttp.responseText;
			}
	  }
 
	//xmlhttp.open("GET","g_sn_get_send_mail_but.php?msn="+t1+"&mhn="+t2+"&mtype="+t3,true);
	//xmlhttp.send();
}


function sn_chk_hostname()
{
	var t1=document.getElementById ("mach_sn_id").value;
	var t2=document.getElementById ("sn_hostname_id").value;
	var xmlhttp; 
	if (t1 =="")
	  {
		  document.getElementById("add_sn_hostname_id").innerHTML="<font color='red'>请输主机名！</font>";
		  return;
	  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp.onreadystatechange=function()
	  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("add_sn_hostname_id").innerHTML=xmlhttp.responseText;
			}
	  }
	xmlhttp.open("GET","g_hn_but.php?msn="+t1+"&mhn="+t2,true);
	xmlhttp.send();
}


function add_sn_chk()
{
	var t1=document.getElementById ("a_mach_sn").value;
	var xmlhttp; 
	if (t1 =="")
	  {
		  document.getElementById("dis_chk_sn").innerHTML="<font color='red'>请输序列号！</font>";
		  return;
	  }
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
		xmlhttp.onreadystatechange=function()
	  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById("dis_chk_sn").innerHTML=xmlhttp.responseText;
			}
	  }
	xmlhttp.open("GET","chk_add_sn.php?sn="+t1,true);
	xmlhttp.send();
}

 //1-2新增联系人的JS代码，无需submit提交后刷新adm.php页面
function Add_Eng()
	{ 
	var t1=document.getElementById("a_maint_eng_name").value;
	var t2=document.getElementById("a_maint_id").value;
	var t3=document.getElementById("a_maint_eng__phone").value;
	var t4=document.getElementById("a_maint_eng_email").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_lischk_eng").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","add_eng_sql.php?full_name="+t1+"&maint_id="+t2+"&phone="+t3+"&email="+t4,true);
	xmlhttp.send();
}


//单击添加按钮，新增机房
function Add_Room()
	{ 
	var t1=document.getElementById("a_mach_room").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_lischkroom").innerHTML=xmlhttp.responseText;
		}
	}
	if (!confirm("确认是否添加该机房位置？")) { 
		window.event.returnValue = false; 
	}
	else{
		xmlhttp.open("GET","add_room_sql.php?room_name="+t1,true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}


//单击添加按钮，新增机房 机柜号
function Add_Cabinet()
	{ 
	var t1=document.getElementById("a_mach_room_id").value;
	var t2=document.getElementById("a_cabinet_num").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_lischkcab").innerHTML=xmlhttp.responseText;
		}
	}

	if (!confirm("确认是否添加该机房的机柜编号位置？")) { 
		window.event.returnValue = false; 
	}
	else{
		xmlhttp.open("GET","add_cabinet_sql.php?room_id="+t1+"&cab_num="+t2,true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}



//=================单击使用状态，提示是否更新序列号的使用状态
function up_m_stus()
	{ 
	var t1=document.getElementById("mach_sn_id").value;
	var t2=document.getElementById("mach_stu_id").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_lischkcab").innerHTML=xmlhttp.responseText;
		}
	}

	if (!confirm("确定需要改变设备的使用状态吗？")) { 
		window.event.returnValue = false; 
		setTimeout("location.reload()",100);
	}
	else{
		xmlhttp.open("GET","update_m_stus.php?msn="+t1+"&mstus="+t2,true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}

//=================单击使用状态，提示是否更新序列号的维保商
function up_m_maint()
	{ 
	var t1=document.getElementById("mach_sn_id").value;
	var t2=document.getElementById("mach_maint_id").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_lischkcab").innerHTML=xmlhttp.responseText;
		}
	}

	if (!confirm("确定需要改变设备的维保商吗？")) { 
		window.event.returnValue = false; 
		setTimeout("location.reload()",100);
	}
	else{
		xmlhttp.open("GET","update_m_maint.php?msn="+t1+"&mmt="+t2,true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}



 //====================关闭case的代码==================
 function Close_Case()
	{ 
	var t1=document.getElementById("case_num").value;
	//var t2=document.getElementById("a_cabinet_num").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("dis_close_info").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","case_close_sql.php?case_num="+t1,true);
	xmlhttp.send();
	alert('CASE:  '+t1+'  关闭成功！');
	location.reload();  //关闭了case后，直接刷新页面
}
 
 
  function Active_Case()
	{ 
	var t1=document.getElementById("case_num").value;
	//var t2=document.getElementById("a_cabinet_num").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("dis_active_info").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","case_active_sql.php?case_num="+t1,true);
	xmlhttp.send();
	alert('CASE:  '+t1+'  激活成功！');
	location.reload();  //激活了case后，直接刷新页面
}
 
 
 //开启邮件发送功能：
  function set_sm_open()
{
	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (!confirm("确认是否开启邮件发送功能？")) { 
		window.event.returnValue = false; 
	}
	else{
		xmlhttp.open("GET","sm_open_sql.php",true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}



 //关闭邮件发送功能：
  function set_sm_close()
{
	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (!confirm("确认是否关闭邮件发送功能？")) { 
		window.event.returnValue = false; 
	}
	else{
		xmlhttp.open("GET","sm_close_sql.php",true);
		xmlhttp.send();
		setTimeout("location.reload()",100);	//延迟100毫秒，刷新页面
	}
}
 
 
 //单击添加按钮，将新增主机名，并关联到序列号
function sn_add_hostname()
	{ 
	var t1=document.getElementById("mach_sn_id").value;
	var t2=document.getElementById("sn_hostname_id").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("add_sn_hostname_id").innerHTML=xmlhttp.responseText;
		}
	}
	if(t2=='')
	{
		alert('主机名不能为空！'); window.location='change_sn.php?host_sn='+t1; 
	}
	else
	{
		if (!confirm("确认是否添加主机名 "+t2+"，并关联到序列号："+t1+" ？")) { 
			window.event.returnValue = false; 
		}
		else{
		xmlhttp.open("GET","add_sn_hostname_sql.php?msn="+t1+"&mhn="+t2,true);
		xmlhttp.send();
		setTimeout("location.reload()",100);
		}
	}
}

//作为Next的步骤，插入到数据库//后期 添加 发送邮件
   function Send_Mail_Next()
	{ 
	var t1=document.getElementById("case_num").value;
	//var t2=document.getElementById("a_cabinet_num").value;

	var xmlhttp;    

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("dis_active_info").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","case_active_sql.php?case_num="+t1,true);
	xmlhttp.send();
	//location.reload();  //激活了case后，直接刷新页面
}
 
 
 
 
 
 
 
 
 
 
 
////////////////联系人修改使用的JS代码////////////////
// 1-3根据tab切换，进行自动提交，列出可选择的联系人 
function get_cab_num(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("all_cabinet_num").innerHTML="请输入用户名！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("all_cabinet_num").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","g_room_get_cab.php?mach_room_id="+str,true);
xmlhttp.send();
}


//根据这个方法，输出不同的按钮（激活/下一步/关闭 按钮）
function Chk_Step(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("dis_but").innerHTML="ID为空！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("dis_but").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","g_step_get_but.php?step_id="+str,true);
xmlhttp.send();
}


function get_maint_eng(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("all_maint_eng").innerHTML="请输入用户名！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("all_maint_eng").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","g_maint_get_eng.php?maint_id="+str,true);
xmlhttp.send();
}


function eng_get_email(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("dis_maint_eng_email").innerHTML="请输序列号！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("dis_maint_eng_email").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","g_eng_get_email.php?maint_eng_id="+str,true);
xmlhttp.send();
}


 //1-3判断输入的机房位置是否已存在！
  function Chk_Room()
{
var t1=document.getElementById ("a_mach_room").value;
var xmlhttp;    
if (t1 =="")
  {
	  document.getElementById("add_lischkroom").innerHTML="<font color='red'>请输机房名！</font>";
	  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("add_lischkroom").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","chk_add_room.php?room="+t1,true);
xmlhttp.send();
} 


 //1-5验证新增的机柜号是否已存在
 function Chk_Cabinet()
{
var t1=document.getElementById ("a_cabinet_num").value;
var t2=document.getElementById ("a_mach_room_id").value;

var xmlhttp;    
if (t1 =="")
  {
	  document.getElementById("add_lischkcab").innerHTML="<font color='red'>请输机柜号！</font>";
	  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("add_lischkcab").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","chk_add_cab.php?cabnum="+t1+"&mach_room_id="+t2,true);
xmlhttp.send();
}

//设备制造上是否存在
 function Chk_Manu()
{
var t1=document.getElementById ("a_manu").value;
var xmlhttp;    
if (t1 =="")
  {
	  document.getElementById("add_lischkmanu").innerHTML="<font color='red'>请输入制造商名称！</font>";
	  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("add_lischkmanu").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","chk_add_manu.php?manu="+t1,true);
xmlhttp.send();
}


//1-6用于更新联系人信息，无需提交submit触发更新adm.php页面
function UpdateConner()
{ 
var t1=document.getElementById("m_d_uid").value;
var t2=document.getElementById("m_d_uname").value;
var t3=document.getElementById("m_d_uphone").value;
var t4=document.getElementById("m_d_ushortnum").value;
var t5=document.getElementById("m_d_uemail").value;
var t6=document.getElementById("m_d_udeptnum").value;


var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("upconner").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","update_conner.php?uid="+t1+"&uname="+t2+"&uphone="+t3+"&ushortnum="+t4+"&uemail="+t5+"&udeptnum="+t6,true);
xmlhttp.send();
}


//1-6用于删除联系人信息，无需提交submit触发更新adm.php页面
function DeleteConner()
{ 
var t1=document.getElementById("m_d_uid").value;
var t2=document.getElementById("m_d_uname").value; 
 
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("delconner").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","delete_conner.php?uid="+t1+"&uname="+t2,true);
xmlhttp.send();
}
////////////////部门(单位)管理使用的JS代码////////////////
////////////////部门(单位)管理使用的JS代码////////////////
////////////////部门(单位)管理使用的JS代码////////////////
// 2-1根据tab切换，进行自动提交，查询部门名称是否唯一
function ChkDeptName(str)
{
var dis_deptnum;    
if (str=="")
  {
  document.getElementById("chkdeptname").innerHTML="请输入部门名称！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  dis_deptnum=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  dis_deptnum=new ActiveXObject("Microsoft.XMLHTTP");
  }
dis_deptnum.onreadystatechange=function()
  {
  if (dis_deptnum.readyState==4 && dis_deptnum.status==200)
    {
    
	 if(dis_deptnum.responseText >= "1"  )          //检查联系人是否在数据库中有记录，=1说明有该UID已存在
        {
        document.getElementById("chkdeptname").innerHTML = "<font color=red size='1px'>该部门已存在！</font>";
        }
        else if(dis_deptnum.responseText == "0")
        {
        document.getElementById("chkdeptname").innerHTML="<font color=green  size='1px'>可以添加该部门！</font>";
        }
        else
        {
        document.getElementById("chkdeptname").innerHTML = "<font color=RED size='1px'>部门名称唯一性检测程序出错</font>";
        }
    }
  }
dis_deptnum.open("GET","validatechkdeptname.php?dept_name="+str,true);
dis_deptnum.send();
}

//2-3 新增部门的JS代码，无需submit提交后刷新adm
// 根据tab切换，进行自动提交，列出可选择的部门，进行选择性修改
function getDept(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("getdept").innerHTML="请输入部门名称！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("getdept").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validategetdept.php?dept_name="+str,true);
xmlhttp.send();
}

 //2-3根据上面的js获取到部门，这里列出部门的所有信息，以便于提供修改！
function LisDeptInfo(str)	
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("lisdeptinfo").innerHTML="<font color='#ffffff'>请选择列出的部门名称！</font>";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("lisdeptinfo").innerHTML=xmlhttp.responseText;
     }
  }
xmlhttp.open("GET","validatelisdept.php?dept_num="+str,true);
xmlhttp.send();
}
 
 //2-4新增部门触发的JS代码
function AddDept()
{ 
var t1=document.getElementById("a_deptname").value;

var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("adept").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","add_dept.php?dept_name="+t1,true);
xmlhttp.send();
}

//2-5用于更新联系人信息，无需提交submit触发更新adm.php页面
function UpdateDept()
{ 
var t1=document.getElementById("m_d_deptnum").value;
var t2=document.getElementById("m_d_deptname").value;
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("updept").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","update_dept.php?deptnum="+t1+"&deptname="+t2,true);
xmlhttp.send();
}


//2-6用于删除联系人信息，无需提交submit触发更新adm.php页面
function DeleteDept()
{ 
var t1=document.getElementById("m_d_deptnum").value;
var t2=document.getElementById("m_d_deptname").value; 
 
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("deldept").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","delete_dept.php?deptnum="+t1+"&deptname="+t2,true);
xmlhttp.send();
}


 
 
 
 
////////////////主机管理使用的JS代码////////////////
////////////////主机管理使用的JS代码////////////////
////////////////主机管理使用的JS代码////////////////
// 3-1根据tab切换，进行自动提交，查询hostname是否唯一
function AddChkHostname(str)
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("addchkhostname").innerHTML="<font color='red'>请输入hostname！</font>";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("addchkhostname").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validatechkaddhostname.php?hostname="+str,true);
xmlhttp.send();
} 

//// 3-2输入姓名后，根据tab切换，进行自动提交，列出可选择分配的联系人
function AddHostGetConner(str)
{
var xmlhttp;  
var t1=document.getElementById("addhstgetconner").value; 
if (str=="")
  {
  document.getElementById("addhstgetconner").innerHTML="<font color='red'>请输入用户名！</font>";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("addhstgetconner").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validateaddhostgetconner.php?uname="+str,true);
xmlhttp.send();
}

/*
 //3-3根据上面的js获取到联系人，这里列出联系人的所有信息，以便于选择分配给主机！
function lisconnerinfo2(str)	
{
var xmlhttp;    
if (str=="")
  {
  document.getElementById("lisconnerinfo2").innerHTML="请选择联系人分配给主机！";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("lisconnerinfo2").innerHTML=xmlhttp.responseText;
     }
  }
xmlhttp.open("GET","validatelisconner.php?uid="+str,true);
xmlhttp.send();
}
 */
//3-3点击新增主机 按钮，就会提交数据，增加主机对应的联系人

 function AddHost()
{ 
var t1=document.getElementById("a_hostname").value;
var t2=document.getElementById("a_hostname_uname").value;
var t3=document.getElementById("addhstgetconner").value;
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("ahost").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","add_host.php?hostname="+t1+"&uname="+t2+"&uid="+t3,true);
xmlhttp.send();

/*
var box=document.getElementById("ahost");
box.style.display="block"; 

setTimeout("codefans()",2000);*/
}
function codefans(){
var box=document.getElementById("ahost");
box.style.display="none"; 
}



/*
function ChkHostname_ChkUname()
{
var t1=document.getElementById("m_d_hostname").value;
var t2=document.getElementById("m_d_hostname_uname").value;
var t3=document.getElementById("getconner2").value;


var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("chkhostname").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validatechkhostname.php?hostname="+str,true);
xmlhttp.send();  
}

*/
//3-4更新Host触发，验证主机是否可以进行修改
function ChkModHostname(str){
if (str=="")
  {
  document.getElementById("chkmodhostname").innerHTML="请输入hostname！";
  return;
  }
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("chkmodhostname").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validatechkmodhostname.php?hostname="+str,true);
xmlhttp.send();  
}

//3-5更新联系人时，列出主机对应的联系人
function UpdateHostGetConner(str)
{
var xmlhttp;   
if (str=="")
  {
  document.getElementById("updatehostgetconner").innerHTML="<font color='red'>请输入用户名！</font>";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("updatehostgetconner").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","validateaddhostgetconner.php?uname="+str,true);
xmlhttp.send();
 

}

//3-6更新主机前检查主机名和联系人是否已经对应上了
function ChkHost_Conner(str)
{
var t1=document.getElementById("m_d_hostname").value;
var t2=document.getElementById("m_d_hostname_uname").value;
var t3=document.getElementById("updatehostgetconner").value;

var xmlhttp;   
if (str=="")
  {
  document.getElementById("chkhost_conner").innerHTML="<font color='red'>请输入用户名！</font>";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
      document.getElementById("chkhost_conner").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","chkhost_conner.php?hostname="+t1+"&uname="+t2+"&uid="+t3,true);
xmlhttp.send();
}


//3-7用于更新联系人信息，无需提交submit触发更新adm.php页面
function UpdateHost()
{ 
var t1=document.getElementById("m_d_hostname").value;
var t2=document.getElementById("m_d_hostname_uname").value;
var t3=document.getElementById("updatehostgetconner").value;
var t4=document.getElementById("m_d_hostname_type").value;	//获取主机业务类型
var t5=document.getElementById("kh").value;	//获取主机是否影响集团考核
var xmlhttp;   
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
		document.getElementById("uphost").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","update_host.php?hostname="+t1+"&uname="+t2+"&uid="+t3+"&type="+t4+"&kh="+t5,true);
xmlhttp.send();


	
}

/*

//2-5用于删除联系人信息，无需提交submit触发更新adm.php页面
function DeleteDept()
{ 
var t1=document.getElementById("m_d_deptnum").value;
var t2=document.getElementById("m_d_deptname").value; 
 
var xmlhttp;    

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("deldept").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","delete_dept.php?deptnum="+t1+"&deptname="+t2,true);
xmlhttp.send();
}

*/



//4-1构造提交设置当天的值班人员
function AddTody()	//单击更新按钮，首先按钮的ID，这个ID是以日期自动生成的
{ 
function bb()		//这是单击更新按钮后获取按钮的ID
	{
var t1=event.srcElement.id;		//day把按钮的ID赋予给t3变量，这个传递给add_zb.php的day的值

var t5="unamea"+t1;				//构造uname的ID  t4变量
var t6="yeara"+t1;				//构造year的ID  t4变量
var t7="montha"+t1;				//构造month的ID  t4变量

var t2=document.getElementById(t5).value;	//这个传递给add_zb.php的uname的值
var t3=document.getElementById(t6).value;		//这个传递给add_zb.php的year的值
var t4=document.getElementById(t7).value;		//这个传递给add_zb.php的month的值

var xmlhttp;   
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("add"+t1).innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","add_zb.php?day="+t1+"&uname="+t2+"&year="+t3+"&month="+t4,true);		//通过t3和t5，传递个PHP进行修改值班人员
xmlhttp.send();

	}
document.onclick=bb;
// location.reload();	//单击按钮后，自动刷新本页面
}


//4-2构造提交更新当天的值班人员
 function UpdateTody()	//单击更新按钮，首先按钮的ID，这个ID是以日期自动生成的
{ 
function bb()		//这是单击更新按钮后获取按钮的ID
	{
var t1=event.srcElement.id;		//把按钮的ID赋予给t3变量
var t3="update"+t1;				//生成t4变量
var t2=document.getElementById(t3).value;	//获取t4变量的ID内部的值，这个值就是select选择的姓名

var t6="upyeara"+t1;				//构造year的ID  
var t7="upmontha"+t1;				//构造month的ID  
var t3=document.getElementById(t6).value;		//这个传递给update_zb.php的year的值
var t4=document.getElementById(t7).value;		//这个传递给update_zb.php的month的值

var xmlhttp;   
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("disup"+t1).innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","update_zb.php?day="+t1+"&uname="+t2+"&year="+t3+"&month="+t4,true);		//通过t3和t5，传递个PHP进行修改值班人员
xmlhttp.send();
	}
document.onclick=bb; 
// location.reload();	//单击按钮后，自动刷新本页面
}


//实时搜索--search_conner.php
function showResult_conner(str)
{
	if (str.length==0)
	{ 
		document.getElementById("livesearch_conner").innerHTML="";
		document.getElementById("livesearch_conner").style.border="0px";
		return;
	}
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("livesearch_conner").innerHTML=xmlhttp.responseText;
			document.getElementById("livesearch_conner").style.border="1px solid #A5ACB2";
		}
	}
	xmlhttp.open("GET","livesearch_conner.php?uname="+str,true);
	xmlhttp.send();
}

//实时搜索--search_host.php
function showResult_host(str)
{
	if (str.length==0)
	{ 
		document.getElementById("livesearch_host").innerHTML="";
		document.getElementById("livesearch_host").style.border="0px";
		return;
	}
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("livesearch_host").innerHTML=xmlhttp.responseText;
			document.getElementById("livesearch_host").style.border="1px solid #A5ACB2";
		}
	}
	xmlhttp.open("GET","livesearch_host.php?hostname="+str,true);
	xmlhttp.send();
}