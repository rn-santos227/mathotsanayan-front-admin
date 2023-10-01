<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-help-circle-outline"></v-icon> Questions
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="80%"
    >
      <v-card height="860">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Module Questions </span>
              </v-col>
              <v-col class="d-flex">
                <v-spacer />
                <v-btn
                  density="comfortable"
                  variant="outlined"
                  icon="mdi-close"
                  @click="close"
                >
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
        <v-card-text>
          <TableView v-bind:questions="props.module.questions" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TableView from "./TableView.vue";

import Module from "@/types/Module";

const dialog = ref<boolean>(false);
const props = defineProps<{
  module: Module;
}>();

const close = () => {
  dialog.value = !dialog.value;
};
</script>
