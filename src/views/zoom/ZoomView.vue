<template>
  <div class="zoom-wrap">
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
    <div class="zoom-item"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  setup() {
    onMounted(() => {
      console.log("aaa");
    });
  },
};
</script>

<style scoped>
.zoom-wrap {
  display: flex;
  perspective: 1000px;
  transform-style: preserve-3d;
  perspective-origin: 150% 150%;
}
.zoom-item {
  margin: 0 10px;
  flex: 1;
  height: 100px;
  background: #fff;
  transition: transform linear 0.2s;
  transform: rotateY(30deg);
}
.zoom-item:hover {
}
</style>
