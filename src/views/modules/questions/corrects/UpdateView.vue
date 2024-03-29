<template>
  <div>
    <div class="d-flex flex-row">
      <ImageComponent
        class="ma-4 flex-1-0"
        v-bind:id="state.id"
        v-bind:file="state.file"
        v-bind:height="350"
        v-bind:width="350"
        v-model:trigger="trigger"
      />
      <CorrectComponent
        class="flex-1-1-100"
        v-model:content="state.content"
        v-model:file="state.file"
        v-model:solution="state.solution"
        v-bind:title="'Update Answer'"
        :index="index"
        :check="checkCount()"
        @remove="remove"
        ref="validate"
      />
    </div>
    <v-divider class="mb-2" />
    <v-btn color="teal-darken-2" block @click.prevent="submit">
      Submit Update Correct Answer
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, reactive } from "vue";
import { useQuestionsModule } from "@/store";
import { useCorrectsModule } from "@/store";

import ImageComponent from "@/components/ImageComponent.vue";
import CorrectComponent from "@/components/questions/CorrectComponent.vue";

import Question from "@/types/Question";
import Correct from "@/types/Correct";

const trigger = ref<boolean>(false);
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

const emit = defineEmits(["close"]);

const props = defineProps<{
  question: Question;
  correct: Correct;
  index: number;
}>();

const state = reactive<Correct>({ ...props.correct });

const checkCount = (): boolean => {
  return props.question.corrects.length > 1;
};

const submit = async () => {
  let errors = false;
  if (validate.value.validate()) errors = true;
  if (errors) return;

  try {
    await useCorrectsModule()
      .update(state)
      .then((response) => {
        if (response) {
          useQuestionsModule().updateQuestion(response);
          success.value.show("Correct Answer has been successfully updated.");
          emit("close");
        } else {
          error.value.show("The server has not able to process the request.");
        }
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};

const remove = async () => {
  try {
    await useCorrectsModule()
      .delete(state)
      .then((response) => {
        if (response) {
          useQuestionsModule().updateQuestion(response);
          success.value.show("Correct Answer has been successfully removed.");
          emit("close");
        } else {
          error.value.show("The server has not able to process the request.");
        }
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
