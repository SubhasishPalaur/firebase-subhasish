<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold">Dashboard</h1>
    <p>Welcome, {{ user?.email }}!</p>
    <button @click="logout" class="p-2 mt-4 text-white bg-red-500 rounded">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const logout = async () => {
      await authStore.logout();
      router.push("/");
    };

    return {
      user: authStore.user,
      logout,
    };
  },
});
</script>
