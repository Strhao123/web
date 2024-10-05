---
title: XML
# 当前页面图标
icon: write
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
article: true
# 是否将该文章添加至时间线中
timeline: true
---
    

xml 是可扩展的标记性语言。

作用：保存数据、配置文件、作为网络传输数据的格式（Json）



## 一、 语法

### 1. 声明

```xml
<?xml version="1.0" encoding="UTF-8"?>
```

### 2. 注释

```
<!-- 内容 -->
```

### 3. xml元素

元素是指从开始标签到结束标签的内容。

例如：\<title>java 编程思想 \</title>

也有单标签和双标签

### 4. 命名规则

>1. 可以含字母、数字以及其他的字符
>2. 不能以数字或者标点符号开始
>3. 不能包含空格

### 5.文本区域（CDATA区）[^2]

```xml
<![CDATA[ 文本 ]]>
```





## 二、 规则

>1. 所有xml元素需闭合
>2. 需正确嵌套
>3. 必须有根元素[^3]，且==唯一==
>4. 一个标签上可以书写多个属性，每个属性的值必须使用 ==引号== 引起来。
>5. 特殊字符特殊处理，例如：> 用&gt



## 三、 xml解析

早期 JDK 为我们提供了两种 xml 解析技术 DOM 和 Sax[^4]

### dom4j 解析技术[^5]

```
// 第一步，通过创建 SAXReader 对象。来读取 xml 文件，获取 Document 对象
	SAXReader reader = new SAXReader();
	Document document = reader.read("xml路径");

// 第二步，通过 Document 对象。拿到 XML 的根元素对象
	Element root = document.getRootElement();
	
// 第三步，通过根元素对象。获取所有的 book 标签对象
	List<Element> books = root.elements("book");
	
// 第四步，遍历每个 book 标签对象。然后获取到 book 标签对象内的每一个元素，
	for (Element book : books) {
		// 拿到 book 下面的 name 元素对象
		Element nameElement = book.element("name");
}
```



>1. Element.asXML() ：将当前元素转换成为 String 对象
>2. getText() ：拿到起始标签和结束标签之间的文本内容
>3. Element.attributeValue("属性名")：获取标签内属性值




[^2]:CDATA 语法可以告诉 xml 解析器，我 CDATA 里的文本内容，只是纯文本，不需要xml 语法解析
[^3]:根元素就是顶级元素， 没有父标签的元素，叫顶级元素
[^4]:sun 公司在 JDK5 版本对 dom 解析技术进行升级，不会创建大量的 dom 对象
[^5]:由于 dom4j 它不是 sun 公司的技术，而属于第三方公司的技术，我们需要使用dom4j 就需要到dom4j 官网下载dom4j的 jar 包。







