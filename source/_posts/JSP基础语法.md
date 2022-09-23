---
title: JSP基础语法
date: 2022-09-13 22:35:58
tags: Java
categories: Java程序设计Ⅱ
images: https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/JSP基础语法.3k2aq6k0qnu0.webp
---

![](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/JSP基础语法.3k2aq6k0qnu0.webp)

## 🚀1. JSP的注释

<br/>

- 第一种语法形式：HTML注释

⚡<b>`<!-- 注释的内容 -->`</b>

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images2-(1).1msi06snd734.webp" style="margin:0;" />

<br/><br/>

- 第二种语法形式：JSP注释

⚡<b>`<%-- 注释的内容 --%>`</b>

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images3.5c0vmth9zxg0.webp" style="margin:0;" />

<br/><br/>

- 第三种语法形式：Java注释

⚡<b>`// 单行注释 `</b>
⚡<b>`/* 多行注释 */`</b>

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images4.7ihwqnw9jxo0.webp" style="margin:0;" />

<br/><br/>

## 🚀2. JSP的声明

- 语法形式

<b>`<%! 全局变量定义/方法定义/类 %>`</b>

1> 定义全局变量

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images5.5f7e4hqnook0.webp" style="margin:0;" />

2> 定义方法

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images6.5ekudy9j0380.webp" style="margin:0;" />

3> 定义类

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images7.3az04pdwauo0.webp" style="margin:0;" />


<b>`<% 局部变量定义 %>`</b>

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images8.2dry214fsj8k.webp" style="margin:0;" />

<br/>

🔥<font color="red"><%! %>和<% %>定义变量的区别</font>

🔥<font color="red">有！声明的是全局变量，没！声明的是局部变量。</font>

## 🚀3. JSP的表达式

- 语法形式

⚡<b>`<%=变量或者表达式%>`</b>

💬原来用out.print();输出的部分可以由JSP的表达式进行输出。

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images9.48fshv9hep0.webp" style="margin:0;" />

<br/>

## 🚀4. JSP的指令


1> Page指令


- 语法形式

⚡<b>`<%@ page 属性1= "值2" 属性2= "值2" ….%>`</b>

💬在所有的属性中除import可以声明多个外，其他的属性都只能出现一次。

💬page指令的属性可以写在同一行，也可以分行写。


<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images10.9ylrmyca21.webp" style="margin:0;" />


2> include指令(静态导入)

- 语法形式

⚡<b>`<%@ include file="URL" %>`</b>

💬include指令可以导入JSP文件，也可以导入HTML文件。

include.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images11.7dmu98ovbsk0.webp" style="margin:0;" />

header.html
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images12.ens7c41hr14.webp" style="margin:0;" />

footer.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images13.654qdiljd540.webp" style="margin:0;" />



[jgxy2.jpg](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/jgxy2.3a5uwc66xwo0.webp)

[logo.jpg](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/logo.3ap97dof7xc0.webp)

💬以上，三个文件和两张照片组成一个完整的Include导入的例子。大家可以编写三个这样的文件和下载两张照片放在同一个文件夹里，然后把图片名修改一下，jgxy2.3a5uwc66xwo0.webp修改为jgxy2.jpg,logo.3ap97dof7xc0.webp修改为logo.jpg。



## 🚀5. JSP的动作

1> <jsp:include>动作(动态导入)


- 语法形式

⚡<b>`<jsp:include page="URL" flush="true" />`</b>

💬flush属性用于指定输出缓存是否转移到被导入文件中。如果指定为true，则包含在导入文件中；如果指定为false,则包含在源文件中。


我们可以把4.JSP的指令中的include指令改成JSP的include动作，看一下能否正常显示。

include_action.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images14.i2v30u67f2o.webp" style="margin:0;" />


2> <jsp:param>动作


- 语法形式

⚡<b>`<jsp:param name="参数名称" value="参数值" />`</b>

💬作用：用来传递参数信息，她经常与其他动作一起使用，例如与<jsp:forward>、<jsp:include>等结合使用，用于传递主页面的参数到目标页面。
💬传递过来的参数用<font color="red">request.getParameter()</font>来接收。且接收的返回值类型一定是String类型。

param_action.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images15.jr7zjyn1xr4.webp" style="margin:0;" />

我们修改一下原来的footer.jsp文件，添加如下图红框里的用request.getParameter()接收值得部分和把接收到的值显示出来的部分。

footer.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images16.6vlynmmpin80.webp" style="margin:0;" />


3> <jsp:forward>动作


- 语法形式

⚡<b>`<jsp:forward page="URL" />`</b>

💬作用：转发请求到另外一个页面中，在请求过程中会连同请求的参数数据一起被转发到目标页面中，目标页面通过request.getParameter方法获得参数值进行进一步处理。

🔥<font color="red">forward动作的跳转属于服务器端跳转，跳转后的页面的url还是原来页面的，没有发生改变。</font>
🔥<font color="red">forward动作中的url页面只能是该Web应用中的文件，而不能是该Web应用之外的文件。</font>

forward_action.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images17.wzamrbs0zi8.webp" style="margin:0;" />


Page1.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images18.4bvha1qlk860.webp" style="margin:0;" />

Page2.jsp
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP基础语法/images19.my879vzkh5c.webp" style="margin:0;" />

以上3个文件，编写完后放在同一个文件夹下。
