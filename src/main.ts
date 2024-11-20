import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./style.css";
import { useAuthStore } from "./stores/auth";

const app = createApp(App);
app.use(router);
app.use(createPinia());

// Fetch user state on app start
const authStore = useAuthStore();
authStore.fetchUser();

app.mount("#app");
