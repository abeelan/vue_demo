## 项目介绍
这是学习 vue 前端开发框架的 demo。

代码编辑器是 VSCode

插件推荐：
- JavaScript(ES6) code snippets
- Vetur: VSCode 支持 vue 的工具，有语法高亮，格式化，错误检查，自动完成等功能
- auto close tag：自动添加 html/xml 结束标签
- auto rename tag：自动重命名对应的 html/xml 标签
- Highlight Matching Tag：突出显示匹配的开始和结束标签
- live server：html 预览本地服务器，端口号默认 5500

编写 HTML 代码每次都手写很痛苦，可以在 vscode 配置自定义代码片段：https://www.zhihu.com/question/332915874

### 基础
- ES6：https://es6.ruanyifeng.com/
- 

## demo 
是一些基础练习
- vue.js 是下载的依赖包；
- index.html 是一些基础的练习；

## project
练习项目，测试平台的壳子搭建，通过 vue-cli 、vue ui 的方式安装插件

## project2
练习项目二，通过命令行安装插件

## vue_basic
> 该项目是根据 B 站课程手敲的笔记，课程名称：尚硅谷Vue2.0+Vue3.0全套教程丨vuejs从入门到精通
之前学习的东西都忘光了，正好最近需要用到前端开发，重新学习一遍吧~ 这位老师讲课节奏很好，推荐哇~

### 安装浏览器插件
vue.js devtools 谷歌插件商店直接下载。

下载完成后，调试本地页面插件没有生效的解决办法：管理扩展程序 - 进入插件详情 - 开启「允许访问文件网址」

### 01 初始vue 总结
1. 想让 vue 工作，就必须创建一个 Vue 实例，且要传入一个配置对象（el、data）
2. root 容器里的代码依然符合 html 规范，只不过混入了一个特殊的 vue 语法 `{{name}}` 这里的 name 就直接获取 data 对象内的 name 的值
3. root 容器里的代码被称为【Vue 模板】
解析流程：先拿到容器 -> Vue 实例 -> 解析特殊语法内的数据 -> 值替换容器内的 vue 模板
4. 多个容器对应一个实例，只解析第一个容器的 vue 模板，第二个不解析; 一个容器对应多个实例，只有第一个实例接管容器，后面的实例不生效,因此，容器和vue实例是一一对应的。
5. 真实开发中只有一个 vue 实例，并且会配合着组件一起使用
6. {{xxx}} 中的 xx 要写 js 表达式，且 xx 可以自动读取到 data 中所有的属性
7. 一旦 data 中的数据发生改变，页面（容器中的vue模板）中用到该数据的地方也会自动更新

**注意区分：js 表达式 和 js 代码（语句）**

js 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方
- a
- a+b
- demo(1)
- x == y ? 'a' : 'b'

js 代码
- if() {}
- for() {}

### 02_vue模板语法
Vue 模板语法有两大类：
1. 插值语法
- 功能：用于解析标签体内容
- 写法：{{xxx}} xxx 可以直接读取 vue 实例 data 中的所有属性
2. 指令语法
- 功能：用于解析标签
- 举例：v-bind:href="xx" 或 简写为 :href="xxx"
- 备注：vue 中有很多指令，且形式都是 v-xxx，这里的 v-bind 只是举例，部分不能这样简写

### MVVM 模型
M：模型：对应 data 中的数据
V：视图：模板 DOM
VM：视图模型：vue 实例对象

为方便阅读，后面的汇总都写到对应的 html 页面了。

## 插值语法汇总
练习时写过的 js 表达式放在这里
```js
{{name.toUpperCase()}}  // 字符串转大写
{{Date.now()}}  // 获取当前时间
```

## 指令汇总
- 单向数据绑定：v-bind:href="xx" 或 简写为 :href="xx"
- 双向数据绑定：v-model:value="xx" 简写为 v-model="xx"
- 事件处理：v-on:click="showInfo" 简写为 @click="showInfo"

## 快捷键
格式化代码：Shift + Alt + F

## 遇到的报错
```
[vue-router] Route with name ’ ’ does not exist
```
路由地址不存在，问题就出在 `router/index.js`，代码里面是这样引用 `this.$router.push({name: item.router})` 的，结果 `routes` 没给设置 name 属性，崩溃了呀。。。找了半天。。。
