import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";

import { Button, Layout, Menu, List, Tabs, Drawer } from "ant-design-vue";

import "@/assets/styles/index.less";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(List)
  .use(Drawer)
  .use(Tabs);

app.mount("#app");
