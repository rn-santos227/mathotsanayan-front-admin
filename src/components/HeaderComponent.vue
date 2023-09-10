<template>
  <v-app-bar color="yellow accent-4" elevation="1" app>
    <v-toolbar-title>{{ props.title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">
import { defineProps as setProps } from "vue";

const props = setProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
