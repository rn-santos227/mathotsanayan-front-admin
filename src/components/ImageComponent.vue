<template>
  <v-sheet :height="150" :width="150">
    <div v-if="imageModule.isLoading"></div>
    <div v-else></div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useImageModule } from "@/store";

const imageModule = useImageModule();
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
});
</script>
