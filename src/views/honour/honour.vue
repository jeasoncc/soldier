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
            <v-btn
              outline
              small
              fab
              dark
              @click="attendance.dialog = true"
              v-show="!attendance.attendance"
            >
              <span>签</span>
            </v-btn>
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

    <v-list two-line subheader>
      <v-subheader>等级：下士</v-subheader>

      <v-list-tile
        avatar
        @click="$router.push({ path: 'honourchildrenwrap/fame' })"
      >
        <v-list-tile-action>
          <v-icon color="indigo">grade</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>荣誉点： 250/2500</v-list-tile-title>
          <v-list-tile-sub-title
            >再接再厉，您马上就要升级啦</v-list-tile-sub-title
          >
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>

      <v-list-tile
        avatar
        @click="$router.push({ path: 'honourchildrenwrap/medal' })"
      >
        <v-list-tile-action>
          <v-icon color="indigo">favorite</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>勋章</v-list-tile-title>
          <v-list-tile-sub-title
            >这里存放着您所有的勋章哦</v-list-tile-sub-title
          >
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>

      <v-list-tile
        avatar
        @click="$router.push({ path: 'honourchildrenwrap/honourshopping' })"
      >
        <v-list-tile-action>
          <v-icon color="indigo">shopping_cart</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>荣誉商城</v-list-tile-title>
          <!-- <v-list-tile-sub-title
            >Your status is visible to everyone</v-list-tile-sub-title
          > -->
        </v-list-tile-content>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile
        avatar
        @click="$router.push({ path: 'honourchildrenwrap/honourecord' })"
      >
        <v-list-tile-action>
          <v-icon color="indigo">reorder</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>荣誉记录</v-list-tile-title>
          <v-list-tile-sub-title
            >您可以在这里看到你所有获得荣誉</v-list-tile-sub-title
          >
        </v-list-tile-content>
      </v-list-tile>
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
      action: "restaurant",
      title: "荣誉记录",
      active: true,
      items: [
        { title: "2019n年获得冠军" },
        { title: "2019n年获得冠军" },
        { title: "2019n年获得冠军" }
      ]
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
