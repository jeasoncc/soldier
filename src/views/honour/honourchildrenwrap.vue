<template>
  <div>
    <v-card dark flat>
      <v-card-title class="pa-2 cyan ">
        <v-btn icon to="/honour">
          <v-icon>keyboard_backspace</v-icon>
        </v-btn>
        <h3 class="title font-weight-light text-xs-center grow">
          {{ $route.name }}
        </h3>
        <v-avatar>
          <!-- <v-img
            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
          ></v-img> -->
        </v-avatar>
      </v-card-title>
      <v-img
        src="https://picsum.photos/300/200/?random"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container fill-height>
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">
              {{ dateData.newdate }}
            </strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">
                {{ dateData.newmonth }}
              </div>
              <div class="text-uppercase font-weight-light">
                {{ dateData.weekend }}
              </div>
            </v-layout>
          </v-layout>
        </v-container>
      </v-img>
    </v-card>
    <router-view></router-view>
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
      title: "2121",
      dateData: {
        newdate: dayjs().format("DD "),
        newmonth: dayjs().format("YYYY-MM "),
        weekend: dayjs().format(" dddd")
      }
    };
  },
  mounted() {
    console.log(this.$route.name);
  }
});
</script>
