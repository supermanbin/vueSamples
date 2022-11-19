import { createRouter, createWebHistory } from "vue-router";
import Figma from "../views/Figma.vue";
import store from "../store";

const routes = [
  {
    path: "/",
    redirect: "/figma",
  },
  {
    path: "/figma",
    name: "Figma",
    component: Figma,
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
  {
    path: "/canvas",
    name: "CanvasSketch",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/canvasSketch"),
    children: [],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/**
 * 路由
 */
router.beforeEach((guard) => {
  // 刷新页面重置菜单选中状态
  store.commit("changeMenuSelectKeys", [guard.path]);
});

export { router as default, routes };
