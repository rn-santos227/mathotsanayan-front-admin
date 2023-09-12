<template>
  <v-app-bar color="purple-darken-3" dark elevation="1" app>
    <v-toolbar-title class="text-h5 font-weight-bold">
      {{ props.title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
