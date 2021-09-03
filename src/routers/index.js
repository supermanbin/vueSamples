import { createRouter, createWebHashHistory } from "vue-router";
import Grid from "../views/Grid.vue";

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
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/spacex",
    name: "SpaceX",
    component: () =>
      import(/* webpackChunkName: "spacex" */ "../views/SpaceX.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((guard, from) => {
  console.log(guard, from);
});

export { router as default, routes };
