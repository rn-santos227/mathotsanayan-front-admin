<template>
  <v-btn
    density="comfortable"
    icon="mdi-help-circle-outline"
    size="x-large"
    @click="dialog = true"
  />

  <v-dialog class="ma-auto" width="70%" persistent v-model="dialog">
    <v-card>
      <v-card class="rounded-0 rounded-t py-2" color="purple-darken-3" flat>
        <v-card-actions class="mx-4">
          <span class="text-h6"> Help Library </span>
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
      <div class="question-height">
        <v-row no-gutters>
          <v-col cols="2" class="flex-grow-0"> </v-col>
          <v-divider vertical />
          <v-col class="flex-grow-1"> </v-col>
        </v-row>
      </div>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<boolean>(false);
const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
