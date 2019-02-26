<template>
  <div>
    s事实上
  </div>
</template>
<script>
// import axios from "axios";

import https from "@/https.js";
export default {
  methods: {
    loginPost: function() {
      let params = {
        cardCode: "345",
        password: "111111"
      };
      https
        .fetchPost("/user/login.do", params)
        .then(data => {
          console.log(data);
          // this.base.token = data.data.token;
          // console.log("this.base.tokenthis.base.token",this.base.token)
          // this.indexPost2(this.rres);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.loginPost();
    // console.log(https);
  }
};
</script>
