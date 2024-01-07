import Subject from "@/types/Subject";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useSubjectModule = defineStore("subjects", {
  state: () => ({
    subjects: [] as Subject[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setSubjects(subjects: Subject[]): void {
      this.subjects = subjects;
    },

    addSubject(subject: Subject): void {
      this.subjects.unshift(subject);
    },

    updateSubject(subject: Subject): void {
      const index = this.subjects.findIndex((item) => item.id === subject.id);
      if (index !== -1) {
        this.subjects[index] = subject;
      }
    },

    deleteSubject(subject: Subject): void {
      this.subjects = this.subjects.filter((item) => item.id !== subject.id);
    },

    getModuleCount(id: number | string): number[] {
      const steps = [] as number[];
      const subject = this.subjects.find((item) => item.id == id);
      if (subject?.modules) {
        for (let index = 0; index <= subject.modules.length; index++) {
          steps.push(index + 1);
        }
      }
      return steps;
    },

    async create(payload: Subject): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.SUBJECTS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { subject } = data;
        this.addSubject(subject);
        return true;
      } catch (error) {
        console.error("Error Subject in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.SUBJECTS.READ);
        const data = await response.json();
        const { subjects } = data;
        this.setSubjects(subjects);
        return true;
      } catch (error) {
        console.error("Error Subject in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Subject): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SUBJECTS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { subject } = data;
        this.updateSubject(subject);
        return true;
      } catch (error) {
        console.error("Error Subject in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Subject): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SUBJECTS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { subject } = data;
        this.deleteSubject(subject);
        return true;
      } catch (error) {
        console.error("Error Subject in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getSubjects(): Subject[] {
      return this.subjects;
    },
  },
});
