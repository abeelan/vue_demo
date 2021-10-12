<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn small color="primary" style="margin:10px;" @click="editItem(item)"> 查看报告 </v-btn>
        <v-btn small color="red" style="margin:10px;" @click="deleteItem(item)"> 删除 </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "任务 ID", align: "start", sortable: false, value: "id" },
        { text: "任务名称", align: "start", sortable: false, value: "name" },
        { text: "任务描述", value: "remark" },
        { text: "操作", value: "actions", sortable: false },
      ],
      desserts: [
        {
          id: 1,
          name: "测试任务一",
          remark: "别睡了，起来嗨呀！",
        },
        {
          id: 2,
          name: "测试任务二",
          remark: "天气不错，去游乐园！",
        },
      ],
    };
  },
};
</script>