<template>
  <v-card>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs10>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="用户名"
            required
          ></v-text-field>
          <v-flex xs12 sm6>
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="密码"
              hint="密码至少6位"
              counter
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-flex>

          <v-layout justify-end>
            <v-btn color="grey darken-1" text to="/lander/forgetpassword">
              <span>忘记密码 ?</span>
            </v-btn>
          </v-layout>
          <v-btn color="primary" @click="loginPost()" block class="">
            登陆
          </v-btn>
          <br />
          <v-btn color="primary" @click="reset" block to="/lander/register">
            注册
          </v-btn>

          <br />
        </v-form>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import https from "@/https.js";
export default {
  data: () => ({
    valid: true,
    name: "345",
    password: "111111",
    user: {},
    login: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    // password: 'Password',
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 6 || "Min 6 characters",
      emailMatch: () => "The email and password you entered don't match"
    }
  }),
  methods: {
    loginPost: function() {
      let params = {
        cardCode: this.name,
        password: this.password
      };
      https
        .fetchPost("/user/login.do", params)
        .then(data => {
          this.user = data["data"]["data"];
          this.login = data["data"]["msg"];
          console.log(this.user);
          console.log(this.login);
          if (this.login === "登录成功") {
            console.log("sas");
            this.$router.push({ path: "/zone" });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
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
