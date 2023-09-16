import Teacher from "@/types/Teacher";
import { defineStore } from "pinia";

export const useTeacherModule = defineStore("teachers", {
  state: () => ({
    teachers: [] as Teacher[],
    isLoading: false as boolean,
  }),

  actions: {
    setTeachers(teachers: Teacher[]) {
      this.teachers = teachers;
    },

    addTeacher(teacher: Teacher) {
      this.teachers.push(teacher);
    },

    updateTeacher(teacher: Teacher) {
      const index = this.teachers.findIndex((item) => item.id === teacher.id);
      if (index !== -1) {
        this.teachers[index] = teacher;
      }
    },

    deleteTeacher(teacher: Teacher) {
      this.teachers = this.teachers.filter((item) => item.id !== teacher.id);
    },
  },

  getters: {
    getTeachers(): Teacher[] {
      return this.teachers;
    },
  },
});
