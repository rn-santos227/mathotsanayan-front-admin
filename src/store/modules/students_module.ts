import Student from "@/types/Student";
import { defineStore } from "pinia";

export const useStudentModule = defineStore("student", {
  state: () => ({
    students: [] as Student[],
    isLoading: false as boolean,
  }),

  actions: {
    setStudents(students: Student[]) {
      this.students = students;
    },

    addStudent(student: Student) {
      this.students.push(student);
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
  },
});
