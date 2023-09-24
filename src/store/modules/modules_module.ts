import Module from "@/types/Module";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useModuleModule = defineStore("modules", {
  state: () => ({
    modules: [] as Module[],
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {
    setModules(modules: Module[]) {
      this.modules = modules;
    },

    addModule(module: Module) {
      this.modules.push(module);
    },

    updateModule(module: Module) {
      const index = this.modules.findIndex((item) => item.id === module.id);
      if (index !== -1) {
        this.modules[index] = module;
      }
    },

    deleteModule(module: Module) {
      this.modules = this.modules.filter((item) => item.id !== module.id);
    },

    async create(payload: Module): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.MODULES.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { module } = data;
        this.addModule(module);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async read(): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.MODULES.READ);
        const data = await response.json();
        const { modules } = data;
        this.setModules(modules);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: Module): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.COURSES.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const data = await response.json();
        const { module } = data;
        this.updateModule(module);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Module): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.TEACHERS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { module } = data;
        this.deleteModule(module);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getModules(): Module[] {
      return this.modules;
    },
  },
});
