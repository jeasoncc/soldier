<template>
  <v-footer class="pa-3" app>
    <v-spacer></v-spacer>

    <div>军创在线&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
export default {
  mounted() {
    function* foo() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
      return 6;
    }

    for (let v of foo()) {
      console.log(v);
    }
  }
};
</script>
