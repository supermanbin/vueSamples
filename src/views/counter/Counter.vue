<template>
  <h2>Provide {{ count }}</h2>
  <CounterAction></CounterAction>
</template>

<script>
import { ref, provide } from "vue";
import CounterAction from "./CounterAction.vue";

export default {
  components: {
    CounterAction,
  },
  setup() {
    const count = ref(0);
    const add = () => {
      count.value++;
    };
    const minus = () => {
      if (count.value === 0) {
        return;
      }
      count.value--;
    };

    provide("count", count);
    provide("addHandle", add);
    provide("minusHandle", minus);

    return {
      count,
    };
  },
};
</script>
