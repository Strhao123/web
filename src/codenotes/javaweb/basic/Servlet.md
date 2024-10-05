---
# 当前页面内容标题
title: Servlet
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

## 一、 Selvet基础

>1. JavaEE 规范之一，规范就是接口
>2. JavaWeb[^1] 三大组件[^2]之一
>3. 运行在服务器上的一个 java 小程序，可以接收请求响应数据



###  功能实现

```java
public class HelloServlet implements Servlet {
    
 	// service方法是专门用来处理请求和响应的
 	@Override
 	public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
 		System.out.println("Hello Servlet被访问了");
 	}
    
 }
```

web.xml中的配置

```xml
 <!-- servlet 标签给Tomcat配置Servlet程序-->
<servlet>
 	<servlet-name>Servlet 程序起一个别名（一般是类名）</servlet-name>
 	<servlet-class>Servlet 程序的全类名</servlet-class>
 </servlet>


<!--servlet-mapping 标签给 servlet 程序配置访问地址-->
<!-- http://ip:port/工程路径/地址-->
 <servlet-mapping>
 	<servlet-name>告诉服务器，我当前配置的地址给哪个Servlet程序使用</servlet-name>
 	<url-pattern>/访问地址</url-pattern>
 </servlet-mapping>
```

> http://ip:port/工程路径   默认访问index.jsp



### 生命周期

> 1. 执行Servlet 构造器方法
> 2. 执行init 初始化方法
> 3. 执行service 方法
> 4. 执行destroy 销毁方法

注意：1、2点在第一次访问时调用，第3点每次访问时都调用



###  请求分发处理

```java
public class HelloServlet implements Servlet {

  @Override
  public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {

 	//类型转换（因为它有getMethod()方法）
	HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
 	//获取请求的方式
	String method = httpServletRequest.getMethod();
 	if ("GET".equals(method)) {
 		doGet();
 	} else if ("POST".equals(method)) {
 		doPost();
	 }
  }
    
   public void doGet(){
 	业务代码
  }

   public void doPost(){
 	业务代码
  }
}
```

   

###  HttpServlet

```java
public class HelloServlet2 extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException {
 	业务代码
 	}

   @Override
   protected void doPost(HttpServletRequestreq,HttpServletResponseresp) throws ServletException, IOException {
 	业务代码
 	}
}
```

要在web.xml中配置servlet

==可以在IDEA中快速创建==

