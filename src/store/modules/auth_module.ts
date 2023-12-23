import Admin from "@/types/Admin";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAuthModule = defineStore("auth", {
  state: () => ({
    type: 1 as number,
    admin: {} as Admin,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    isLoading: false,
  }),

  actions: {
    setAdmin(admin: Admin): void {
      this.admin = admin;
    },

    setToken(token: string): void {
      this.accessToken = token;
      this.isAuthenticated = true;
      localStorage.setItem("accessToken", token);
    },

    async login(email: string, password: string): Promise<void> {
      try {
        this.isLoading = true;
        const response = await fetch(api.AUTH.LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        const { token, admin } = data;
        if (token) {
          this.setAdmin(admin);
          this.setToken(token);
        }
      } catch (error) {
        console.error("Error logging in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async fetchUserData(): Promise<void> {
      if (!this.isAuthenticated) return;
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.AUTH.USER);
        const data = await response.json();
        const { admin } = data;
        this.setAdmin(admin);
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async logout(): Promise<void> {
      try {
        this.isLoading = true;
        await authenticatedFetch(api.AUTH.LOGOUT);
        this.accessToken = null;
        this.isAuthenticated = false;
        this.admin = <Admin>{};
        localStorage.removeItem("accessToken");
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
