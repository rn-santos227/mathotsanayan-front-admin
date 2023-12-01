<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-checkbox-marked-circle-outline"></v-icon> Test
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card class="question-height">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6">
                  Test Question ID: {{ padLeft(state.id) }}
                </span>
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
          <v-row>
            <v-col class="mx-4">
              <div class="text-body-1">{{ props.question.content }}</div>
            </v-col>
          </v-row>
          <v-row v-if="props.question.file">
            <v-col class="d-flex justify-center align-center">
              <ImageComponent
                v-bind:id="props.question.id"
                v-bind:file="props.question.file"
                v-bind:height="300"
                v-bind:width="300"
                v-model:trigger="dialog"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { padLeft } from "@/helpers/utils";

import ImageComponent from "@/components/ImageComponent.vue";

import Question from "@/types/Question";

const dialog = ref<boolean>(false);

const props = defineProps<{
  question: Question;
}>();
const state = reactive<Question>({ ...props.question });

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
