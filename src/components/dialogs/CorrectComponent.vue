<template>
  <v-dialog v-model="dialog">
    <v-sheet
      class="ma-auto text-center mx-auto"
      elevation="12"
      max-width="550"
      rounded="lg"
      width="100%"
    >
      <v-card class="rounded-0 rounded-t mb-2" color="success" flat>
        <v-card-text class="text-left">
          <span class="text-subtitle-1 font-weight-bold">
            <v-icon class="mr-2" icon="mdi-information-outline"></v-icon>
            System Message
          </span>
        </v-card-text>
      </v-card>
      <v-icon
        class="my-5"
        color="success"
        icon="mdi-check-circle"
        size="112"
      ></v-icon>
      <h2 class="text-h4 mb-6 text-green-darken-4">THE ANSWER IS CORRECT</h2>
      <ImageComponent
        class="mx-auto my-12"
        v-if="url"
        v-bind:id="id"
        v-bind:height="250"
        v-bind:width="250"
        v-bind:file="url"
        v-bind:trigger="dialog"
      />
      <div class="mx-6">
        <span>
          {{ text }}
        </span>
      </div>
      <v-divider class="mb-2 mt-6" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="flat" width="100" color="success" dark @click="confirm">
          Okay
        </v-btn>
      </v-card-actions>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import Correct from "@/types/Correct";
import ImageComponent from "../ImageComponent.vue";
import { ref } from "vue";

const dialog = ref<boolean>(false);
const id = ref<number | undefined>(0);
const text = ref<string>("");
const url = ref<string | File | null>(null);

const confirm = () => {
  dialog.value = false;
};

const show = (correct: Correct) => {
  id.value = correct.id;
  text.value = correct.solution;
  url.value = correct.file;
  dialog.value = true;
};

defineExpose({
  show,
});
</script>
