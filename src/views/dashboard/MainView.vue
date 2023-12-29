<template>
  <v-container class="base fill-height" fluid> </v-container>
  <LoadingDialogComponent v-bind:activate="useDasboardModule().isLoading" />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useDasboardModule } from "@/store";

import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";
onMounted(async () => {
  await useDasboardModule().read();
});
</script>
