<template>
  <div>{{ str }}</div>
</template>

<script>
import { ref, onMounted } from "vue";
import canvasSketch from "canvas-sketch";

export default {
  setup() {
    const str = ref("hello");

    onMounted(() => {
      const canvasContainer = document.querySelector(
        ".ant-layout-content.content"
      );
      const settings = {
        dimensions: [canvasContainer.clientWidth, canvasContainer.clientHeight],
        parent: canvasContainer,
      };
      console.log(canvasContainer.getClientRects());
      const sketch = () => {
        return ({ context, width, height }) => {
          console.log(context, width, height);
        };
      };
      canvasSketch(sketch, settings);
    });

    return { str };
  },
};
</script>
