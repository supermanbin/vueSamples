<template>
  <svg class="svg" preserveAspectRatio="xMidYMin slice" viewBox="0 0 0 0">
    <defs>
      <filter id="gaussianBlur" filterUnits="objectBoundingBox">
        <feGaussianBlur
          in="SourceGraphic"
          :stdDeviation="state.blur"
          result="blur"
        />
        <feColorMatrix
          type="matrix"
          values="1 0 0 0 0
                0 1 0 0 0
                1 0 1 0 0
                0 0 0 19 -6"
          result="matrix"
        />
        <feComposite
          in="SourceGraphic"
          in2="matrix"
          :operator="state.feCompositeOperator"
        ></feComposite>
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
  <v-tweakpane
    :pane="{ title: 'SVG Filter' }"
    @on-pane-created="onPaneCreated"
  />
</template>
<script setup>
import { VTweakpane } from "v-tweakpane";
import { ref } from "vue";

const PARAMS = {
  blur: 0,
  feCompositeOperator: "atop",
  color: { r: 0, g: 0, b: 0, a: 1 },
  blurSource: "SourceGraphic",
  mergeSource: "SourceGraphic",
  offset: { x: 1, y: 1 },
};
const onPaneCreated = (pane) => {
  pane.addBinding(PARAMS, "blur", { min: 0, max: 20, step: 0.5 });
  pane.addBinding(PARAMS, "feCompositeOperator", {
    options: {
      atop: "atop",
      lighter: "lighter",
      arithmetic: "arithmetic",
      in: "in",
      out: "out",
      over: "over",
      xor: "xor",
    },
  });
  pane.addBinding(PARAMS, "color");
  pane.addBinding(PARAMS, "offset", {
    x: { min: -20, max: 20, step: 1 },
    y: { min: -20, max: 20, step: 1 },
  });

  pane.on("change", (ev) => {
    state.value[ev.target.key] = ev.value;
  });
};
const state = ref(Object.assign({}, PARAMS));
</script>
<style scoped>
.svg {
  width: 1px;
  height: 1px;
}
.circle {
  filter: url("#noise");
}
h1 {
  font-size: 5rem;
  font-weight: bold;
  color: #0066ff;
  margin: 0;
}
.effect-img {
  margin-top: 30px;
}
.effect-img img {
  mask: url("#mask");
}
</style>
