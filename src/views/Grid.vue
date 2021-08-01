<template>
  <table ref="table">
    <tr>
      <th>header 1</th>
      <th>header 2</th>
      <th>header 3</th>
      <th>header 4</th>
    </tr>
    <tr>
      <td>td 1</td>
      <td>td 2</td>
      <td>td 3</td>
      <td>td 4</td>
    </tr>
  </table>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Grid",
  components: {},
  created() {},
  mounted() {
    console.log(this.$refs.table.rows[0].cells);
  },
};
</script>
