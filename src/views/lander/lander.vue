<template>
  <v-container class="m_lander">
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12>
        <transition
          name="custom-classes-transition"
          mode="out-in"
          enter-active-class="animated bounceInLeft"
          leave-active-class="animated bounceOutRight"
          :duration="{ enter: 500, leave: 800 }"
        >
          <router-view></router-view>
        </transition>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style lang="stylus" scoped>
.m_lander {
    height 100vh;
    width: 100vw;
    background-image url("./../../assets/img/400542411_hb.jpg")
    background-size cover;
    }
</style>
