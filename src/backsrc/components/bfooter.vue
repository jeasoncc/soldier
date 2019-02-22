<template>
  <v-footer class="pa-3" app>
    <v-spacer></v-spacer>

    <div>军创在线&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
  mounted() {
    function* gen(x) {
      var y = yield x + 2;
      y = yield x + 9;
      return y;
    }
    var g = gen(1);
    console.log(g.next());
    console.log(g.next());
    console.log(g.next(20));
    console.log(g.next(1));
  }
};
</script>
