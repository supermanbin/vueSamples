<template>
  <a-tabs :defaultActiveKey="activeKey" :animated="false">
    <a-tab-pane key="PROVIDE_COUNT" tab="Provide Count">
      <h2>PROVIDE_COUNT {{ count }}</h2>
      <CounterAction></CounterAction>
    </a-tab-pane>
    <a-tab-pane key="VUEX_COUNT" tab="Vuex Count">
      <h2>VUEX_COUNT {{ count }}</h2>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { ref, provide } from "vue";
import CounterAction from "./CounterAction.vue";

export default {
  components: {
    CounterAction,
  },
  setup(props) {
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

    console.log(props);

    return {
      count,
      activeKey,
    };
  },
};
</script>
