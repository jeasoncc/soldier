<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-container grid-list-sm fluid>
        <v-layout row wrap>
          <v-flex v-for="n in 8" :key="n" xs4 d-flex>
            <v-card flat tile class="d-flex">
              <v-img
                :src="imgUrl[n - 1]"
                :lazy-src="imgUrl[n - 1]"
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
export default Vue.extend({
  data() {
    return {
      imgUrl: [
        require("./../../assets/img/badge/badge1.jpg"),
        require("./../../assets/img/badge/badge2.jpg"),
        require("./../../assets/img/badge/badge3.jpg"),
        require("./../../assets/img/badge/badge4.jpg"),
        require("./../../assets/img/badge/badge5.jpg"),
        require("./../../assets/img/badge/badge6.jpg"),
        require("./../../assets/img/badge/badge7.jpg"),
        require("./../../assets/img/badge/badge8.jpg")
      ]
    };
  }
});
</script>
