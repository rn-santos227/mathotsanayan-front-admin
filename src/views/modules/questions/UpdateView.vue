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
      width="40%"
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
        <v-card-text class="question-height">
          <form class="mx-2">
            <QuestionComponent
              v-model:content="state.content"
              v-model:type="state.type"
              v-model:file="state.file"
              v-bind:row="10"
              @changeType="changeQuestionType($event)"
              ref="validate"
            />
          </form>
        </v-card-text>
        <v-divider />
        <v-row class="mx-6 my-3">
          <v-col>
            <v-btn
              class="mb-2"
              @click.prevent="resetForm"
              color="purple-darken-3"
              block
            >
              Reset
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="mb-2" @click.prevent="submit" color="success" block>
              Submit
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { inject, reactive, ref } from "vue";
import { padLeft } from "@/helpers/utils";

import QuestionComponent from "@/components/questions/QuestionComponent.vue";

import Question from "@/types/Question";
import Option from "@/types/Option";
import { useModuleModule, useQuestionModule } from "@/store";

const dialog = ref<boolean>(false);

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

const validate = ref({
  validate: (): boolean => {
    return false;
  },
  reset: () => {
    return null;
  },
});

const props = defineProps<{
  index: number;
  question: Question;
}>();

const state = reactive<Question>({ ...props.question });

const close = () => {
  dialog.value = !dialog.value;
};

const changeQuestionType = (type: string) => {
  if (type === "multiple selection" || type === "single correct") {
    const _options = [] as Option[];
    _options.push({
      content: "",
      has_file: 0,
      file: null,
    });
    state.options = _options;
  } else {
    state.options = [];
  }
};

const resetForm = () => {
  state.content = props.question.content;
  state.type = props.question.type;
  state.file = props.question.file;
  state.options = props.question.options;
  state.corrects = props.question.corrects;
  validate.value.reset();
};

const submit = async () => {
  let errors = false;
  if (validate.value.validate()) errors = true;
  if (errors) return;
  try {
    useQuestionModule()
      .update(state)
      .then((response) => {
        const _question = response;
        if (_question) {
          useModuleModule().updateQuestionModule(props.index, _question);
          success.value.show("Question has been successfully updated.");
          close();
        }
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};
</script>

<style scoped>
.question-height {
  height: calc(100vh - 450px);
  overflow-y: auto;
}
</style>
