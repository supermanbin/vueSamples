<template>
  <a-button @click="changeColor">change color</a-button>
</template>

<script>
import { ref } from "vue";

export default {
  name: "kSelect",
  emits: ["changeSize"],
  setup() {
    const fontSize = ref(12);
    return {
      fontSize,
    };
  },
  methods: {
    changeColor() {
      this.fontSize++;
      this.$emit("changeSize", `${this.fontSize}px`);
    },
  },
};
</script>
