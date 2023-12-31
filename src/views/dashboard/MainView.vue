<template>
  <v-container class="pa-12">
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent class="flex-grow-1" v-bind:card="schoolCard" />
      <DashboardCardComponent class="flex-grow-1" v-bind:card="studentCard" />
      <DashboardCardComponent class="flex-grow-1" v-bind:card="schoolCard" />
      <DashboardCardComponent class="flex-grow-1" v-bind:card="schoolCard" />
      <DashboardCardComponent class="flex-grow-1" v-bind:card="schoolCard" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDasboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";

import DashboardCard from "@/interfaces/DashboardCard";

const schoolCard = ref<DashboardCard>({
  count: useDasboardModule().getDashboard.schools,
  title: "Total Schools",
  link: "/schools",
  color: "primary",
  icon: "mdi-school",
});

const studentCard = ref<DashboardCard>({
  count: useDasboardModule().getDashboard.students,
  title: "Total Students",
  link: "/schools",
  color: "purple",
  icon: "mdi-account-school",
});

onMounted(async () => {
  await useDasboardModule().read();
  schoolCard.value.count = useDasboardModule().getDashboard.schools;
  studentCard.value.count = useDasboardModule().getDashboard.students;
});
</script>
