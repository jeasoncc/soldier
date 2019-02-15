<template>
  <v-container style="max-width: 600px;">
    <v-timeline dense clipped>
      <v-timeline-item fill-dot class="white--text mb-5" color="orange" large>
        <span slot="icon">荣誉</span>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="您所获得荣誉"
          solo
          @keydown.enter="comment"
        >
        </v-text-field>
      </v-timeline-item>

      <!-- <v-slide-x-transition group>
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-3"
          color="pink"
          small
        >
          <v-layout justify-space-between>
            <v-flex xs7 v-text="event.text"></v-flex>
            <v-flex xs5 text-xs-right v-text="event.time"></v-flex>
          </v-layout>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item class="mb-4" hide-dot>
        <span>TODAY</span>
      </v-timeline-item> -->

      <v-timeline-item
        class="mb-3"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>获得10成就点</v-flex>
          <v-flex xs5 text-xs-right>2018年4月12日</v-flex>
        </v-layout>
      </v-timeline-item>

      <v-timeline-item class="mb-3" small>
        <v-layout justify-space-between>
          <v-flex xs7>
            <v-chip class="white--text ml-0" color="purple" label small>
              First
            </v-chip>
            首次完成任务
          </v-flex>
          <v-flex xs5 text-xs-right>2018年4月12日</v-flex>
        </v-layout>
      </v-timeline-item>

      <v-timeline-item
        class="mb-3"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>获得10成就点</v-flex>
          <v-flex xs5 text-xs-right>2018年4月12日</v-flex>
        </v-layout>
      </v-timeline-item>

      <!-- <v-timeline-item class="mb-3" hide-dot>
        <v-btn class="mx-0" color="white">
          Resend Email
        </v-btn>
      </v-timeline-item> -->

      <v-timeline-item
        class="mb-3"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>获得30成就点</v-flex>
          <v-flex xs5 text-xs-right>2018年3月12日</v-flex>
        </v-layout>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    events: [],
    input: null,
    nonce: 0
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    }
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(
          /:\d{2}\sGMT-\d{4}\s\((.*)\)/,
          (match, contents, offset) => {
            return ` ${contents
              .split(" ")
              .map(v => v.charAt(0))
              .join("")}`;
          }
        )
      });

      this.input = null;
    }
  }
};
</script>
