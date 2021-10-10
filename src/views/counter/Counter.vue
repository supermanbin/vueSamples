<template>
  <a-tabs :defaultActiveKey="activeKey" :animated="false">
    <a-tab-pane key="PROVIDE_COUNT" tab="Provide Count">
      <router-view />
    </a-tab-pane>
    <a-tab-pane key="VUEX_COUNT" tab="Vuex Count">
      <router-view />
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    // tab default key
    const activeKey = ref("PROVIDE_COUNT");

    return {
      activeKey,
    };
  },
};
</script>
