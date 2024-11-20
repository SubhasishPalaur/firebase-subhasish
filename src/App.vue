<template>
  <div id="app" class="min-h-screen bg-gray-100 flex items-center justify-center" style="display: flex;
      flex-direction: column; 
      align-items: center; 
      justify-content: center; 
      min-height: 100vh; 
      background-color: #f8f9fa;"
>
    <!-- Navbar (optional, can be styled as needed) -->
    <header class="p-4 bg-blue-600 text-white text-center">
      <h1 class="text-2xl font-bold">Vue Firebase App</h1>
    </header>

    <!-- Main content -->
    <main class="p-4">
      <!-- Display router-view to show current route's component -->
      <router-view />
    </main>

    <!-- Footer (optional) -->
    <footer class="p-4 text-center text-gray-600">
      © 2024 Your Company
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
/* Global styles (optional) */
#app {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
