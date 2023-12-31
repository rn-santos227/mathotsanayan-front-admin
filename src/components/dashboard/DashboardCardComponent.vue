<template>
  <v-skeleton-loader
    class="mx-4 border"
    v-if="useDasboardModule().isLoading"
    type="card-avatar, actions"
    elevation="3"
  />
  <v-card v-else class="mx-4" elevation="3">
    <v-card-item>
      <span class="text-h6 font-weight-bold">{{ props.card.title }}</span>
    </v-card-item>
    <v-list lines="two">
      <v-list-item>
        <template v-slot:prepend>
          <v-avatar>
            <v-icon class="larger-icons" :color="props.card.color">{{
              props.card.icon
            }}</v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <div>
            <span class="text-h4">{{ props.card.count }}</span>
          </div>
        </template>
      </v-list-item>
    </v-list>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn variant="outlined" :color="props.card.color" :to="props.card.link">
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

<style scoped>
.larger-icons {
  font-size: 3em;
}
</style>
