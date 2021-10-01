<template>
  <a-tabs :defaultActiveKey="activeKey" :animated="false">
    <a-tab-pane key="PROVIDE_COUNT" tab="Provide Count">
      <h2>PROVIDE_COUNT {{ count }}</h2>
      <CounterAction></CounterAction>
    </a-tab-pane>
    <a-tab-pane key="VUEX_COUNT" tab="Vuex Count">
      <CounterOfVuex></CounterOfVuex>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { ref, provide } from "vue";
import CounterAction from "./CounterAction.vue";
import CounterOfVuex from "./CounterOfVuex.vue";

export default {
  components: {
    CounterAction,
    CounterOfVuex,
  },
  setup() {
    // count
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

    // tab default key
    const activeKey = ref("PROVIDE_COUNT");

    return {
      count,
      activeKey,
    };
  },
};
</script>
