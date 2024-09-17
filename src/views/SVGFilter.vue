<template>
  <svg class="svg" preserveAspectRatio="xMidYMin slice" viewBox="0 0 0 0">
    <defs>
      <filter id="gaussianBlur" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feOffset dx="-2" dy="-10"></feOffset>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode in="SourceGraphic"></feMergeNode>
        </feMerge>
      </filter>

      <filter id="noise">
        <feTurbulence baseFrequency="0.02" numOctaves="100" result="noise" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          xChannelSelector="R"
          yChannelSelector="G"
          scale="100"
        />
      </filter>

      <mask id="mask">
        <circle r="500" cx="100" cy="100" fill="white" class="circle" />
      </mask>
    </defs>
  </svg>
  <h1 style="filter: url('#gaussianBlur')">Blur</h1>
  <div class="effect-img"><img alt="2" src="../assets/2.jpg" /></div>
</template>
<script>
export default {
  name: "Filter",
};
</script>
<style scoped>
.svg {
  width: 1px;
  height: 1px;
}
.circle {
  filter: url('#noise');
}
h1 {
  font-size: 30px;
  font-weight: bold;
  color: #0066ff;
  margin: 0;
  height: 30px;
}
.effect-img img {
  mask: url("#mask");
}
</style>
