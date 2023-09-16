import Module from "@/types/Module";
import { defineStore } from "pinia";

export const useModuleModule = defineStore("modules", {
  state: () => ({
    modules: [] as Module[],
    isLoading: false as boolean,
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
  },

  getters: {
    getModules(): Module[] {
      return this.modules;
    },
  },
});
