import Admin from "@/types/Admin";
import { defineStore } from "pinia";

export const useAdminsModule = defineStore("admins", {
  state: () => ({
    admins: [] as Admin[],
    isLoading: false,
    isTableLoading: false,
  }),
});
