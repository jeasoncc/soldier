<template>
  <v-card class="mx-auto" max-width="500" flat>
    <v-card-title class="title font-weight-regular justify-space-between">
      <div class="mytitle">
        <v-avatar
          color="primary lighten-2"
          class="subheading white--text"
          size="24"
          v-text="step"
        ></v-avatar>
        {{ currentTitle }}
      </div>
      <!-- <span>第{{ step }}题</span> -->
      <!-- <v-spacer></v-spacer> -->
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-radio-group v-model="radioGroup">
            <v-radio :label="`现役义务兵`" :value="1"></v-radio>
            <v-radio :label="`现役士官`" :value="2"></v-radio>
            <v-radio :label="`预备役`" :value="3"></v-radio>
            <v-radio :label="`退出现役的义务兵和士官`" :value="4"></v-radio
          ></v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-radio-group v-model="radioGroup">
            <v-radio :label="`现役义务兵`" :value="1"></v-radio>
            <v-radio :label="`现役士官`" :value="2"></v-radio>
            <v-radio :label="`预备役`" :value="3"></v-radio>
            <v-radio :label="`退出现役的义务兵和士官`" :value="4"></v-radio
          ></v-radio-group>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <!-- <div class="pa-3 text-xs-center">
          <v-img
            class="mb-3"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div> -->
        <v-card-text>
          <v-radio-group v-model="radioGroup">
            <v-radio :label="`现役义务兵`" :value="1"></v-radio>
            <v-radio :label="`现役士官`" :value="2"></v-radio>
            <v-radio :label="`预备役`" :value="3"></v-radio>
            <v-radio :label="`退出现役的义务兵和士官`" :value="4"></v-radio
          ></v-radio-group>
        </v-card-text>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn :disabled="step === 1" flat @click="step--">
        返回
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :disabled="step === 3" color="primary" depressed @click="step++">
        {{ btnwalue }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    step: 1
  }),

  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "退役士兵包含哪几种对象？";
        case 2:
          return "士兵退出现役的条件是什么？";
        default:
          return "那些退役士兵可以办理？";
      }
    },
    btnwalue() {
      if (this.step !== 3) {
        return "下一题";
      } else {
        return "完成";
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.mytitle{
}
</style>
