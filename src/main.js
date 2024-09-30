import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./store";
import {
  Button,
  Layout,
  Menu,
  List,
  Tabs,
  Drawer,
  Input,
  Tag,
  Space,
  Row,
  Col,
  Form,
} from "ant-design-vue";

import "@/assets/styles/index.less";
import "v-tweakpane/dist/v-tweakpane.css";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(List)
  .use(Drawer)
  .use(Input)
  .use(Tag)
  .use(Space)
  .use(Row)
  .use(Col)
  .use(Form)
  .use(Tabs);

app.mount("#app");
