import User from "@/types/User";
import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";
import Admin from "@/types/Admin";
import API from "@/helpers/api";

export const useAuthModule = defineStore("auth", {
  state: (): User => ({
    id: null,
    type: 1 as number,
    admin: null,
    accessToken: localStorage.getItem("accessToken") || null,
    isAuthenticated: !!localStorage.getItem("accessToken"),
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
        const response = await fetch(API.AUTH.LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        console.log(response);
        if (!response.ok) {
          throw new Error("Invalid Credentials.");
        }

        const data = await response.json();
        const { token, admin } = data;

        this.setAdmin(admin);
        this.setToken(token);
      } catch (error) {
        console.error("Error logging in:", error);
        throw error;
      }
    },

    async fetchUserData() {
      try {
        const response = await authenticatedFetch(API.AUTH.AUTH);
        if (!response.ok) {
          throw new Error("Invalid Credentials.");
        }

        const data = await response.json();
        const { token, admin } = data;

        this.setAdmin(admin);
        this.setToken(token);
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },

    async logout() {
      try {
        await authenticatedFetch(API.AUTH.LOGOUT);
        this.accessToken = null;
        this.isAuthenticated = false;
        this.admin = null;
        localStorage.removeItem("accessToken");
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  },
});
