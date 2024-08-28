<template>
  <svg>
    <defs>
      <filter id="gaussianBlur" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feOffset dx="-2" dy="-10"></feOffset>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
  </svg>
  <h1 style="filter: url('#gaussianBlur')">Blur</h1>
</template>
<script>
export default {
  name: "Filter",
};
</script>
<style scoped>
h1 {
  font-size: 30px;
  font-weight: bold;
  color: #0066ff;
  margin: 0;
  height: 30px;
}
</style>
