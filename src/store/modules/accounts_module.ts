import Account from "@/types/Account";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useAccountModule = defineStore("courses", {
  state: () => ({
    accounts: [] as Account[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setAccounts(accounts: Account[]): void {
      this.accounts = accounts;
    },

    deleteAccount(account: Account) {
      this.accounts = this.accounts.filter((item) => item.id !== account.id);
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.ACCOUNTS.READ);
        const data = await response.json();
        const { accounts } = data;
        this.setAccounts(accounts);
        return true;
      } catch (error) {
        console.error("Error Account in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async delete(payload: Account): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.ACCOUNTS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { account } = data;
        this.deleteAccount(account);
        return true;
      } catch (error) {
        console.error("Error Account in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getAccounts(): Account[] {
      return this.accounts;
    },
  },
});
