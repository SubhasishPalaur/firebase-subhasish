import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, User } from "firebase/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    error: null as string | null,
    loading: true, // To manage loading state on app initialization
  }),
  actions: {
    // Login method
    async login(email: string, password: string) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user; // Save user details in state
        this.error = null;
      } catch (err: any) {
        this.error = err.message;
      }
    },

    // Logout method  
    async logout() {
      const auth = getAuth();
      await auth.signOut();
      this.user = null;
    },

    // Fetch user state (on page refresh)
    async fetchUser() {
      const auth = getAuth();
      this.loading = true;
      onAuthStateChanged(auth, (user) => {
        this.user = user; // Persist user session
        this.loading = false;
      });
    },
  },
});
