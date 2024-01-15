import Module from "@/types/Module";
import Question from "@/types/Question";
import Page from "@/interfaces/Page";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useModulesModule = defineStore("modules", {
  state: () => ({
    modules: [] as Module[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setModules(modules: Module[]) {
      this.modules = modules;
    },

    setPage(page: Page) {
      this.page = page;
    },

    setQuestionsModule(index: number, questions: Question[]) {
      this.modules[index].questions = questions;
    },

    updateQuestionModule(index: number, question: Question) {
      const moduleQuestions = this.modules[index].questions;
      if (moduleQuestions) {
        const q_index = moduleQuestions.findIndex(
          (item) => item.id === question.id
        );
        if (index !== -1) {
          moduleQuestions[q_index] = question;
        }
        this.modules[index].questions = moduleQuestions;
      }
    },

    removeQuestionModule(index: number, question: Question) {
      const moduleQuestions = this.modules[index].questions;
      if (moduleQuestions) {
        const questions = moduleQuestions.filter(
          (item) => item.id !== question.id
        );
        this.modules[index].questions = questions;
      }
    },

    addModule(module: Module) {
      this.modules.unshift(module);
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
        this.isLoading = true;
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
        this.isLoading = false;
      }
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.MODULES.READ}?page=${page}`
        );
        const res = await response.json();
        const { data } = res.modules;

        if (data) {
          data.forEach((item: Module) => {
            if (item.active) item.active = true;
            else item.active = false;
          });
        }

        this.setPage(res.modules);
        this.setModules(data);
        return true;
      } catch (error) {
        console.error("Error Module in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Module): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.MODULES.UPDATE}${payload.id}`,
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
          `${api.MODULES.DELETE}${payload.id}`,
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

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.MODULES.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { modules } = data;
        this.page.current_page = 1;
        this.page.total = 1;
        this.page.per_page = modules.length;
        this.setModules(modules);
        return true;
      } catch (error) {
        console.error("Error Modules in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getModules(): Module[] {
      return this.modules;
    },
  },
});
