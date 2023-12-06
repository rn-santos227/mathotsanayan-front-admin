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
        <v-card-text class="question-height">
          <form class="mx-2">
            <QuestionComponent
              v-model:content="state.content"
              v-model:type="state.type"
              v-model:file="state.file"
              @changeType="changeQuestionType($event)"
              ref="validate"
            />
            <v-divider class="border-opacity-100" />
            <v-row class="mx-1">
              <v-col
                v-if="
                  state.type == 'multiple selection' ||
                  state.type == 'single correct'
                "
              >
                <v-row>
                  <v-col class="mt-4">
                    <v-btn
                      color="light-blue-darken-2"
                      prepend-icon="mdi-plus"
                      block
                      @click.prevent="addOption()"
                      ref="validate"
                    >
                      Add Options
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <OptionComponent
                      v-for="(option, index_1) in state.options"
                      v-model:content="option.content"
                      v-model:file="option.file"
                      :index="index_1"
                      :check="checkList(state.options)"
                      :key="index_1"
                      @remove="removeOption(index_1)"
                      ref="validate"
                    />
                  </v-col>
                </v-row>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="mt-4">
                    <v-btn
                      color="teal-darken-2"
                      prepend-icon="mdi-plus"
                      block
                      @click.prevent="addCorrect()"
                    >
                      Add Correct Answers
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <CorrectComponent
                      v-for="(correct, index_2) in state.corrects"
                      v-model:content="correct.content"
                      v-model:solution="correct.solution"
                      v-model:file="correct.file"
                      :index="index_2"
                      :check="checkList(state.corrects)"
                      :key="index_2"
                      @remove="removeCorrect(index_2)"
                      ref="validate"
                    />
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </form>
        </v-card-text>
        <v-divider />
        <v-row class="mx-6 my-3">
          <v-col>
            <v-btn
              class="mb-2"
              @click.prevent="resetForm"
              prepend-icon="mdi-plus"
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

import OptionComponent from "@/components/questions/OptionComponent.vue";
import QuestionComponent from "@/components/questions/QuestionComponent.vue";
import CorrectComponent from "@/components/questions/CorrectComponent.vue";

import Question from "@/types/Question";
import Option from "@/types/Option";
import Correct from "@/types/Correct";
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

const validate = ref([
  {
    validate: (): boolean => {
      return false;
    },
    reset: () => {
      return null;
    },
  },
]);

const props = defineProps<{
  index: number;
  question: Question;
}>();

const state = reactive<Question>({ ...props.question });

const close = () => {
  dialog.value = !dialog.value;
};

const checkList = (list: Option[] | Correct[] | null | undefined): boolean => {
  if (list) {
    if (list.length > 1) {
      return true;
    } else return false;
  } else return false;
};

const addOption = () => {
  state.options?.push({
    content: "",
    has_file: 0,
    file: null,
  });
};

const addCorrect = () => {
  state.corrects?.push({
    content: "",
    solution: "",
    has_file: 0,
    file: null,
  });
};

const removeOption = (index: number) => {
  state.options?.splice(index, 1);
};

const removeCorrect = (index: number) => {
  state.corrects?.splice(index, 1);
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
  validate.value.forEach((v) => {
    v.reset();
  });
};

const submit = async () => {
  let errors = false;
  validate.value.forEach((v) => {
    if (v.validate()) {
      errors = true;
    }
  });
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
  height: calc(100vh - 250px);
  overflow-y: auto;
}
</style>
