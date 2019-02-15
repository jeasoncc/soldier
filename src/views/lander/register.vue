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
            v-model="email"
            :rules="emailRules"
            label="退役军官证号"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="身份证号"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="手机号"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="验证码"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="密码"
            required
          ></v-text-field>
          <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="确认密码"
            required
          ></v-text-field>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="确认无误?"
            required
          ></v-checkbox>
          <v-btn color="primary" @click="reset" block to="/lander/register">
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
  </v-card>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
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
