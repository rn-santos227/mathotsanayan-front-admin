<template>
  <div>
    <OptionComponent
      v-model:content="state.content"
      v-model:file="state.file"
      v-bind:title="'Create New Option'"
      :index="index"
      :check="false"
      ref="validate"
    />
    <v-divider class="mb-2"></v-divider>
    <v-btn color="light-blue-darken-2" block @click.prevent="submit">
      Submit New Option
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, reactive } from "vue";
import { useQuestionsModule } from "@/store";
import { useOptionsModule } from "@/store";

import OptionComponent from "@/components/questions/OptionComponent.vue";

import Question from "@/types/Question";
import Option from "@/types/Option";

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

const state = reactive<Option>({
  content: "",
  file: null,
});

const submit = async () => {
  let errors = false;
  if (validate.value.validate()) errors = true;
  if (errors) return;

  try {
    if (props.question.id) {
      await useOptionsModule()
        .create(state, props.question.id)
        .then((response) => {
          if (response) {
            useQuestionsModule().updateQuestion(response);
            success.value.show("Option has been successfully created.");
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
