import Account from "@/types/Account";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";
import Password from "@/interfaces/Password";

export const useAccountsModule = defineStore("accounts", {
  state: () => ({
    accounts: [] as Account[],
    isLoading: false,
    isTableLoading: false,
    currentPage: 1,
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

    async reset(payload: Password, id: number): Promise<boolean> {
      try {
        this.isLoading = true;
        await authenticatedFetch(`${api.ACCOUNTS.RESET}${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
        return true;
      } catch (error) {
        console.error("Error Account in:", error);
        return false;
      } finally {
        this.isLoading = false;
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
