<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100" >
    <h1 class="mb-4 text-xl font-bold" style="text-align:center">Login</h1>
    <form @submit.prevent="handleLogin" class="flex flex-col w-1/3 space-y-4" style="display:flex;flex-direction:column;gap:10px">
      <input v-model="email" type="email" placeholder="Email" class="p-2 border rounded" />
      <input v-model="password" type="password" placeholder="Password" class="p-2 border rounded" />
      <button type="submit" class="p-2 text-white bg-blue-500 rounded">Login</button>
    </form>
    <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useAuthStore } from "../stores/auth";

export default defineComponent({
  setup() {
    const email = ref("");
    const password = ref("");
    const authStore = useAuthStore();

    const handleLogin = async () => {
      await authStore.login(email.value, password.value); // Attempt login
      if (!authStore.error) {
        router.push("/dashboard"); // Navigate to Dashboard on successful login
      }
    };

    return {
      email,
      password,
      error: authStore.error,
      handleLogin,
    };
  },
});
</script>
