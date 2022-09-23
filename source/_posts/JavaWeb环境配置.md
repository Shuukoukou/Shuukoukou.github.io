---
title: JavaWeb环境配置
date: 2022-09-12 16:00:40
tags: Java
categories: Java程序设计Ⅱ
images: https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/JavaWeb_post1.6hhe9c3vid80.webp
---

![](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/JavaWeb_post1.6hhe9c3vid80.webp)

## 1.配置JavaHome环境变量

配置JavaHome环境变量前，请先确认电脑是否已经安装JDK。同时按Window键+R键，打开运行窗口，输入cmd后，按回车键，打开命令提示符窗口。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.4bhhxint2li0.webp" style="margin:0;" />

<br/><br/>
输入<b>`java --version`</b>命令，如果出现Java版本号，说明JDK已经安装，如出现其他信息说明JDK未安装或有其他问题。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.4xj7shfln4g0.webp" style="margin:0;" />

<br/><br/>
右击此电脑。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images1.5sz25yey3xg0.webp" style="width:100%;height:100%;" />

<br/>
打开属性。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images2.3j3mzotw0vi0.webp" style="width:100%;height:100%;" />

<br/><br/>
点击环境变量。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images3.5bwxufys8200.webp" style="width:100%;height:100%;" />

<br/><br/>
新建JAVA_HOME系统变量，变量值填入自己电脑的JDK所在的路径。填完之后，点击确定。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.2a5hbn2plvi8.webp" style="margin:0;" />

<br/><br/>
选择Path，点击编辑按钮。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.6fj6vvbsi1w0.webp" style="margin:0;"/>

<br/><br/>
进入编辑环境变量窗口，点击新建按钮。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.qujelff996o.webp" style="margin:0;" />

<br/><br/>
配置JAVA_HOME环境变量。然后点击各个窗口的确定键。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.30u3ggcls460.webp" style="margin:0;" />

## 2.配置Tomcat服务器

解压Tomcat压缩包。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.5xeyrjf7e1w0.webp" style="margin:0;" />

<br/><br/>
打开解压后的文件夹。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.2eyhd9nar8nw.webp" style="margin:0;" />

<br/><br/>
打开Tomcat文件夹下的bin目录，双击startup.bat。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.5pk9x3i1tzo0.webp" style="margin:0;" />

<br/><br/>
如果出现如下图的黑色窗口，说明JAVA_HOME环境配置没有问题，Tomcat能正常启动。如果黑色窗口发生闪退打不开的现象时，说明JAVA_HOME或其他地方的配置存在问题，需要进行排查。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.1iddrh8erg1s.webp" style="margin:0;" />

<br/><br/>
上一步中黑色窗口显示的文字的是乱码文字，可以修改logging.properties，将UTF-8修改为GBK，修改完后，进行保存。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.1j32xioirjxc.webp" style="margin:0;" />

<br/><br/>
重启Tomcat服务器，查看此时黑色窗口的乱码文字是否已变成正常显示的汉字。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images4.1thu2payskxs.webp" style="margin:0;" />

<br/><br/>
回到Tomcat文件下，在webapps文件夹下，新建JavaWeb文件夹。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.3qnlgpo3s760.webp" style="margin:0;" />

<br/><br/>
然后再打开ROOT文件夹，复制WEB-INF文件夹和index.jsp到上一步中新建的JavaWeb文件夹里。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.54qdgaigc800.webp" style="margin:0;" />

<br/><br/>
这一步是配置虚拟目录。打开Tomcat的conf文件夹，找到server.xml文件并打开，然后将<b>`<Context path="projects" docBase="" />`</b>复制粘贴到原来148行的</Host>的前面一行里并保存。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.4xg9g7c4m4w0.webp" style="margin:0;" />

<br/><br/>
返回Tomcat文件夹，打开刚才新建的JavaWeb文件夹，复制其路径。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.3se4cnecfme0.webp" style="margin:0;" />

<br/><br/>
将复制的路径粘贴到server.xml文件的第148行里的docBase后的双引号里面。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.49bm2itu1m20.webp" style="margin:0;" />

<br/><br/>
为了更好的使用项目文件里的文件，我们可以打开listings的设置，将服务器上的文件列表显示到页面上。打开conf文件夹下面的web.xml文件，然后找到127行，将<b>`false`</b>改成<b>`true`</b>并保存。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.2ydveh6h2740.webp" style="margin:0;" />

<br/><br/>
还是在web.xml文件中，然后找到4737行，将<b>`<welcome-file-list>`</b>里的代码全部注释掉(同时按Window键+/键进行注释)并保存。
<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/JavaWeb环境配置/images5.3rbbqkdwubq0.webp" style="margin:0;" />


<iframe style='width: 710px;height: 400px' src="//player.bilibili.com/player.html?aid=27643533&bvid=BV11s411P7pg&cid=47703725&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
