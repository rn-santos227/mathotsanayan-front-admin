<template>
  <v-card-text class="question-height">
    <form
      class="mx-2 mt-4"
      v-for="(question, index_1) in questions"
      :key="index_1"
    >
      <v-card class="mb-8 pb-2 question-border" elevation="4">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Question # {{ index_1 + 1 }} </span>
              </v-col>
              <v-col class="d-flex">
                <v-spacer />
                <v-btn
                  v-if="questions.length > 1"
                  density="comfortable"
                  variant="outlined"
                  icon="mdi-delete-circle-outline"
                  @click="removeQuestion(index_1)"
                >
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
        <QuestionComponent
          v-model:content="question.content"
          v-model:type="question.type"
          v-model:file="question.file"
          @changeType="changeQuestionType($event, index)"
          ref="validate_questions"
        />
        <v-divider class="border-opacity-100" />
        <v-row class="mx-1">
          <v-col v-if="question.type == 'multiple selection'">
            <v-row>
              <v-col class="mt-4">
                <v-btn
                  color="light-blue-darken-2"
                  prepend-icon="mdi-plus"
                  block
                  @click.prevent="addOption(index_1)"
                >
                  Add Options
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <OptionComponent
                  v-for="(option, index_2) in question.options"
                  v-model:content="option.content"
                  v-model:file="option.file"
                  :index="index_2"
                  :check="checkList(question.options)"
                  :key="index_2"
                  @remove="removeOption(index_1, index_2)"
                  ref="validate_options"
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
                  @click.prevent="addCorrect(index_1)"
                >
                  Add Correct Answers
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <CorrectComponent
                  v-for="(correct, index_4) in question.corrects"
                  v-model:content="correct.content"
                  v-model:solution="correct.solution"
                  v-model:file="correct.file"
                  :index="index_4"
                  :check="checkList(question.corrects)"
                  :key="index_4"
                  @remove="removeCorrect(index_1, index_4)"
                  ref="validate_corrects"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
    </form>
  </v-card-text>
  <v-divider />
  <v-row class="mx-6 my-3">
    <v-col>
      <v-btn
        class="mb-2"
        prepend-icon="mdi-plus"
        color="purple-darken-3"
        block
        @click.prevent="addQuestion"
      >
        Add Question
      </v-btn>
    </v-col>
    <v-col>
      <v-btn class="mb-2" color="success" block @click.prevent="submit">
        Submit
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { inject, ref, reactive } from "vue";

import OptionComponent from "@/components/questions/OptionComponent.vue";
import QuestionComponent from "@/components/questions/QuestionComponent.vue";
import CorrectComponent from "@/components/questions/CorrectComponent.vue";

import { useQuestionModule } from "@/store";
import { useModuleModule } from "@/store";

import Module from "@/types/Module";
import Question from "@/types/Question";
import Option from "@/types/Option";
import Correct from "@/types/Correct";

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

const validate_questions = ref([
  {
    validate: (): boolean => {
      return false;
    },
  },
]);

const validate_corrects = ref([
  {
    validate: (): boolean => {
      return false;
    },
  },
]);

const validate_options = ref([
  {
    validate: (): boolean => {
      return false;
    },
  },
]);

const props = defineProps<{
  module: Module;
  index: number;
}>();

const questions = reactive<Question[]>([
  {
    content: "",
    type: "word problem",
    file: null,
    options: [],
    corrects: [
      {
        content: "",
        solution: "",
        file: null,
      },
    ],
  },
]);

const addQuestion = () => {
  questions.push({
    content: "",
    type: "word problem",
    file: null,
    options: [
      {
        content: "",
        file: null,
      },
    ],
    corrects: [
      {
        content: "",
        solution: "",
        file: null,
      },
    ],
  });
};

const addOption = (index: number) => {
  questions[index].options?.push({
    content: "",
    file: null,
  });
};

const addCorrect = (index: number) => {
  questions[index].corrects?.push({
    content: "",
    solution: "",
    file: null,
  });
};

const checkList = (list: Option[] | Correct[] | null | undefined): boolean => {
  if (list) {
    if (list.length > 1) {
      return true;
    } else return false;
  } else return false;
};

const removeQuestion = (index: number) => {
  questions.splice(index, 1);
};

const removeOption = (index_1: number, index_2: number) => {
  questions[index_1].options?.splice(index_2, 1);
};

const removeCorrect = (index_1: number, index_2: number) => {
  questions[index_1].corrects?.splice(index_2, 1);
};

const changeQuestionType = (type: string, index: number) => {
  if (type === "multiple selection") {
    questions[index].options?.push({
      content: "",
      file: null,
    });
  } else {
    questions[index].options = [];
  }
};

const submit = async () => {
  let errors = false;
  validate_questions.value.forEach((v) => {
    if (v.validate()) {
      errors = true;
    }
  });

  validate_options.value.forEach((v) => {
    if (v.validate()) {
      errors = true;
    }
  });

  validate_corrects.value.forEach((v) => {
    if (v.validate()) {
      errors = true;
    }
  });

  if (errors) return;
  try {
    useQuestionModule()
      .createAll(questions, props.module)
      .then((response) => {
        useModuleModule().setQuestionsModule(props.index, response);
        success.value.show("Question has been successfully added.");
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};
</script>

<style scoped>
.question-border {
  border: 2px solid #6a1b9a;
}

.question-height {
  height: calc(100vh - 300px);
  overflow-y: auto;
}
</style>
