<template>
  <div>
    <v-toolbar dark color="cyan" height="120" flat>
      <v-avatar size="80">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
      <div style="width: 50%;margin: 0 auto;">
        <v-layout align-center justify-center row fill-height>
          <v-flex dark>
            <span>创业特种兵</span>
          </v-flex>
          <v-flex>
            <v-btn outline small fab to="/honourchildrenwrap/modifiedata">
              <v-icon>edit</v-icon>
            </v-btn>

            <!-- <v-btn flat icon color="green" v-show="attendance.attendance">
              <v-icon>cached</v-icon>
            </v-btn> -->
            <v-btn flat icon dark v-show="attendance.attendance">
              <v-icon>thumb_up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-dialog v-model="attendance.dialog" max-width="290">
          <v-card>
            <v-card-text>
              签到成功
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat="flat" @click="makeTrue()">
                确定
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
      </div>
    </v-toolbar>
    <v-list>
      <v-list-tile @click="$router.push({ path: '/mtask/allmask' })">
        <v-list-tile-action>
          <v-icon>inbox</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>我的任务</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider inset></v-divider>

      <v-list-tile>
        <v-list-tile-action>
          <v-icon>money</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>我的支付</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider inset></v-divider>

      <v-list-tile @click="$router.push({ path: '/lander/forgetpassword' })">
        <v-list-tile-action>
          <v-icon>lock</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>重置密码</v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon>chevron_right</v-icon>
        </v-list-tile-action>
      </v-list-tile>

      <v-divider inset></v-divider>
    </v-list>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Honour extends Vue {
  // 初始化数据
  valueDeterminate: number = 10;
  attendance = {
    dialog: false as boolean,
    attendance: false as boolean
  };
  items = [
    {
      action: "move_to_inbox",
      title: "Inbox"
    },
    {
      action: "send",
      title: "Sent"
    },
    {
      action: "delete",
      title: "Trash"
    },
    {
      action: "report",
      title: "Spam"
    },
    { divider: true },
    { header: "Labels" },
    {
      action: "label",
      title: "Family"
    },
    {
      action: "label",
      title: "Friends"
    },
    {
      action: "label",
      title: "Work"
    }
  ];
  makeTrue() {
    this.attendance.dialog = false;
    this.attendance.attendance = true;
  }
  // 声明周期钩子
  mounted() {}

  // 计算属性
  get computedMsg() {
    return "computed " + this.valueDeterminate;
  }

  // 方法
  greet() {
    alert("greeting: " + this.valueDeterminate);
  }
}
</script>
