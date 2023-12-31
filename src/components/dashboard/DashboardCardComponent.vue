<template>
  <v-skeleton-loader
    class="mx-auto border"
    v-if="useDasboardModule().isLoading"
    type="card-avatar, actions"
    elevation="3"
  />
  <v-card v-else class="mx-auto" elevation="3" outlined>
    <v-list-item lines="three"> </v-list-item>
    <v-spacer />
    <v-card-actions>
      <v-btn outlined :color="props.card.color" :to="props.card.link">
        <v-icon>mdi-magnify</v-icon> See More
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useDasboardModule } from "../../store/index";
import DashboardCard from "../../interfaces/DashboardCard";

const props = defineProps<{
  card: DashboardCard;
}>();
</script>
