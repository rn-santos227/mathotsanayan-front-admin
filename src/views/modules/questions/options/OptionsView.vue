<template>
  <v-list-item @click.prevent v-if="props.question.type !== 'word problems'">
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-format-list-checks"></v-icon> Options
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="60%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t py-2"
          color="purple-darken-3"
          variant="flat"
        >
          <v-card-actions class="mx-4 mb-2">
            <span class="text-h6">
              Update Options for Question ID:
              {{ padLeft(props.question.id) }}
            </span>
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
        <v-card-text class="option-height pa-8">
          <CreateView
            v-bind:question="props.question"
            v-bind:index="props.index"
            @close="close"
          />
          <UpdateView
            class="my-4"
            v-for="(option, index) in props.question.options"
            v-bind:key="index"
            v-bind:question="props.question"
            v-bind:option="option"
            v-bind:index="props.index"
            @close="close"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { padLeft } from "@/helpers/utils";

import CreateView from "./CreateView.vue";
import UpdateView from "./UpdateView.vue";

import Question from "@/types/Question";

const props = defineProps<{
  index: number;
  question: Question;
}>();

watch(
  () => props.question.options,
  () => {
    return props.question.options;
  }
);

const dialog = ref<boolean>(false);

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.option-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
