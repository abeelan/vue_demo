# project2

### 安装环境

通过命令行安装，用的 vue 2
```shell
$ vue add vuetify
$ vue add router
$ npm install --save axios
```



### 目录结构

- node_module: 依赖库
- public：公共数据
- src：项目目录
    - assets：资源（图片）
    - components：存放公共组件的地方，可复用
    - view：非公共使用的页面，单独的页面，不复用
    - plugins：插件
    - router：配置路由
    - main.js、APP.vue：项目入口，相当于 python 的 main
- package-lock.json：依赖的详细信息
- package.json：包依赖文件，存放的是依赖的包版本，相当于 Python 的 requirements.txt



### 项目拆解

![image-20211012155338179](https://gitee.com/abeelan/image-hosting-service/raw/master/img/image-20211012155338179.png)

