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
              <v-btn
                flat
                @click="showmycontent('show')"
                :color="show ? 'error' : ''"
                >{{ show ? "退出学习" : "学习" }}</v-btn
              >
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
                  <v-flex xs12>
                    <v-slider
                      label="计时中"
                      readonly
                      :value="value"
                      thumb-label="always"
                    ></v-slider>
                  </v-flex>
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
<script>
const Timer = require("timer.js");
export default {
  data() {
    return {
      picker: "11:15",
      landscape: false,
      value: 0,
      some: "jeason",
      show: false,
      show1: false,
      show2: false
    };
  },
  methods: {
    sometest() {},
    showmycontent(prame) {
      console.log("sasa");
      this[prame] = !this[prame];
    }
  },
  mounted() {}
};
</script>
