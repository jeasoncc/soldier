<template>
  <div>
    <div>
      <router-view name="navigation"></router-view>
    </div>
    <v-toolbar app>
      <router-view name="toolbar"></router-view>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view name="container"></router-view>
      </v-container>
    </v-content>
    <div>
      <!-- <router-view name="footer"></router-view> -->
      <bfooter></bfooter>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import bfooter from "./../components/bfooter.vue";
export default Vue.extend({
  components: {
    bfooter
  }
});
</script>
