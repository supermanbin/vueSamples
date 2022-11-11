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
  Select,
  Row,
  Col,
} from "ant-design-vue";
import { SetupCalendar, Calendar, DatePicker } from "v-calendar";
import "v-calendar/dist/style.css";
import "@/assets/styles/index.less";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
import { SHAPE_PROPERTY } from "@/common/constants/properties";

/* 注册font */
library.add(fas);

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Button)
  .use(Layout)
  .use(Menu)
  .use(List)
  .use(Tabs)
  .use(Select)
  .use(Row)
  .use(Col)
  .use(SetupCalendar, {})
  .use((app) => {
    app.config.globalProperties.$CONSTANTS = {
      SHAPE_PROPERTY,
    };
  });
// Use the components
app.component("Calendar", Calendar);
app.component("DatePicker", DatePicker);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
