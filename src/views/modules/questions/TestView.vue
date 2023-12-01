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
      <v-card height="690">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6">
                  Test Question ID: {{ padLeft(props.question.id) }}
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
        <form>
          <v-card-text class="question-height">
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
                  v-bind:height="350"
                  v-bind:width="350"
                  v-model:trigger="dialog"
                />
              </v-col>
            </v-row>
            <v-row v-if="props.question.type == 'word problem'">
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.content"
                  label="Provide your answer here."
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row v-else-if="props.question.type == 'multiple selection'">
            </v-row>
            <v-row v-else-if="props.question.type == 'single correct'"> </v-row>
          </v-card-text>
          <v-divider class="mb-2 mt-auto" />
          <v-card-actions class="text-right">
            <v-row>
              <v-col>
                <v-btn
                  class="mb-1 mr-4"
                  variant="elevated"
                  width="200"
                  dark
                  color="success"
                  prepend-icon="mdi-check"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { padLeft } from "@/helpers/utils";

import ImageComponent from "@/components/ImageComponent.vue";

import Question from "@/types/Question";
import Answer from "@/types/Answer";

const dialog = ref<boolean>(false);

const props = defineProps<{
  question: Question;
}>();

const state = reactive<Answer>({
  content: "",
  module: props.question.module,
  question: props.question,
});

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.question-height {
  height: calc(100vh - 400px);
  overflow-y: auto;
}
</style>
