<template>
  <div class="grid-wrapper">
    <div class="grid-container">
      <div class="grid-item">
        <span><font-awesome-icon icon="fas fa-align-left" /></span>
      </div>
      <div class="grid-item">
        <span><font-awesome-icon icon="fas fa-align-right" /></span>
      </div>
      <div class="grid-item">
        <span><font-awesome-icon icon="fas fa-align-justify" /></span>
      </div>
      <div class="grid-item">
        <span><font-awesome-icon icon="fas fa-align-center" /></span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Grid",
  components: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.grid-wrapper {
  position: absolute;
  right: 0;
  top: 64px;
  width: 260px;
  height: calc(100vh - 64px);
  background: #fff;
}
.grid-container {
  padding: 0 8px;
  display: grid;
  grid-template-columns: repeat(28, 8px);
  grid-template-rows: 32px;
}
.grid-item {
  display: flex;
  grid-column-end: span 4;
  align-items: center;
  justify-content: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.grid-item:hover {
  background: aliceblue;
}
</style>
