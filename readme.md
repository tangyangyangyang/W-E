# 说明

本次开发实现旨在展示 Coupon 组件的开发整体思路，其项目结构也仅仅体现开发思想，具体细节具有很多待优化的地方及根据业务需要调整的地方，欢迎讨论但拒绝较真。

# Usage

1. `npm install` _下载依赖_
2. `npm run debug` _启动本地 node 服务_（可以不用）
3. `npm run dev` _启动项目_

# 项目结构

本次项目构建采用 vite（4.0+） + react（18.0+） + ts（4.0+）构建

-   采用`pretter`规范代码格式化风格
-   采用`eslint`规范编码规范
-   采用 husky 插件在代码提交时的钩子进行 eslint 校验及 pretter 格式化

## public

主要存放需要打包后直接放入跟目录的文件

## server

一个本地 node 服务器 负责转发请求或模拟数据
_一般不在具体项目中出现 直接安装到本地即可_

## src/api

请求封装 全局统一管理接口

## src/components

组件

## src/pages

页面

## src/router

路由配置

## src/static

静态资源

## src/store

全局状态管理

## src/utils

工具函数管理
