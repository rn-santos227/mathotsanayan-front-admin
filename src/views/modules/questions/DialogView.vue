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
      <v-card>
        <v-card
          absolute
          class="rounded-0 rounded-t py-2"
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
            <v-divider class="mt-4" />
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
        <v-window v-model="tabs">
          <v-window-item value="0">
            <TableView
              v-bind:questions="props.module.questions"
              v-bind:index="index"
            />
          </v-window-item>
          <v-window-item value="1">
            <CreateView
              v-bind:module="props.module"
              v-bind:index="index"
              @resetTab="resetTab"
            />
          </v-window-item>
        </v-window>
      </v-card>
    </v-dialog>
  </v-list-item>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useQuestionModule().isLoading" />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import CreateView from "./CreateView.vue";
import TableView from "./TableView.vue";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import { useQuestionModule } from "@/store";

import Module from "@/types/Module";

const tabs = ref<number>(0);
const dialog = ref<boolean>(false);
const props = defineProps<{
  module: Module;
  index: number;
}>();

const success = ref({
  show: (message: string) => {
    return message;
  },
});

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const close = () => {
  dialog.value = !dialog.value;
};

const resetTab = () => {
  tabs.value = 0;
};

provide("success", success);
provide("error", error);
</script>
