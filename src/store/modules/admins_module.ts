import Admin from "@/types/Admin";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAdminsModule = defineStore("admins", {
  state: () => ({
    admins: [] as Admin[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setAdmins(admins: Admin[]): void {
      this.admins = admins;
    },

    addAdmin(admin: Admin): void {
      this.admins.push(admin);
    },

    updateAdmin(admin: Admin): void {
      const index = this.admins.findIndex((item) => item.id === admin.id);
      if (index !== -1) {
        this.admins[index] = admin;
      }
    },

    deleteAdmin(admin: Admin): void {
      this.admins = this.admins.filter((item) => item.id !== admin.id);
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.ADMINS.READ);
        const data = await response.json();
        const { admins } = data;
        this.setAdmins(admins);
        return true;
      } catch (error) {
        console.error("Error Admin in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getAdmins(): Admin[] {
      return this.admins;
    },
  },
});
