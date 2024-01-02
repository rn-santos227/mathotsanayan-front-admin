<template>
  <v-btn variant="outlined" prepend-icon="mdi-magnify">
    Filter Search
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Create New Module </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";
const dialog = ref<boolean>(false);

const close = () => {
  dialog.value = !dialog.value;
};
</script>
