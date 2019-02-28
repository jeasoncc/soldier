<template>
  <div>
    <!-- {{ some }} -->
    <v-flex xs12 sm6 md3>
      <v-text-field
        label="搜索"
        clearable
        single-line
        prepend-inner-icon="search"
      ></v-text-field>
    </v-flex>
    <template>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="200px"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">退役士兵安置条例</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat @click="showmycontent(show)">学习</v-btn>
              <!-- <v-btn flat>预览</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>{{
                  show ? "keyboard_arrow_down" : "keyboard_arrow_up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="show">
                <div>
                  {{ value }}
                  <v-progress-linear
                    v-model="value"
                    color="teal"
                  ></v-progress-linear>
                </div>
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.I'm a thing. But, like most politicians, he promised more
                than he could deliver. You won't have time for sleeping,
                soldier, not with all the bed making you'll be doing. Then we'll
                go with that data file! Hey, you add a one and two zeros to that
                or we walk! You're going to do his laundry? I've got to find a
                way to escape.I'm a thing. But, like most politicians, he
                promised more than he could deliver. You won't have time for
                sleeping, soldier, not with all the bed making you'll be doing.
                Then we'll go with that data file! Hey, you add a one and two
                zeros to that or we walk! You're going to do his laundry? I've
                got to find a way to escape.I'm a thing. But, like most
                politicians, he promised more than he could deliver. You won't
                have time for sleeping, soldier, not with all the bed making
                you'll be doing. Then we'll go with that data file! Hey, you add
                a one and two zeros to that or we walk! You're going to do his
                laundry? I've got to find a way to escape.I'm a thing. But, like
                most politicians, he promised more than he could deliver. You
                won't have time for sleeping, soldier, not with all the bed
                making you'll be doing. Then we'll go with that data file! Hey,
                you add a one and two zeros to that or we walk! You're going to
                do his laundry? I've got to find a way to escape.I'm a thing.
                But, like most politicians, he promised more than he could
                deliver. You won't have time for sleeping, soldier, not with all
                the bed making you'll be doing. Then we'll go with that data
                file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
    <br />
    <template>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://picsum.photos/300/200/?image=1082"
              height="200px"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">退役士兵安置条例</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat @click="show2 = !show2">学习</v-btn>
              <!-- <v-btn flat>预览</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>{{
                  show2 ? "keyboard_arrow_down" : "keyboard_arrow_up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="show2">
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
    <br />
    <template>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-img
              src="https://picsum.photos/300/200/?image=1063"
              height="200px"
            >
            </v-img>

            <v-card-title primary-title>
              <div>
                <div class="headline">退役士兵安置条例</div>
                <span class="grey--text">1,000 miles of wonder</span>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn flat @click="show1 = !show1">学习</v-btn>
              <!-- <v-btn flat>预览</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>{{
                  show1 ? "keyboard_arrow_down" : "keyboard_arrow_up"
                }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-slide-y-transition>
              <v-card-text v-show="show1">
                I'm a thing. But, like most politicians, he promised more than
                he could deliver. You won't have time for sleeping, soldier, not
                with all the bed making you'll be doing. Then we'll go with that
                data file! Hey, you add a one and two zeros to that or we walk!
                You're going to do his laundry? I've got to find a way to
                escape.
              </v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      value: 0,
      some: "jeason" as string,
      show: false as boolean,
      show1: false as boolean,
      show2: false as boolean
    };
  },
  methods: {
    sometest() {},
    showmycontent(prame: any) {
      this.show = !prame;
      /**
       * @description settimout定时器要在时间参数上做文章
       */
      for (let i = 0; i < 60; i++) {
        setTimeout(() => {
          this.value += 1;
          console.log(i * 1000);
        }, i * 1000);
      }
    }
  }
});
</script>
