import { createRouter, createWebHistory } from "vue-router";
import Grid from "../views/Grid.vue";
import Counter from "../views/counter/Counter.vue";
import CounterOfPureVue from "../views/counter/CounterOfPureVue.vue";
import CounterOfVuex from "../views/counter/CounterOfVuex.vue";
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
    path: "/flex",
    name: "Flex",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/Flex.vue"),
  },
  {
    path: "/counter",
    name: "Counter",
    redirect: "/counter/pureVue",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Counter,
    children: [
      {
        path: "pureVue",
        component: CounterOfPureVue,
      },
      {
        path: "vuex",
        component: CounterOfVuex,
      },
    ],
  },
  {
    path: "/spacex",
    name: "SpaceX",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/SpaceX.vue"),
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
  console.log(guard);
  if (guard.path.split("/").length) {
    // 刷新页面重置菜单选中状态
    store.commit("changeMenuSelectKeys", ["/" + guard.path.split("/")[1]]);
  }
});

export { router as default, routes };
