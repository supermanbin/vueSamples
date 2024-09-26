<template>
  <svg class="filter-svg">
    <defs>
      <filter id="gaussianBlur" filterUnits="objectBoundingBox">
        <feGaussianBlur
          :in="state.blurSource"
          :stdDeviation="state.blur"
          result="blur"
        />
        <feOffset
          in="blur"
          :dx="state.offset.x"
          :dy="state.offset.y"
        ></feOffset>
        <feMerge>
          <feMergeNode></feMergeNode>
          <feMergeNode :in="state.mergeSource"></feMergeNode>
        </feMerge>
      </filter>
    </defs>
  </svg>
  <h1
    style="filter: url('#gaussianBlur')"
    :style="{
      color: `rgba(${state.color.r}, ${state.color.g}, ${state.color.b}, ${state.color.a})`,
    }"
  >
    Blur
  </h1>
</template>
<script>
import { Pane } from "tweakpane";
import { reactive } from "vue";

export default {
  name: "Filter",
  setup() {
    const pane = new Pane({ title: "SVG Filter Properties", expanded: true });
    const PARAMS = {
      blur: 0,
      color: { r: 0, g: 0, b: 0, a: 1 },
      blurSource: "SourceGraphic",
      mergeSource: "SourceGraphic",
      offset: { x: 1, y: 1 },
    };
    pane.addBinding(PARAMS, "blur", { min: 0, max: 10, step: 1 });
    pane.addBinding(PARAMS, "color");
    pane.addBinding(PARAMS, "offset", {
      x: { min: -20, max: 20, step: 1 },
      y: { min: -20, max: 20, step: 1 },
    });
    pane.addBinding(PARAMS, "blurSource", {
      options: {
        SourceGraphic: "SourceGraphic",
        SourceAlpha: "SourceAlpha",
      },
    });
    pane.addBinding(PARAMS, "mergeSource", {
      options: {
        SourceGraphic: "SourceGraphic",
        SourceAlpha: "SourceAlpha",
      },
    });

    function changeParams(param) {
      if (param.last) {
        state[param.target.label] = param.value;
        console.log("======parma", param, state);
      }
    }

    let state = reactive({
      blur: 0,
      color: { r: 0, g: 0, b: 0, a: 1 },
      blurSource: "SourceGraphic",
      mergeSource: "SourceGraphic",
      offset: { x: 1, y: 1 },
    });
    pane.on("change", (ev) => {
      changeParams(ev);
    });
    return { state, changeParams };
  },
};
</script>
<style scoped>
.filter-svg {
  width: 0;
  height: 0;
}
h1 {
  font-size: 30px;
  font-weight: bold;
  color: #0066ff;
  margin: 0;
  height: 30px;
}
</style>
