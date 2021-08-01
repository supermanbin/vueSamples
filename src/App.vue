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
        <a-menu theme="" :default-active="activeIndex">
          <!-- <a-menu-item key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>
          <a-menu-item key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item> -->
          <a-menu-item
            v-for="(item, index) in routes"
            :key="index"
            :index="index"
          >
            <router-link :to="item.path">{{ item.name }}</router-link>
          </a-menu-item>
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

export default {
  name: "App",
  data: () => {
    return {
      routes,
      activeIndex: 1,
    };
  },
};
</script>

<style lang="less">
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
