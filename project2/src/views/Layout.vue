<template>
  <v-app>

    <!-- 左侧：抽屉导航样式 -->
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> 测试平台 </v-list-item-title>
          <v-list-item-subtitle> author：abee </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="switchTab(item)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 右侧：顶部导航区域 -->
    <v-app-bar app>
      <div>app-bar</div>
    </v-app-bar>

    <!-- 右侧：主页面区域 -->
    <v-main app>
      <router-view />
    </v-main>
    
    <!-- 整个：页脚区域 -->
    <v-footer app>
      <div>footer</div>
    </v-footer>
    
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { title: "测试用例", icon: "mdi-view-dashboard", router: "testcase"},
        { title: "测试任务", icon: "mdi-image", router: "task"},
      ],
      right: null,
    };
  },

  methods: {
    switchTab(item){
        console.log(item)
        // 传入路由的名称，就会切换到对应的路由地址
        this.$router.push({name: item.router})
    },
  }
}
</script>