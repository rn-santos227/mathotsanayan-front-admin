import Admin from "@/types/Admin";
import { defineStore } from "pinia";

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
  },

  getters: {
    getAdmins(): Admin[] {
      return this.admins;
    },
  },
});
