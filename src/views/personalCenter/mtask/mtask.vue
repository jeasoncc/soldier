<template>
  <div>
    <v-card dark text style="border-radius:0">
      <v-card-title class="pa-2 cyan ">
        <v-btn icon to="/personalCenter">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        <h3 class=" font-weight-light text-xs-center grow">
          我的任务—{{ $route.name }}
        </h3>
        <v-btn icon> </v-btn>
        <!-- <v-avatar>
          <v-img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-avatar> -->
      </v-card-title>
    </v-card>
    <template>
      <v-tabs dark color="cyan" show-arrows grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="item in itrmtitle"
          :key="item.title"
          @click="pushto(item.title)"
        >
          {{ item.title }}</v-tab
        >
      </v-tabs>
    </template>
    <router-view style="padding:1rem"></router-view>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import "dayjs/locale/zh-cn";
const dayjs = require("dayjs");
export default Vue.extend({
  beforeCreate() {
    dayjs.locale("zh-cn");
  },
  data() {
    return {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      items: ["web", "shopping", "videos", "images", "news"],
      itrmtitle: [
        {
          title: "全部"
        },
        {
          title: "进行中"
        },
        {
          title: "待支付"
        },
        {
          title: "已完成"
        }
      ],
      dateData: {
        newdate: dayjs().format("DD "),
        newmonth: dayjs().format("YYYY-MM "),
        weekend: dayjs().format(" dddd")
      }
    };
  },
  methods: {
    pushto(args: string) {
      console.log(args);
      switch (args) {
        case "全部":
          this.$router.push({ path: "/mtask/allmask" });
          break;
        case "进行中":
          this.$router.push({ path: "/mtask/underway" });
          break;
        case "待支付":
          this.$router.push({ path: "/mtask/unpaid" });
          break;
        case "已完成":
          this.$router.push({ path: "/mtask/completed" });
          break;
      }
    }
  },
  mounted() {
    console.log(this.$route.name);
  }
});
</script>
