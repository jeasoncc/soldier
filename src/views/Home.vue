<template>
  <v-card height="100vh" text :absolute="true" class="wrap">
    <!-- <transition
      name="custom-classes-transition"
      mode="out-in"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 200, leave: 300 }"
    > -->
    <router-view
      style="height: 91vh;
    overflow: scroll;"
    ></router-view>
    <!-- </transition> -->
    <!-- <div class="headline text-xs-center pa-5">Active: {{ bottomNav }}</div> -->
    <v-bottom-nav :active.sync="bottomNav" :value="true" fixed app>
      <v-btn color="teal" text value="recent" to="/zone">
        <span>任务</span>
        <v-icon>event_note</v-icon>
      </v-btn>

      <v-btn color="teal" text value="favorites" to="/honour">
        <span>荣誉</span>
        <v-icon>stars</v-icon>
      </v-btn>

      <v-btn color="teal" text value="nearby" to="/personalCenter">
        <span>个人中心 </span>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      bottomNav: "nearby"
    };
  }
};
</script>
