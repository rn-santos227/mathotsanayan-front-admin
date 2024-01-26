<template>
  <v-container fluid>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="schoolCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="studentCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="teacherCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="moduleCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="subjectCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="resultCard"
      />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDashboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";
import DashboardCard from "@/interfaces/DashboardCard";

const schoolCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.schools,
  title: "Total Schools",
  link: "/schools",
  color: "primary",
  icon: "mdi-school",
});

const studentCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.students,
  title: "Total Students",
  link: "/students",
  color: "purple",
  icon: "mdi-account-school",
});

const teacherCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.teachers,
  title: "Total Teachers",
  link: "/teachers",
  color: "deep-purple",
  icon: "mdi-human-male-board",
});

const moduleCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.modules,
  title: "Total Modules",
  link: "/modules",
  color: "indigo",
  icon: "mdi-text-box-check",
});

const subjectCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.subjects,
  title: "Available Subjects",
  link: "/subjects",
  color: "green",
  icon: "mdi-book",
});

const resultCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.results,
  title: "Total Results",
  link: "/reports",
  color: "light-green",
  icon: "mdi-sticker-check-outline",
});

onMounted(async () => {
  useDashboardModule().isLoading = true;
  await Promise.all([
    useDashboardModule().read(),
    useDashboardModule().ratio(),
  ]);
  schoolCard.value.count = useDashboardModule().getDashboard.schools;
  studentCard.value.count = useDashboardModule().getDashboard.students;
  teacherCard.value.count = useDashboardModule().getDashboard.teachers;
  moduleCard.value.count = useDashboardModule().getDashboard.modules;
  subjectCard.value.count = useDashboardModule().getDashboard.subjects;
  resultCard.value.count = useDashboardModule().getDashboard.results;

  useDashboardModule().isLoading = false;
});
</script>

<style scoped>
.card-width {
  width: 180px;
}
</style>
