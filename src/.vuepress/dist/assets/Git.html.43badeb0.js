import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,a as e,d as r,b as d,e as t,r as l}from"./app.b0370e1b.js";const c={},o=t('<p>集中式<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>：CVS、SVN、VSS</p><p>分布式：Git、Bazaar、Darcs</p><h2 id="一-安装" tabindex="-1"><a class="header-anchor" href="#一-安装" aria-hidden="true">#</a> 一. 安装</h2>',3),v={href:"https://gitee.com/private_crh/notes/raw/git/typora/Git%E7%9A%84%E5%AE%89%E8%A3%85.pdf",target:"_blank",rel:"noopener noreferrer"},m=t(`<h3 id="配置忽略文件" tabindex="-1"><a class="header-anchor" href="#配置忽略文件" aria-hidden="true">#</a> 配置忽略文件</h3><p>在家目录下创建git.ignore</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Log file
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-基本使用" tabindex="-1"><a class="header-anchor" href="#二-基本使用" aria-hidden="true">#</a> 二. 基本使用</h2><h3 id="初始设置" tabindex="-1"><a class="header-anchor" href="#初始设置" aria-hidden="true">#</a> 初始设置</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git confit --global user.name 用户名
git confit --global email.name 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置好在C盘家目录下==.gitconfig==中查看</p><h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init							初始化本地仓库
git status							查看本地库状态
git add 文件名						  添加暂存区
git commit -m&quot;日志&quot; 文件名			 提交到本地库
git reflog							历史记录
git log								历史记录（详细）
git reset --hard 版本号			  版本穿梭
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch 分支名					   创建分支
git branch -v						 查看分支
git checkout 分支名				   切换分支
git merge 分支名					   合并分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并冲突" tabindex="-1"><a class="header-anchor" href="#合并冲突" aria-hidden="true">#</a> 合并冲突</h3><p>**原因：**合并分支时，两个分支在同一个文件的同一个位置有两套完全不同的修改。Git 无法替 我们决定使用哪一个。必须人为决定新代码内容。</p><p><strong>在master下合并其他分支</strong></p><blockquote><p><strong>&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD</strong></p><p><strong>【当前分支的代码】</strong></p><p><strong>===============</strong></p><p><strong>合并过来的代码</strong></p><p><strong>&gt;&gt;&gt;&gt;&gt;&gt; hot-fix</strong></p></blockquote><ol><li>删除多余符号只留下代码</li><li>添加到暂存区</li><li>git commit <mark>不带文件名</mark> 且 <mark>master被修改分支不变</mark></li></ol><h3 id="远程仓库" tabindex="-1"><a class="header-anchor" href="#远程仓库" aria-hidden="true">#</a> 远程仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git remote -v							查看所有远程地址别名
git remote add 别名 远程地址				创建远程仓库
git push 别名 分支						  推送到远程仓库
git clone 远程地址						  克隆到本地（原本没有）
git pull 远程库地址别名 远程分支名			 拉取到本地（更新）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-团队协作" tabindex="-1"><a class="header-anchor" href="#三-团队协作" aria-hidden="true">#</a> 三. 团队协作</h2><h3 id="团队内" tabindex="-1"><a class="header-anchor" href="#团队内" aria-hidden="true">#</a> 团队内</h3><p><img src="https://gitee.com/private_crh/notes/raw/git/typora/image-20241005084718141.png" alt="image-20241005084718141"></p><h3 id="跨团队" tabindex="-1"><a class="header-anchor" href="#跨团队" aria-hidden="true">#</a> 跨团队</h3><p><img src="https://gitee.com/private_crh/notes/raw/git/typora/image-20241005084740124.png" alt="image-20241005084740124"></p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>服务器宕机时无法操作 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,25);function h(u,g){const i=l("ExternalLinkIcon");return n(),s("div",null,[o,e("p",null,[e("a",v,[r("Git的安装.pdf"),d(i)])]),m])}const f=a(c,[["render",h],["__file","Git.html.vue"]]);export{f as default};
