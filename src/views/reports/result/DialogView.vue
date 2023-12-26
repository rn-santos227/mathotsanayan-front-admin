<template>
  <v-btn
    block
    color="purple-darken-3"
    variant="outlined"
    prepend-icon="mdi-magnify"
  >
    View Details
    <v-dialog class="ma-auto" persistent v-model="dialog" activator="parent">
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Examination Result </span>
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

import Result from "@/types/Result";

const dialog = ref<boolean>(false);
const props = defineProps<{
  result: Result;
}>();

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.answers-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
