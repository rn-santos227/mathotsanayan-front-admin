<template>
  <v-container class="base fill-height" fluid>
    <div class="d-flex justify-space-around flex-wrap">
      <DashboardCardComponent v-bind:card="schoolCard" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useDasboardModule } from "@/store";

import DashboardCardComponent from "@/components/dashboard/DashboardCardComponent.vue";

import DashboardCard from "@/interfaces/DashboardCard";

onMounted(async () => {
  await useDasboardModule().read();
});

const schoolCard = ref<DashboardCard>({
  count: useDasboardModule().getDashboard.schools,
  title: "School Count",
  link: "/schools",
  color: "primary",
  icon: "mdi-school",
});
</script>
