import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首頁",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: "產品列表",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/cart",
    name: "購物車",
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/contact",
    name: "聯絡我們",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/about",
    name: "關於我們",
    component: () => import("../views/About.vue"),
  },

  {
    path: "/login",
    component: () => import("../views/dashbpard/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/orders",
        component: () => import("../views/dashbpard/Order.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
