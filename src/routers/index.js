import { createRouter, createWebHashHistory } from "vue-router";
import Grid from "../views/Grid.vue";
import Counter from "../views/counter/Counter.vue";
import CounterOfPureVue from "../views/counter/CounterOfPureVue.vue";
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
        component: CounterOfPureVue,
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
