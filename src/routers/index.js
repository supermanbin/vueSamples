import { createRouter, createWebHashHistory } from "vue-router";
import Grid from "../views/Grid.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/grid",
  },
  {
    path: "/grid",
    name: "Grid",
    component: Grid,
  },
  {
    path: "/counter",
    name: "Counter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "counter" */ "../views/counter/Counter.vue"),
  },
  {
    path: "/spacex",
    name: "SpaceX",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/SpaceX.vue"),
    children: [],
  },
  {
    path: "/datePicker",
    name: "DatePicker",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/datePicker"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

/**
 * 路由
 */
router.beforeEach((guard, from) => {
  console.log(guard, from);
  // 刷新页面重置菜单选中状态
  store.commit("changeMenuSelectKeys", [guard.path]);
});

export { router as default, routes };
