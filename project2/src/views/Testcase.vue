<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    item-key="id"
    show-select
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>测试用例</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>

        <v-spacer></v-spacer>

        <!-- 执行用例按钮 -->
        <v-btn
          color="green"
          dark
          style="margin: 10px"
          class="mb-2"
          v-bind="attrs"
          v-on="on"
          @click="executeCase()"
        >
          执行用例
        </v-btn>

        <!-- 新建用例按钮 -->
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              style="margin: 10px"
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              新建用例
            </v-btn>
          </template>

          <!-- 新建用例 dialog -->
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.id"
                      label="用例编号"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.nodeId"
                      label="nodeId"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="editedItem.remark"
                      label="备注"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <!-- 删除用例 dialog -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >确定删除？你想好了奥！😱</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >我想好了</v-btn
              >
              <v-btn color="blue darken-1" text @click="closeDelete"
                >算了吧</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <!-- 编辑和删除按钮 -->
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    selected: [],
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "用例编号", align: "start", sortable: false, value: "id" },
      { text: "nodeId", value: "nodeId" },
      { text: "用例备注", value: "remark" },
      { text: "操作", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      nodeId: "",
      remark: "",
    },
    defaultItem: {
      id: "",
      nodeId: "",
      remark: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新建用例" : "编辑用例";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.$api.testcase
        .getTestcase()
        .then((result) => {
          console.log(result);
          this.desserts = result["data"]["data"];
        })
        .catch((err) => {
          console.log(err);
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      let delId = this.editedItem["id"];
      console.log("删除用例 ==>", delId);
      // 接口需要传入参数，在调用接口函数时传入
      this.$api.testcase.deleteTestcase(delId).then((result) => {
        console.log(result);
        // 当拿到接口的响应值之后，应该再次刷新数据
        this.initialize();
      });
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      // 关闭 删除用例的对话框
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        console.log("编辑用例");
        this.$api.testcase.updateTestcase(this.editedItem).then((result) => {
          console.log(result);
          this.initialize();
        });
      } else {
        console.log("新建用例");
        this.$api.testcase.addTestcase(this.editedItem).then((result) => {
          console.log(result);
          this.initialize();
        });
      }
      this.close();
    },

    executeCase() {
      // 执行测试用例
      console.log("exec case.");
      console.log(this.selected);
    },
  },
};
</script>

<style scoped>
</style>