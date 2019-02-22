<template>
  <v-app id="backapp" :dark="$store.state.apptheme">
    <router-view></router-view>
  </v-app>
</template>
<script>
import * as easings from "vuetify/es5/util/easing-patterns";

export default {
  data() {
    return {
      type: "number",
      number: 9999,
      selector: "#first",
      selected: "Button",
      elements: ["Button", "Radio group"],
      duration: 300,
      offset: 0,
      easing: "easeInOutCubic",
      easings: Object.keys(easings)
    };
  },
  computed: {
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    }
  }
};
</script>
<style lang="stylus">
#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
