<template>
  <v-layout style=" position: relative">
    <v-flex xs12 sm6 offset-sm3>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex xs12 d-flex>
            <v-card flat tile class="d-flex">
              <v-img
                :src="marryImg[1 - 1]"
                :lazy-src="marryImg[n - 1]"
                aspect-ratio="1"
                class="grey lighten-2"
              ></v-img>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-btn absolute dark fab top right color="blue darken-2">
            <v-badge left>
              <span slot="badge">6</span>
              <v-icon large color="">
                shopping_cart
              </v-icon>
            </v-badge>
          </v-btn>
          <v-flex v-for="n in 8" :key="n" xs4 d-flex>
            <v-card flat tile class="d-flex">
              <v-img
                :src="marryImg[n - 1]"
                :lazy-src="marryImg[n - 1]"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <v-layout
                  slot="placeholder"
                  fill-height
                  align-center
                  justify-center
                  ma-0
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-layout>
              </v-img>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class HonourShopping extends Vue {
  marryImg: Array<any> = [
    require("./../../assets/img/shop/500160912_wx.jpg"),
    require("./../../assets/img/shop/500179415_wx.jpg"),
    require("./../../assets/img/shop/500393903_wx.jpg"),
    require("./../../assets/img/shop/500508235_wx.jpg"),
    require("./../../assets/img/shop/500550956_wx.jpg"),
    require("./../../assets/img/shop/500598841_wx.jpg"),
    require("./../../assets/img/shop/500626838_wx.jpg"),
    require("./../../assets/img/shop/500723636_wx.jpg")
  ];
}
</script>
