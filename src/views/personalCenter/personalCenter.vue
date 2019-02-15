<template>
  <div>
    <v-toolbar dark color="cyan" height="120">
      <v-slider
        :min="16"
        :max="256"
        label="Size"
        disabled=""
        :value="22"
      ></v-slider>
      <v-avatar size="80">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>

      <div
        style="    width: 50%;
    margin: 0 auto;"
      >
        创业特种兵
        <v-progress-linear v-model="valueDeterminate"></v-progress-linear>
      </div>
    </v-toolbar>
    <v-list two-line subheader>
      <v-subheader>等级：下士</v-subheader>

      <v-list-tile avatar @click="$router.push({ path: 'fame' })">
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

      <v-list-tile avatar @click="$router.push({ path: 'medal' })">
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

      <v-list-tile avatar @click="$router.push({ path: 'honourshopping' })">
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
    </v-list>
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <v-list-tile slot="activator">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-for="subItem in item.items" :key="subItem.title">
          <v-list-tile-content>
            <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-list-group>
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
  items = [
    {
      action: "restaurant",
      title: "荣誉记录",
      active: true,
      items: [
        { title: "Breakfast & brunch" },
        { title: "New American" },
        { title: "Sushi" }
      ]
    }
  ];
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
