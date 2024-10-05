import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "博客主页", icon: "blog", link: "/blog/" },
  { text: "代码笔记", icon: "code", link: "/codenotes/" },
  { text: "浮生杂记", icon: "note", link: "/floatinglife/" },


  {
    text: "资源宝库",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "书籍资源",
        icon: "animation",
        link: "books/",
      },
      {
        text: "影音资源",
        icon: "play",
        link: "videos/",
      },
    ],
  },


  {
    text: "在线技术文档",
    icon: "book",
    children: [
      {
        text: "Java 8官方文档",
        link: "https://docs.oracle.com/javase/8/docs/api/index.html",
      },
      {
        text: "Spring文档中文版",
        link: "https://www.springcloud.cc/spring-reference.html",
      },
      {
        text: "Springboot官方文档",
        link: "https://docs.spring.io/spring-boot/index.html",
      },
      {
        text: "Spring Cloud官方文档",
        link: "https://spring.io/projects/spring-cloud",
      },
      {
        text: "Git中文教程",
        link: "https://git-scm.com/book/zh/v2",
      },
      {
        text: "Mybatis文档中文版",
        link: "https://mybatis.p2hp.com/index.html",
      },
      {
        text: "Mybatis-Plus文档",
        link: "https://baomidou.com/plugins/",
      },
      {
        text: "Maven文档中文版",
        link: "https://maven.org.cn/guides/index.html",
      },
      {
        text: "Tomcat官方文档",
        link: "https://tomcat.apache.org/tomcat-10.0-doc/index.html",
      },
      {
        text: "RabbitMQ官方文档",
        link: "https://www.rabbitmq.com/docs",
      },
      {
        text: "Dubbo官方文档",
        link: "https://cn.dubbo.apache.org/zh/docs/",
      },
      {
        text: "Docker官方文档",
        link: "https://docs.docker.com/get-started/",
      },
      {
        text: "Elasticsearch官方文档",
        link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
      },
      {
        text: "Netty官方文档",
        link: "https://netty.io/wiki/index.html",
      },

    ],
  },


]);
