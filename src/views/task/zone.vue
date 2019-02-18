<template>
  <div>
    <v-toolbar color="cyan" dark tabs>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->

      <v-toolbar-title>军创在线</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn> -->

      <v-menu bottom left>
        <v-btn slot="activator" icon>
          <v-icon>color_lens</v-icon>
        </v-btn>

        <v-list>
          <v-list-tile @click="changeTheme('light')">
            <v-list-tile-title>日间模式</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="changeTheme('dark')">
            <v-list-tile-title>夜间模式</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-tabs slot="extension" v-model="tab" color="cyan" grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab v-for="item in items" :key="item" @click="showtest(item)">
          {{ item }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <curriculum></curriculum>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <check></check>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text><examination></examination></v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import curriculum from "./study/curriculum";
import examination from "./exam/examination";
import check from "./check/check";
export default {
  components: {
    curriculum,
    examination,
    check
  },
  data() {
    return {
      someitems: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" }
      ],
      tab: null,
      items: ["学习", "考核", "实战"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  methods: {
    showtest(prame) {
      console.log(prame);
    },
    changeTheme(prmame) {
      console.log(prmame);
      if (Object.is(prmame, "light")) {
        this.$store.commit("falseapptheme");
      } else {
        this.$store.commit("trueapptheme");
      }
      console.log(this.$store.state.apptheme);
    }
  }
};
</script>
