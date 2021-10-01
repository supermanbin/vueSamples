<template>
  <h2>Counter Of Vuex: {{ count }}</h2>
  <a-button @click="addHandle">+</a-button>
  <a-button @click="minusHandle" :disabled="!Boolean(count)">-</a-button>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CounterOfVuex",
  setup() {
    const stroe = useStore();
    const count = computed(() => stroe.state.counter.count);
    const addHandle = () => {
      stroe.dispatch("counter/add");
    };
    const minusHandle = () => {
      stroe.dispatch("counter/minus");
    };

    return {
      count,
      addHandle,
      minusHandle,
    };
  },
};
</script>
