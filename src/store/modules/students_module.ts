import Student from "@/types/Student";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useStudentModule = defineStore("student", {
  state: () => ({
    students: [] as Student[],
    isLoading: false,
    isTableLoading: false,
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 10,
  }),

  actions: {
    setStudents(students: Student[]) {
      this.students = students;
    },

    addStudent(student: Student) {
      this.students.unshift(student);
    },

    updateStudent(student: Student) {
      const index = this.students.findIndex((item) => item.id === student.id);
      if (index !== -1) {
        this.students[index] = student;
      }
    },

    deleteStudent(student: Student) {
      this.students = this.students.filter((item) => item.id !== student.id);
    },

    async create(payload: Student): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.STUDENTS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { student } = data;
        this.addStudent(student);
        return true;
      } catch (error) {
        console.error("Error Student in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.STUDENTS.READ}?page=${page}`
        );
        const res = await response.json();
        const { data, current_page, last_page, total } = res.students;
        this.totalPages = last_page;
        this.currentPage = current_page;
        this.itemsPerPage = total;
        this.setStudents(data);
        return true;
      } catch (error) {
        console.error("Error Student in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Student): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.STUDENTS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );
        const data = await response.json();
        const { student } = data;
        this.updateStudent(student);
        return true;
      } catch (error) {
        console.error("Error STudent in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Student): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.STUDENTS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { student } = data;
        this.deleteStudent(student);
        return true;
      } catch (error) {
        console.error("Error Student in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getStudents(): Student[] {
      return this.students;
    },
  },
});
