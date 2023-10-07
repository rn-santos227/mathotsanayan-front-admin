<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-help-circle-outline"></v-icon> Questions
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      scrollable
      v-model="dialog"
      activator="parent"
      width="80%"
    >
      <v-card>
        <v-card
          absolute
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
            <v-divider class="my-4" />
            <v-row>
              <v-col>
                <v-tabs v-model="tabs" fixed-tabs bg-color="purple-darken-3">
                  <v-tab value="0"> Questions List </v-tab>
                  <v-tab value="1"> Create Question </v-tab>
                </v-tabs>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
        <v-card-text class="question-height">
          <v-window v-model="tabs">
            <v-window-item value="0">
              <TableView v-bind:questions="props.module.questions" />
            </v-window-item>
            <v-window-item value="0">
              <CreateView v-bind:questions="props.module.questions" />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CreateView from "./CreateView.vue";
import TableView from "./TableView.vue";

import Module from "@/types/Module";

const tabs = ref<number>(0);
const dialog = ref<boolean>(false);
const props = defineProps<{
  module: Module;
}>();

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style>
.question-height {
  height: 860px;
}
</style>
