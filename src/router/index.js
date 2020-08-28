import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首頁",
    component: Home,
  },
  {
    path: "/products",
    name: "產品列表",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/cart",
    name: "購物車",
    component: () => import("/Project/JS直播班/js_week6/src/views/Cart.vue"),
  },
  {
    path: "/contact",
    name: "聯絡我們",
    component: () => import("/Project/JS直播班/js_week6/src/views/Contact.vue"),
  },
  {
    path: "/about",
    name: "關於我們",
    component: () => import("/Project/JS直播班/js_week6/src/views/About.vue"),
  },

  {
    path: "/login",
    component: () => import("/Project/JS直播班/js_week6/src/views/dashboard/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("/Project/JS直播班/js_week6/src/views/Dashboard.vue"),
    children: [
      {
        path: "/orders",
        component: () => import("/Project/JS直播班/js_week6/src/views/dashboard/Order.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
