<template>
  <v-container fluid>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="schoolCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="teacherCard"
      />
      <DashboardCardComponent
        class="flex-grow-1 card-width"
        v-bind:card="studentCard"
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
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardPieGraphComponent class="flex-grow-0 card-width-pie" />
      <DashboardTableComponent class="flex-grow-1 card-width" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDashboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";
import DashboardPieGraphComponent from "@/components/dashboard/DashboardPieGraphComponent.vue";
import DashboardTableComponent from "@/components/dashboard/DashboardTableComponent.vue";
import DashboardCard from "@/interfaces/DashboardCard";

const schoolCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.schools,
  title: "Total Schools",
  link: "/schools",
  color: "primary",
  icon: "mdi-school",
});

const teacherCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.teachers,
  title: "Total Teachers",
  link: "/teachers",
  color: "purple",
  icon: "mdi-human-male-board",
});

const studentCard = ref<DashboardCard>({
  count: useDashboardModule().getDashboard.students,
  title: "Total Students",
  link: "/students",
  color: "deep-purple",
  icon: "mdi-account-school",
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
  title: "Total Subjects",
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
    useDashboardModule().modules(),
    useDashboardModule().ratio(),
    useDashboardModule().read(),
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

.card-width-pie {
  width: 490px;
}
</style>
