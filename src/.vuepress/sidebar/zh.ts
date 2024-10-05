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
          icon: "java",
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
          icon: "java",
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
      link: "/floatinglife/iter/",
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










  // 开源项目的侧边栏
  "/projects/": [
    {
      text: "技术教程",
      icon: "guide",
      collapsible: true,
      link: "/projects/techguide/",
    },
    {
      text: "实战项目",
      icon: "workingDirectory",
      collapsible: true,
      link: "/projects/pracprojects/",
    },
    {
      text: "系统设计",
      icon: "shell",
      collapsible: true,
      link: "/projects/systemdesign/",
    },
    {
      text: "工具类库",
      icon: "module",
      collapsible: true,
      link: "/projects/toollibrary/",
    },
  ],
});
