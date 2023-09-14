import Section from "@/types/Section";
import { defineStore } from "pinia";

export const useSectionModule = defineStore("sections", {
  state: () => ({
    sections: [] as Section[],
    isLoading: false as boolean,
  }),

  actions: {
    setSections(sections: Section[]) {
      this.sections = sections;
    },

    addSection(section: Section) {
      this.sections.push(section);
    },

    updateSection(section: Section) {
      const index = this.sections.findIndex((item) => item.id === section.id);
      if (index !== -1) {
        this.sections[index] = section;
      }
    },

    deleteSection(section: Section) {
      this.sections = this.sections.filter((item) => item.id !== section.id);
    },
  },
});
