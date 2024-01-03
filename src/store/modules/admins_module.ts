import Admin from "@/types/Admin";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAdminsModule = defineStore("admins", {
  state: () => ({
    admins: [] as Admin[],
    isLoading: false,
    isTableLoading: false,
    currentPage: 1,
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

    async create(payload: Admin): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.ADMINS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { admin } = data;
        this.addAdmin(admin);
        return true;
      } catch (error) {
        console.error("Error Admin in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
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

    async update(payload: Admin): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.ADMINS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { admin } = data;
        this.updateAdmin(admin);
        return true;
      } catch (error) {
        console.error("Error Admin in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Admin): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.ADMINS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { admin } = data;
        this.deleteAdmin(admin);
        return true;
      } catch (error) {
        console.error("Error Admin in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getAdmins(): Admin[] {
      return this.admins;
    },
  },
});
