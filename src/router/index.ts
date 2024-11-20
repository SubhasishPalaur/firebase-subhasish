import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/auth";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  { path: "/", component: Login },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Global navigation guard to protect routes
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.user) {
    next("/");
  } else {
    next();
  }
});

export default router;
