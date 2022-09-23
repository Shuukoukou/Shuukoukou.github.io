---
title: JSP内置对象
date: 2022-09-18 12:13:49
tags: Java
categories: Java程序设计Ⅱ
images: https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/JSP内置对象.1240hwhts5ow.webp
---

![](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/JSP内置对象.1240hwhts5ow.webp)

## 🚀1. request对象

💬用户每访问一个页面，就会产生一个HTTP请求。这些请求中一般都包含了请求所需的参数值或者信息，如果将request对象看作是客户请求的一个实例，那么这个实例就包含了客户请求的所有数据。因此，可以通过request来获取客户端和服务端的信息，如IP地址、传递的参数名和参数值、应用系统名称、服务器主机名称等。



⚡request对象的常用方法

| 方法                 | 方法说明                                                     |
| -------------------- | ------------------------------------------------------------ |
| <font color="red">getParameter()</font>       | 取得请求中指定的参数值，返回String类型，如果有必要，需要将取得的参数值转换为合适的类型。 |
| getParameterValues() | 将同名称的参数一次性地读入String类型的数组中。               |
| getParameterNames()  | 获取参数名称，返回枚举类型。                                 |
| getMethod()          | 获取客户提交信息的方式，即post或get                          |
| getServeletPath()    | 获取JSP页面文件的目录。                                      |
| <font color="red">getHeader()</font>           | 获取HTTP头文件中的指定值，例如accept、user-agent、content-type、content-length等。 |
| getRemoteAddr()      | 获取客户的IP地址。                                           |
| getServerName()      | 获取服务器的名称。                                           |
| getServerPort()      | 获取服务器的端口号。                                         |
| getContextPath()     | 获取项目名称，如果项目为根目录，则得到空的字符串。           |
| getHeaders()         | 获取表头信息，返回枚举类型。                                 |


⚡getParameter.jsp用于获取页面参数值，代码如下：
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/J_1.1ce1hu5wzpy8.webp" style="margin:0;" />

💬启动Tomcat服务器后，打开getParameter.jsp的页面后，在浏览器中的该页面的访问地址后添加`?name=张三&city=Beijing`，按回车键后页面会显示"欢迎张三，您所在的城市是Beijing。"的文字。

💬实际上，上述传递参数的方法在实际的开发中相比表单提交参数要较少使用，因为这种提交参数的方法完全将参数暴露出来，不利于隐私保护，所以我们一般采取表单提交的方式传递参数。

💬在表单form中，有两个非常重要的属性:action和method属性action指明表单提交后的数据跳转到指定页面并处理参数。method有两个值，分别是get和post,通常指定为post,因为指定为get时，在表单中设定的参数和参数值将附加到页面地址的末尾以参数的形式提交，这样会暴露参数值，不安全；而指定为post并提交表单时，表单中的参数将被作为请求头中的信息发送，不会在目标地址中添加任何参数，这样就不会暴露出参数值，所有出于安全考虑，一般会选择post提交。

⚡下面我们看一个post提交方式来获取网页请求参数的例子。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/J_2.5fh8lfka5q40.webp" style="margin:0;" />
这个例子中的getParameter.jsp和我们的第一个例子中的代码相同。


⚡我们也可以利用request对象来获取请求的头部信息。请求头部信息时我们可以用<font color="red">getHeader(String name)</font>方法。代码如下：
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/J_3.55ggsrxpc5o0.webp" style="margin:0;" />



## 🚀2. response对象

💬当用户访问一个页面时，就会产生一个HTTP请求,服务器做出响应时调用的是response响应包。response响应包实现的是接口javax.servlet.http.HttpServletResponse。

⚡response对象的常用方法

| 方法                                 | 方法说明                   |
| ------------------------------------ | -------------------------- |
| addHeader(String name, String value) | 向页面中添加头和对应的值。 |
| addCookie(Cookie cookie)             | 添加Cookie信息             |
| sendRedirect(String uri)             | 实现页面重定向             |
| setStatus(int code)                  | 设定页面的响应状态代码     |
| setContentType(String type)          | 设定页面的MIME类型和字符集 |
| setCharacterEncoding(String charset) | 设定页面响应的编码类型     |
| setHeader(String name,String value)  |                            |

<br/>
⚡我们利用response对象的方法设置HTML页面中存在于head标签之间的信息。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/J_4.1c2mb5iy863k.webp" style="margin:0;" />
在上面这段代码中，用setHeader和addHeader两个方法设置了meta头信息。而且实现了一个跳转页面的操作。
<br/><br/>



⚡除了我们刚才在上面代码中使用的addHeader来设置跳转之外，也可以通过response的sendRedirect()方法设置页面重定向来实现跳转。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JSP内置对象/J_5.3bwz1xo8rg20.webp" style="margin:0;" />


## 🚀3. session对象

💬在Web开发中,session对象同样占据着及其重要的位置，它是一个非常重要的对象，可以用来判断是否为同一用户,还可以用来记录客户的连接信息等。HTTP协议是一种无状态的协议(不保存连接状态的协议)，每次用户请求在接收到服务器的响应后，连接就关闭了，服务器端与客户的连接被断开，因此，如果用户的浏览器还没关闭时又发起请求，那么网站就应该识别出该用户的情况。在这种情况下，session对象就起到了关键作用。



| 名称                    | 说明                                                         |
| ----------------------- | ------------------------------------------------------------ |
| 会话                    | 从用户打开浏览器连接到一个Web应用或者是某个界面，直至关闭浏览器这个过程称为一个会话。其实打开一个浏览器就意味着打开了一个会话对象。 |
| session对象生命周期     | 从用户访问某个页面到关闭浏览器这段时间称为session对象的生命周期，也可以说从会话开始到结束这段时间为session对象的生命周期。 |
| session对象与Cookie对象 | session对象与Cookie对象是一一对应关系。JSP引擎会将创建好的session对象存放在对应的Cookie中。 |



⚡session对象的常用方法

| 方法                                         | 说明                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| void setAttribute(String name, Object value) | 将参数名和参数值存放在session对象中。                        |
| Object getAttribute(String name)             | 返回session中与指定参数绑定的对象，如果不存在就返回null。    |
| Enumeration getAttributeName()               | 一个用户一个线程，从而保证多个用户单击同一页面时session对象的唯一性。 |
| String getId()                               | 获取session对象的ID值。                                      |
| void removeAttribute(String name)            | 移除session中指定名称的参数。                                |
| long getCreationTime()                       | 获取对象创建的时间，返回结果是long型的毫秒数。               |
| int getMaxInactiveInterval()                 | 获取session对象的有效时间。                                  |
| void setMaxInactiveInterval()                | 设置session对象的有效时间。                                  |
| boolean isNew()                              | 用于判断是否为一个新的客户端。                               |
| void invalidate()                            | 使session对象不合法，即失效。                                |



## 🚀4. application对象
💬application对象实现的接口为javax.servlet.ServletContext,它的生命周期是从application对象创建到应用服务器关闭，也就是说当服务器关闭时application对象才消失。可以将它视为Web应用的全局变量,当服务器运行时有效，如果关闭服务器，其中保存的信息也就消失了。

## 🚀5. out对象


## 🚀6. page对象


## 🚀7. config对象