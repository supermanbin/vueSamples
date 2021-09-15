<template>
  <h2>Inject {{ useCount }}</h2>
  <a-button @click="useAdd">+</a-button>
  <a-button @click="useMinus" :disabled="!Boolean(useCount)">-</a-button>
</template>

<script>
import { inject } from "vue";

export default {
  name: "CounterAction",
  setup() {
    const useCount = inject("count");
    console.log(useCount);
    const useAdd = inject("addHandle");
    const useMinus = inject("minusHandle");

    return {
      useCount,
      useAdd,
      useMinus,
    };
  },
};
</script>
