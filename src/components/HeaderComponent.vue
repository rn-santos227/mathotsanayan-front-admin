<template>
  <v-app-bar color="yellow accent-4" elevation="1" app>
    <v-toolbar-title class="text-h6">
      {{ props.title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
