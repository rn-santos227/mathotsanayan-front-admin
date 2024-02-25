<template>
  <div>
    <CorrectComponent
      v-model:content="state.content"
      v-model:solution="state.solution"
      v-model:file="state.file"
      v-bind:title="'Create New Correct Answer'"
      :index="index"
      :check="false"
      ref="validate"
    />
    <v-divider class="mb-2"></v-divider>
    <v-btn color="teal-darken-2" block @click.prevent="submit">
      Submit New Correct Answer
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, reactive } from "vue";
import { useQuestionsModule } from "@/store";
import { useCorrectsModule } from "@/store";

import CorrectComponent from "@/components/questions/CorrectComponent.vue";

import Question from "@/types/Question";
import Correct from "@/types/Correct";

const validate = ref({
  validate: (): boolean => {
    return false;
  },
  reset: () => {
    return null;
  },
});

const success = inject("success", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const error = inject("error", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const props = defineProps<{
  question: Question;
  index: number;
}>();

const emit = defineEmits(["close"]);

const state = reactive<Correct>({
  content: "",
  solution: "",
  file: null,
});

const submit = async () => {
  let errors = false;
  if (validate.value.validate()) errors = true;
  if (errors) return;

  try {
    if (props.question.id) {
      await useCorrectsModule()
        .create(state, props.question.id)
        .then((response) => {
          if (response) {
            useQuestionsModule().update(response);
            success.value.show("Correct Answer has been successfully created.");
            emit("close");
          } else {
            error.value.show("The server has not able to process the request.");
          }
        });
    }
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
