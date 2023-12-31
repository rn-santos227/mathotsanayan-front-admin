<template>
  <v-skeleton-loader
    class="mx-auto border"
    v-if="useDasboardModule().isLoading"
    type="card-avatar, actions"
    elevation="3"
  />
  <v-card v-else class="mx-auto" elevation="3" outlined>
    <v-list-item three-line>
      <v-list-item-avatar
        class="rounded-xl"
        tile
        size="80"
        :color="props.card.color"
      >
        <v-icon dark x-large>{{ props.card.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h4 mb-1">
          {{ props.card.count }}
        </v-list-item-title>
        <v-list-item-subtitle> {{ props.card.title }} </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-actions>
      <v-spacer></v-spacer>
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
