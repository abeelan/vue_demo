<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-btn
          small
          color="primary"
          style="margin: 10px"
          @click="checkReport(item)"
        >
          查看报告
        </v-btn>
        <v-btn
          small
          color="redl"
          style="margin: 10px"
          @click="deleteItem(item)"
        >
          删除
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  created() {
    // 每次刷新页面，先去调用 获取数据
    this.getTaskList();
  },
  data() {
    return {
      headers: [
        { text: "任务 ID", align: "start", sortable: false, value: "id" },
        { text: "任务名称", align: "start", sortable: false, value: "name" },
        { text: "任务描述", value: "remark" },
        { text: "创建时间", value: "create_at", sortable: true },
        { text: "操作", value: "actions", sortable: false },
      ],
      desserts: [],
    };
  },
  methods: {
    getTaskList() {
      console.log(this.$api.task);
      this.$api.task.getTask().then((result) => {
        console.log(result);
        this.desserts = result.data.data;
      });
    },
    checkReport(item) {
      window.open(item.report)
    },
  },
};
</script>