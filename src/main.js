import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";

import { Button, Layout, Menu, List, Tabs } from "ant-design-vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";

import "v-calendar/dist/style.css";
import "@/assets/styles/index.less";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(List)
  .use(Tabs)
  .use(SetupCalendar, {});
// Use the components
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);
app.mount("#app");
