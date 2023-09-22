import Subject from "@/types/Subject";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useSubjectModule = defineStore("subjects", {
  state: () => ({
    subjects: [] as Subject[],
    isLoading: false as boolean,
  }),

  actions: {
    setSubjects(subjects: Subject[]): void {
      this.subjects = subjects;
    },

    addSubject(subject: Subject): void {
      this.subjects.push(subject);
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
        const { subjects } = data;
        this.addSubject(subjects);
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
        this.isLoading = true;
        const response = await authenticatedFetch(api.SUBJECTS.READ);
        const data = await response.json();
        const { subjects } = data;
        this.setSubjects(subjects);
        return true;
      } catch (error) {
        console.error("Error Subject in:", error);
        return false;
      } finally {
        this.isLoading = false;
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
