<template>
  <div class="grid">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Grid",
  components: {},
  created() {},
  mounted() {
    // console.log(`table tr:`, this.$refs.table.rows);
    // console.log(`table th:`, this.$refs.table.rows[0].cells);
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
}
.grid-item {
  height: 100px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
