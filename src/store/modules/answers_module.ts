import Answer from "@/types/Answer";
import { defineStore } from "pinia";

export const useAnswerModules = defineStore("answers", {
  state: () => ({
    answers: [] as Answer[],
    isLoading: false,
    isTableLoading: false,
  }),
});
