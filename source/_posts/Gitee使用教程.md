---
title: Gitee使用教程
date: 2022-09-09 21:46:16
categories: 
- 使用教程
tags:
- git
- 开发工具
images: https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/Gittee使用教程/web_developer.v8dkdnm60kg.webp
---

![](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/Gittee使用教程/web_developer.v8dkdnm60kg.webp)

## 1.Gitee是什么？

Gitee是开源中国（OSChina）推出的基于Git的代码托管服务。

Gitee（码云）是开源中国社区推出的代码托管协作开发平台，支持Git和SVN，提供免费的私有仓库托管。Gitee专为开发者提供稳定、高效、安全的云端软件开发协作平台，无论是个人、团队、或是企业，都能够实现代码托管、项目管理、协作开发。

Gitee目前已经成为国内最大的代码托管平台，致力于为国内开发者提供优质稳定的托管服务，与GitHub类似区别在于码云国内，GitHub国外。

## 2.为什么使用Git?

在开发项目的时候，我们可能会经常修改代码，但是有时候会遇到想查看某一时间的代码的情况。如果没有版本控制器，你可能需要不断地定时备份代码，但这样显然是很麻烦的，而且备份也不一定好用。比如某个时间点并没有修改代码，那么备份就重复了；再比如虽然备份了代码，但你并不知道两个版本有什么区别。

为了解决上面的一些问题，一些工程师便尝试开发代码版本控制器系统。每次当你修改完代码想进行备份时，只需要输入简单的命令，版本控制系统便会帮你完成备份操作。最为常见的版本控制系统是分布式版本控制系统和中央版本控制系统。

### 中央版本控制系统

中央版本控制系统必须存在两个端，服务端和客户端，当进行代码备份时，客户端会向服务端发出请求，并将此次修改的内容发送到服务器当中去；服务端收到请求后，会将代码存储在服务器当中；同样当客户端想查看某一个版本的修改内容或者想恢复到某一个版本之时，客户端也会发送请求到服务端，服务在端接收到请求之后会做出相应的处理并返回给客户端。

### 分布式版本控制系统

分布式版本控制器，主要是将备份的代码以及记录完全独立在本地存储，比如说上面提到，当你想将代码恢复到某一个版本的时候，本地版本控制器，不需要依赖网络便可以完成此操作，因为本地版本控制器拥有完整独立的控制系统。



## 3.Gitee的注册登录

打开[Gitee官网](https://gitee.com/)注册登录即可。

![](https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/Gittee使用教程/gitee-regist.1k02emg21czk.webp)



## 4.下载Git

因为Gitee是基于Git的代码管理库，所以如果想利用Gitee管理代码，Git的安装必不可少。

打开[Git官网](https://git-scm.com/)下载Git,下载红框里的Windows最新版本。

<img src="https://cdn.staticaly.com/gh/Shuukoukou/image-repo@main/Gittee使用教程/git-download.5aucbju78u80.webp" style="zoom:50%;" />




<br/>

## 5.基本命令汇总：
Git 的工作就是创建和保存你项目的快照及与之后的快照进行对比。它有四个位置：

**workspace：工作区**
**staging area：暂存区/缓存区**
**local repository：版本库或本地仓库**
**remote repository：远程仓库**



| Git命令                   | 作用                                       |
| ------------------------- | ------------------------------------------ |
| git init                  | 初始化仓库                                 |
| git clone                 | 拷贝一份远程仓库，也就是下载一个项目       |
| git add                   | 添加文件到暂存区                           |
| git status                | 查看仓库当前的状态，显示有变更的文件       |
| git diff                  | 比较文件的不同，即暂存区和工作区的差异     |
| git commit                | 提交暂存区到本地仓库                       |
| git reset                 | 回退版本                                   |
| git rm                    | 删除工作区文件                             |
| git mv                    | 移动或重命名工作区文件                     |
| git log                   | 查看历史提交记录                           |
| git blame <file>          | 以列表形式查看指定文件的历史修改记录       |
| git remote                | 远程仓库操作                               |
| git fetch                 | 从远程获取代码库                           |
| git pull                  | 下载远程代码并合并                         |
| git push                  | 上传远程代码并合并                         |
| git branch -a             | 查看所有分支                               |
| git checkout 分支名称     | 切换到某一分支                             |
| git merge 原分支 目标分支 | 合并分支                                   |
| git status                | 查看本地分支文件信息，确保更新时不产生冲突 |
| git branch                | 查看当前分支情况                           |


