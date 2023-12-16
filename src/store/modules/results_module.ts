import Result from "@/types/Result";
import { defineStore } from "pinia";

export const useResultModule = defineStore("result", {
  state: () => ({
    results: [] as Result[],
    isLoading: false,
    isTableLoading: false,
  }),
});
