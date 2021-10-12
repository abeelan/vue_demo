<template>
  <div id="app">
    <div id="nav">
      <!-- 页面跳转的一个简单方式 to -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 渲染路由对应的页面，会去 router/index.js 里面去寻找对应的组件展示 -->
    <!-- <router-view/> 是简写方式， 等于 <router-view></router-view> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
