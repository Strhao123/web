import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "Java核心",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/javacore/",
      children: [
        {
          text: "Java基础",
          icon: "",
          link: "Java基础.md",
        },
      ],
    },

    {
      text: "JavaWeb",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/javaweb/",
      children: [
        {
          text: "javaweb基础",
          icon: "",
          collapsible: true,
          prefix: "basic/",
          children: ["xml.md","Tomcat.md","Servlet.md"],
        },
      ],
    },

    {
      text: "开发必备",
      icon: "tool",
      collapsible: true,
      prefix: "/codenotes/devtool/",
      children: [
        {
          text: "Git",
          icon: "git",
          link: "Git.md",        }
      ],
    },

  ],










  // 浮生杂记的侧边栏
  "/floatinglife/": [
    {
      text: "小镇美食家",
      icon: "linter",
      collapsible: true,
      link: "/floatinglife/cooker/",
    },
    {
      text: "小镇技术宅",
      icon: "computer",
      collapsible: true,
      prefix: "/floatinglife/iter/",
      children: [
        {
          text: "编写代码规范",
          icon: "",
          link: "code规范.md",
        }

      ],

    },
    {
      text: "小镇运动狂",
      icon: "strong",
      collapsible: true,
      link: "/floatinglife/sporter/",
    },
    {
      text: "小镇思考者",
      icon: "style",
      collapsible: true,
      link: "/floatinglife/thinker/",
    },
  ],



});
