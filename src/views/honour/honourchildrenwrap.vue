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
        src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
        gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
      >
        <v-container fill-height>
          <v-layout align-center>
            <strong class="display-4 font-weight-regular mr-4">8</strong>
            <v-layout column justify-end>
              <div class="headline font-weight-light">Monday</div>
              <div class="text-uppercase font-weight-light">February 2015</div>
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
export default Vue.extend({
  data() {
    return {
      title: "2121"
    };
  },
  mounted() {
    console.log(this.$route.name);
  }
});
</script>
