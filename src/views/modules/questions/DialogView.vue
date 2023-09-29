<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-help"></v-icon> Update
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="80%"
    >
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialog = ref<boolean>(false);
</script>
