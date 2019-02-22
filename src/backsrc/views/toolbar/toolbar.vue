<template>
  <div>
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        text: "主页",
        disabled: false,
        href: "/backindex/home"
      },
      {
        text: "Link 1",
        disabled: false,
        href: "breadcrumbs_link_1"
      },
      {
        text: "Link 2",
        disabled: true,
        href: "breadcrumbs_link_2"
      }
    ]
  })
};
</script>
