<template>
  <v-card class="m_registerCard">
    <v-layout align-center justify-center>
      <v-flex xs10>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="姓名"
            required
          ></v-text-field>

          <v-text-field
            v-model="office"
            :rules="officeRules"
            label="退役军官证号"
            required
          ></v-text-field>
          <v-text-field
            v-model="idnumber"
            :counter="10"
            :rules="idnumberRules"
            label="身份证号"
            required
          ></v-text-field>

          <v-layout>
            <v-flex xs12>
              <v-text-field
                v-model="mobile"
                :rules="mobileRules"
                label="手机号"
                required
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-flex xs12>
            <v-btn round block color="primary" dark
              >获取验证码 <v-icon right dark>mobile_screen_share</v-icon></v-btn
            >
          </v-flex>
          <v-text-field
            v-model="verification"
            :counter="10"
            :rules="verificationRules"
            label="验证码"
            required
          ></v-text-field>

          <v-text-field
            v-model="passwork"
            :rules="passworkRules"
            label="密码"
            required
          ></v-text-field>
          <v-text-field
            v-model="insurepasswork"
            :counter="10"
            :rules="insurepassworkRules"
            label="确认密码"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="确认无误?"
            required
            class="ma-0"
          >
            ></v-checkbox
          >
          <v-checkbox v-model="checkbox" class="ma-0">
            <v-layout slot="label" wrap align-center>
              <v-flex>本人已同意</v-flex>
              <v-flex>
                <a slot="activator" @click.stop="dialog = true"> 军创在线</a>
              </v-flex>
              <v-flex>平台政策</v-flex>
            </v-layout>
          </v-checkbox>
          <v-btn color="primary" @click="reset" block>
            确认
          </v-btn>
          <br />
          <v-btn color="primary" @click="reset" block to="/lander/login">
            返回
          </v-btn>
          <br />
          <br />
        </v-form>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="500">
      <!-- <v-btn slot="activator" color="red lighten-2" dark>
        Click Me
      </v-btn> -->

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          平台政策
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            我接受
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "用户名是必须的！",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    office: "",
    officeRules: [
      v => !!v || "退役军官是必须的！",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    idnumber: "",
    idnumberRules: [
      v => !!v || "身份证号是必须的！",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    mobile: "",
    mobileRules: [
      v => !!v || "手机号是必须的！",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    verification: "",
    verificationRules: [
      v => !!v || "请输入验证码！",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    passwork: "",
    passworkRules: [
      v => !!v || "请输入密码 ",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    insurepasswork: "",
    insurepassworkRules: [
      v => !!v || "请确认两次密码输入一致！ ",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
<style scoped>
.m_registerCard {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
