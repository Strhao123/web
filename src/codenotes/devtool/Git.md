---
# 当前页面内容标题
title: Git
# 当前页面图标
icon: git
# 分类
category:
  - java
# 标签
tag:
  - 基础
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---


集中式[^缺点]：CVS、SVN、VSS

分布式：Git、Bazaar、Darcs



## 一. 安装

 [Git的安装.pdf](https://gitee.com/private_crh/notes/raw/git/typora/Git%E7%9A%84%E5%AE%89%E8%A3%85.pdf) 

###  配置忽略文件

在家目录下创建git.ignore

```
# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*

.classpath
.project
.settings
target
.idea
*.iml
```





## 二. 基本使用

###  初始设置

``````git
git confit --global user.name 用户名
git confit --global email.name 邮箱
``````

设置好在C盘家目录下==.gitconfig==中查看



###  基础操作

``````
git init							初始化本地仓库
git status							查看本地库状态
git add 文件名						  添加暂存区
git commit -m"日志" 文件名			 提交到本地库
git reflog							历史记录
git log								历史记录（详细）
git reset --hard 版本号			  版本穿梭
``````



###  分支

```
git branch 分支名					   创建分支
git branch -v						 查看分支
git checkout 分支名				   切换分支
git merge 分支名					   合并分支
```



### 合并冲突

**原因：**合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。Git 无法替 我们决定使用哪一个。必须人为决定新代码内容。

**在master下合并其他分支**

> **<<<<<<< HEAD**
>
> **【当前分支的代码】**
>
> **\==\==\==\==\==\=====**
>
>  **合并过来的代码** 
>
>  **>>>>>> hot-fix**

1. 删除多余符号只留下代码
2. 添加到暂存区
3. git commit ==不带文件名== 且 ==master被修改分支不变==



###  远程仓库

```
git remote -v							查看所有远程地址别名
git remote add 别名 远程地址				创建远程仓库
git push 别名 分支						  推送到远程仓库
git clone 远程地址						  克隆到本地（原本没有）
git pull 远程库地址别名 远程分支名			 拉取到本地（更新）
```









## 三. 团队协作

###  团队内

![image-20241005084718141](https://gitee.com/private_crh/notes/raw/git/typora/image-20241005084718141.png)

###  跨团队

![image-20241005084740124](https://gitee.com/private_crh/notes/raw/git/typora/image-20241005084740124.png)















[^缺点]: 服务器宕机时无法操作

