import User from "@/types/User";
import Admin from "@/types/Admin";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAuthModule = defineStore("auth", {
  state: (): User => ({
    id: 0,
    type: 1 as number,
    admin: null,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
    isLoading: false,
  }),

  actions: {
    setAdmin(admin: Admin): void {
      this.id = admin.id;
      this.admin = {
        id: admin.id,
        email: admin.email,
        name: admin.name,
        contact_number: admin.contact_number,
      };
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
        this.setAdmin(admin);
        this.setToken(token);
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
        const { user } = data;
        this.setAdmin(user);
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
        this.admin = null;
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
