<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-update"></v-icon> Update
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
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6">
                  Update Question ID: {{ padLeft(state.id) }}
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
        <form class="mx-2">
          <v-card-text class="question-height"> </v-card-text>
          <v-divider />
          <v-row class="mx-6 my-3">
            <v-col>
              <v-btn
                class="mb-2"
                prepend-icon="mdi-plus"
                color="purple-darken-3"
                block
              >
                Reset
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mb-2" color="success" block> Submit </v-btn>
            </v-col>
          </v-row>
        </form>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import Question from "@/types/Question";
import { padLeft } from "@/helpers/utils";

const dialog = ref<boolean>(false);

const props = defineProps<{
  index: number;
  question: Question;
}>();

const state = reactive<Question>({ ...props.question });

const close = () => {
  dialog.value = !dialog.value;
};
</script>

<style scoped>
.question-height {
  height: calc(100vh - 250px);
}
</style>
