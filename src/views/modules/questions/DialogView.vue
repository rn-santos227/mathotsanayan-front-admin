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
      width="70%"
    >
      <v-card>
        <v-card
          absolute
          class="rounded-0 rounded-t py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Test Question </span>
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
        <v-divider />
        <v-row>
          <v-col>
            <v-tabs v-model="tabs" grow bg-color="purple-darken-3">
              <v-tab value="0"> Questions List </v-tab>
              <v-tab v-if="!props.module.active" value="1">
                Create Question
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
        <v-window v-model="tabs">
          <v-window-item value="0">
            <TableView
              v-bind:questions="props.module.questions"
              v-bind:module="props.module"
              v-bind:index="index"
            />
          </v-window-item>
          <v-window-item v-if="!props.module.active" value="1">
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
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useQuestionsModule().isLoading" />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import CreateView from "./CreateView.vue";
import TableView from "./TableView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import { useQuestionsModule } from "@/store";

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
