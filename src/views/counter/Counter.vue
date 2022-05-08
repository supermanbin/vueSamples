<template>
  <a-tabs
    :defaultActiveKey="activeKey"
    :animated="false"
    @change="tabChangehandle"
  >
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
import router from "@/routers/index.js";

export default {
  setup() {
    // tab default key
    const activeKey = ref("PROVIDE_COUNT");
    const tabChangehandle = (activeKey) => {
      console.log(activeKey);
      switch (activeKey) {
        case "PROVIDE_COUNT":
          // activeKey.value = "PROVIDE_COUNT";
          router.push({ path: "/counter/pureVue" });
          break;
        case "VUEX_COUNT":
          // activeKey.value = "VUEX_COUNT";
          router.push({ path: "/counter/vuex" });
          break;
        default:
          break;
      }
    };

    return {
      activeKey,
      tabChangehandle,
    };
  },
};
</script>
