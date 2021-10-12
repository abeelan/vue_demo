# 项目介绍
这是学习 vue 前端开发框架的 demo。

- vue.js 是下载的依赖包；
- index.html 是一些基础的练习；
- project 目录放 vue-cli 创建的项目

## 安装 vue-cli
vue-cli 是基于 webpack 构建，并带有合理的默认配置；webpack 是一个 javascript 应用程序静态模块打包器。

```shell
# 通过这种方式下载的是 2.x 版本的，没有 vue ui 功能
# 需要卸载重新下载
$ npm install vue-cli -g
$ vue -V
2.9.6
$ npm uninstall vue-cli -g 

# 最新版本下载方式
$ npm install @vue/cli -g
@vue/cli 4.5.13

$ vue -h
Commands:
    ...
    ui [options]
    ...
```



### 图形化配置项目

通过 `vue ui` 的方式可以图形化配置项目。

![image-20211009175959059](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009175959059.png)



![image-20211009180103327](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009180103327.png)

![image-20211009180141472](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009180141472.png)

![image-20211009180312052](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009180312052.png)

创建项目，不保存预设。如果需要保存配置，也可以保存预设。



### 添加插件

![image-20211009181044419](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009181044419.png)

![image-20211009181214814](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211009181214814.png)

### 项目目录结构

```
project
├── README.md
├── babel.config.js
├── node_modules  # 安装的插件工具目录；比较大
├── package-lock.json
├── package.json  # 项目所需要的包配置
├── public  # 存放静态的资源文件
├── src  # 开发源代码
└── vue.config.js

./src 目录下的子文件
├── App.vue
├── assets  # 图片、固定 css 文件等
├── components  # 组件存放目录
├── main.js  # 项目入口文件，项目中需要的插件都需要在这里引用
├── plugins  # 插件
├── router  # 路由管理工具
├── api  # 需要自己创建，用于后端交互
└── views

```



### 启动项目

```shell
# 进入项目路径下 project
$ npm run serve  
  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.125.120:8080/
```



### 
