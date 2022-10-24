<template>
  <a-layout>
    <a-layout-header class="layout-header">
      <h1>Hello</h1>
      <a-menu theme="dark" mode="horizontal">
        <a-menu-item>ok</a-menu-item>
      </a-menu>
    </a-layout-header>

    <a-layout class="container">
      <a-layout-sider theme="light">
        <a-menu theme="dark" :selectedKeys="selectKeys">
          <template v-for="item in routes">
            <a-menu-item v-if="item.path !== '/'" :key="item.path">
              <router-link :to="item.path">{{ item.name }}</router-link>
            </a-menu-item>
          </template>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-content class="content">
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { routes } from "@/routers/index.js";
import { mapState } from "vuex";

export default {
  name: "App",
  data: () => {
    return {
      routes,
    };
  },

  computed: {
    ...mapState({
      selectKeys: (state) => state.menuSelectKeys,
    }),
  },

  created() {},

  methods: {
    handleClick() {
      //
      // this.$store.commit("changeMenuSelectKeys", [e.key]);
    },
  },
};
</script>

<style scoped lang="less">
:global(:root) {
  --primary-color: #4091f7;
  --unit-color: #a6abc9;
  --font-size-11: 11px;
  --bord-color: #f2f2f2;
  --unit-size: 8px;
}

.layout-header {
  display: flex;
  justify-content: space-between;
  h1 {
    color: #fff;
  }
}
.container {
  display: flex;
  height: calc(100vh - 64px);
}
.content {
  padding: 20px;
}
</style>
