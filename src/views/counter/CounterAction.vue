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
    const useAdd = inject("addHandle");
    const useMinus = inject("minusHandle");
    // const store = useStore();
    // const count = computed(() => store.state.counter.count);

    // const addHandle = () => {
    //   store.dispatch("counter/add");
    // };
    // const minusHandle = () => {
    //   store.dispatch("counter/minus");
    // };

    return {
      useCount,
      useAdd,
      useMinus,
    };
  },
};
</script>
