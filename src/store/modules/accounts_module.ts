import Acccount from "@/types/Account";

import { defineStore } from "pinia";

export const useAccountModule = defineStore("courses", {
  state: () => ({
    accounts: [] as Acccount[],
    isLoading: false,
    isTableLoading: false,
  }),

  getters: {
    getAccounts(): Acccount[] {
      return this.accounts;
    },
  },
});
