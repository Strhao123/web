---
# 当前页面内容标题
title: Tomcat
# 当前页面图标
icon: java
# 分类
category:
  - 计算机
# 标签
tag:
  - javaweb
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---




请求和响应是成对出现的，有请求就有响应。



## 一、 基础

### Web 资源的分类

> 静态资源： html、css、js、txt、mp4 视频 , jpg 图片 
>
> 动态资源： jsp 页面、Servlet 程序



### 常用的Web 服务器

Tomcat、Jboss、GlassFish、Resin、WebLogic



### Tomcat 服务器和Servlet 版本的对应关系

![image-20241001115805003](https://gitee.com/private_crh/notes/raw/javaweb/typora/image-20241001115805003.png)



## 二、 使用

解压即可使用

###  启动

> 1. bin 目录下的 startup.bat 文件，双击
> 2. cd 到 bin 下，执行catalina run

###  停止

> 1. 点击 tomcat 服务器窗口的 x 关闭按钮
> 2. 把 Tomcat 服务器窗口置为当前窗口，然后按快捷键 Ctrl+C
> 3. bin 目录下的 shutdown.bat，双击

###  改端口[^1]

conf / server.xml 的connector 标签

###  部署

> 1. webapps下一个目录等于一个工程
> 2. conf / Catalina / localhost / xml 文件

```xml
<Context path="/abc" docBase="E:\book" />
```

###  访问

http://ip:port/                 ====>>>>    没有工程名的时候，默认访问的是 ROOT 工程。

http://ip:port/工程名/    ====>>>>    没有资源名，默认访问 index.html 页面



## 三、 IDEA 整合 Tomcat





[^1]:Tomcat默认端口8080，http默认端口80（可隐藏）