![image-20241002204224295](https://gitee.com/private_crh/notes/raw/javaweb/typora/image-20241002204224295.png)







###  ServletConfig 类

> 1. Servlet 程序和 ServletConfig 对象都是由 Tomcat 负责创建，我们负责使用
>
> 2. Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个 Servlet 程序创建时，就创建一个对应的ServletConfig对象

作用：

- 获取 Servlet 程序的别名 servlet-name 的值
- 获取初始化参数 init-param
- 获取 ServletContext 对象

```xml
<!--init-param 是初始化参数-->
<init-param>
	<param-name>username</param-name>
    <param-value>root</param-value>
</init-param>
```

```java
@Override
public void init(ServletConfig servletConfig) throws ServletException {

    super.init(config);
    
	// 1、可以获取 Servlet 程序的别名 servlet-name 的值
	System.out.println("HelloServlet 程序的别名是:" + servletConfig.getServletName());
    
    // 2、获取初始化参数 init-param
	System.out.println("初始化参数 username 的值是;" + 						    		     	  servletConfig.getInitParameter("username"));
    
    // 3、获取 ServletContext 对象
	System.out.println(servletConfig.getServletContext());
}
```



###  ServletContext 类

> 1. 是一个接口，它表示 Servlet 上下文对象
>
> 2. 一个 web 工程，只有一个 ServletContext 对象实例
>
> 3. 在 web 工程部署启动的时候创建，在 web 工程停止的时候销毁
>
> 4. 是一个域对象[^3]

|        | 存数据         | 取数据         | 删除数据          |
| ------ | -------------- | -------------- | ----------------- |
| Map    | put()          | get()          | remove()          |
| 域对象 | setAttribute() | getAttribute() | removeAttribute() |

作用

- 获取 web.xml 中配置的上下文参数 context-param
- 获取当前的工程路径，格式: /工程路径
- 获取工程部署后在服务器硬盘上的绝对路径
- 像 Map 一样存取数据

```java
protected void doGet(HttpServletRequest request, HttpServletResponse response) throwsServletException, IOException {
	// 1、获取 web.xml 中配置的上下文参数 context-param
	ServletContext context = getServletConfig().getServletContext();
	String username = context.getInitParameter("username");

	// 2、获取当前的工程路径，格式: /工程路径
    System.out.println( "当前工程路径:" + context.getContextPath() );
    
	// 3、获取工程部署后在服务器硬盘上的绝对路径
    // 拿到http://ip.port/工程名
	System.out.println("工程部署的路径是:" + context.getRealPath("/"));

    // 4、像 Map 一样存取数据
	context.setAttribute("key1", "value1");
	System.out.println("获取域数据 key1 的值是:"+ context.getAttribute("key1"));
}
```

```xml
<!--context-param 是上下文参数(它属于整个 web 工程)-->
<context-param>
	<param-name>username</param-name>
	<param-value>context</param-value>
</context-param>
```





## 二、 HTTP

客户端和服务器之间通信时，发送的数据，需要遵守的规则，叫HTTP 协议

- GET：请求行、请求头

  > form 标签 method=get	a 标签	link 标签引入 css	Script 标签引入 js 文件
  >
  > img 标签引入图片	iframe 引入 html 页面	在浏览器地址栏中输入地址后敲回车

- POST：请求行、请求头、请求体

  >form 标签 method=post

响应：响应行、响应头、响应体



==MIME类型==多功能 Internet 邮件扩充服务

MIME 类型的格式是“大类型/小类型”，并与某一种文件的扩展名相对应。

 [常见请求和响应头-说明.pdf](https://gitee.com/private_crh/notes/raw/javaweb/typora/%E5%B8%B8%E8%A7%81%E8%AF%B7%E6%B1%82%E5%92%8C%E5%93%8D%E5%BA%94%E5%A4%B4-%E8%AF%B4%E6%98%8E.pdf) 



## 三、 Servlet进阶

###  HttpServletRequest 类[^4]

#### 常用方法

| 方法                      | 作用                                 |
| ------------------------- | ------------------------------------ |
| getRequestURI()           | 获取请求的资源路径（/工程名/路径）   |
| getRequestURL()           | 获取请求的统一资源定位符（绝对路径） |
| getRemoteHost()           | 获取客户端的 ip 地址                 |
| getHeader()               | 获取请求头                           |
| getParameter()            | 获取请求的参数                       |
| getParameterValues()      | 获取请求的参数（多个值的时候使用）   |
| getMethod()               | 获取请求的方式 GET 或 POST           |
| setAttribute(key, value); | 设置域数据                           |
| getAttribute(key);        | 获取域数据                           |
| getRequestDispatcher()    | 获取请求转发对象（"/路径"）          |



#### 解决中文乱码

- doGet

  ```java
  // 获取请求参数
  String username = req.getParameter("username");
  
  // 先以 iso8859-1 进行编码
  // 再以 utf-8 进行解码
  username = new String(username.getBytes("iso-8859-1"), "UTF-8");
  ```

- doPost

  ```java
  // 设置请求体的字符集为 UTF-8，从而解决 post 请求的中文乱码问题
  req.setCharacterEncoding("UTF-8");
  
  // 获取请求内容必须在setCharacterEncoding后面
  String username = req.getParameter("username");
  ```



#### 请求转发[^5]

 特点：

- 浏览器地址栏不变
- 一次请求
- 共享Request数据
- 可以转发到WEB-INF下
- 不可访问工程外的资源



==Servlet1==

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException,IOException {
	// 获取请求的参数
	String username = req.getParameter("username");
	
	// 传递到Servlet2查看
	req.setAttribute("key1","柜台 1 的章");

	RequestDispatcher requestDispatcher = req.getRequestDispatcher("/servlet2");
    requestDispatcher.forward(req,resp);
	}
}
```

==Servlet2==

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws 	ServletException,IOException {
	// 获取请求的参数
	String username = req.getParameter("username");
	
	// 查看
	Object key1 = req.getAttribute("key1");
	
	// 处理自己的业务
	}
}
```



#### 斜杠在Web不同含义

> 在 web 中 / 斜杠 是一种绝对路径
>
> - 被浏览器解析，得到的地址是：http://ip:port/
>
> - 被服务器解析，得到的地址是：http://ip:port/工程路径
>
>   特殊情况： response.sendRediect(“/”); 把斜杠发送给浏览器解析。得到http://ip:port/





###  HttpServletResponse 类[^6]

| 字节流 | getOutputStream(); | 常用于下载（传递二进制数据） |
| ------ | ------------------ | ---------------------------- |
| 字符流 | getWriter();       | 常用于回传字符串（常用）     |

- 两个流同时只能使用一个。



#### 往客户端回传数据

```java
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException,IOException {
	// 要求 ： 往客户端回传 字符串 数据。
	PrintWriter writer = resp.getWriter();
	writer.write("response's content!!!");
	}
}
```



#### 响应乱码解决

两种方案

```java
// 设置服务器字符集为 UTF-8
resp.setCharacterEncoding("UTF-8");
// 通过响应头，设置浏览器也使用 UTF-8 字符集
resp.setHeader("Content-Type", "text/html; charset=UTF-8");

// 它会同时设置服务器和客户端都使用 UTF-8 字符集，还设置了响应头
// 此方法一定要在获取流对象之前调用才有效
resp.setContentType("text/html; charset=UTF-8");
```



#### 请求重定向[^7]

特点：

- 浏览器地址栏会变
- 两次请求
- 不共享Request数据
- 不能访问WEB-INF下资源
- 可访问工程外的资源

两种方案

```java
// 设置响应状态码 302 ，表示重定向，（已搬迁）
resp.setStatus(302);
// 设置响应头，说明 新的地址在哪里
resp.setHeader("Location", "http://localhost:8080");

// 自动化设置
resp.sendRedirect("http://localhost:8080");
```

















[^1]:所有通过 Java 语言编写可以通过浏览器访问的程序的总称
[^2]:Servlet、Filter、Listener
[^3]:域对象，是可以像 Map 一样存取数据的对象，叫域对象。 这里的域指的是存取数据的操作范围，整个 web 工程。
[^4]:每次只要有请求进入 Tomcat 服务器，Tomcat 服务器就会把请求过来的 HTTP 协议信息解析好封装到Request 对象中。然后传递到 service 方法（doGet 和 doPost）中给我们使用。我们可以通过 HttpServletRequest 对象，获取到所有请求的信息。
[^5]:服务器收到请求后，从一次资源跳转到另一个资源的操作叫请求转发
[^6]: HttpServletResponse 类和 HttpServletRequest 类一样。每次请求进来，Tomcat 服务器都会创建一个Response对象传递给 Servlet 程序去使用。HttpServletRequest 表示请求过来的信息，HttpServletResponse 表示所有响应的信息，我们如果需要设置返回给客户端的信息，都可以通过 HttpServletResponse 对象来进行设置
[^7]: 请求重定向，是指客户端给服务器发请求，然后服务器告诉客户端说。我给你一些地址。你去新地址访问。叫请求重定向（因为之前的地址可能已经被废弃）。

