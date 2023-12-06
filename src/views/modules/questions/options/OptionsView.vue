<template>
  <v-list-item @click.prevent>
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
        <v-card class="rounded-0 rounded-t py-2" color="purple-darken-3" flat>
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6">
                  Update Options for Question ID:
                  {{ padLeft(props.question.id) }}
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
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { padLeft } from "@/helpers/utils";

import Question from "@/types/Question";

const props = defineProps<{
  index: number;
  question: Question;
}>();

const dialog = ref<boolean>(false);

const close = () => {
  dialog.value = !dialog.value;
};
</script>
