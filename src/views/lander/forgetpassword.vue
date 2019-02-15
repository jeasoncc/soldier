<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      <span>输入手机号获取验证码</span>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-flex xs12 sm6 md3>
        <v-text-field label="请输入手机号" outline></v-text-field>
      </v-flex>
      <v-btn text to="/lander/login">取消</v-btn>
      <v-btn color="primary" @click="e6 = 2">下一步</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2"
      ><span>输入验证码</span></v-stepper-step
    >

    <v-stepper-content step="2">
      <v-flex xs12 sm6 md3>
        <v-text-field label="请输入验证码" outline></v-text-field>
      </v-flex>
      <v-btn text @click="e6 = 1">上一步</v-btn>
      <v-btn color="primary" @click="e6 = 3">下一步</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">重置密码</v-stepper-step>

    <v-stepper-content step="3">
      <v-flex xs12 sm6 md3>
        <v-text-field label="请输入密码" outline></v-text-field>
      </v-flex>
      <v-flex xs12 sm6 md3>
        <v-text-field label="请确认密码一致" outline></v-text-field>
      </v-flex>
      <v-btn text @click="e6 = 2">上一步</v-btn>
      <v-btn color="primary" @click="e6 = 4">下一步</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">完成重置</v-stepper-step>
    <v-stepper-content step="4">
      <v-alert
        v-model="show"
        v-bind="localAttrs"
        :dismissible="dismissible"
        :type="type"
        class="mb-3"
      >
        您已重置密码成功！
      </v-alert>
      <v-btn text @click="e6 = 3">上一步</v-btn>
      <v-btn color="primary" to="/lander/login">完成</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>
<script>
export default {
  data: () => ({
    e6: 1,
    border: "left",
    coloredBorder: false,
    dismissible: false,
    items: ["border", "outlined", "dense", "prominent"],
    show: true,
    type: "success",
    variant: null
  }),
  methods: {},
  computed: {
    localAttrs() {
      const attrs = {};

      if (this.variant === "border") {
        attrs.border = this.border;
        attrs.coloredBorder = this.coloredBorder;
      } else {
        attrs[this.variant] = true;
      }

      return attrs;
    }
  }
};
</script>
