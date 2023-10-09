<template>
  <v-card-text class="question-height">
    <form
      class="mx-8 mt-4"
      v-for="(question, index_1) in questions"
      :key="index_1"
    >
      <v-card class="mb-8 pb-8 question-border" elevation="4">
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
        <v-row class="my-1 px-12">
          <v-col>
            <v-text-field
              v-model="question.content"
              label="Question Content/Instruction"
              density="compact"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-select
              v-model="question.type"
              :items="types"
              label="Question Type"
              density="compact"
              variant="outlined"
            />
          </v-col>
          <v-col>
            <v-file-input
              v-model="question.file"
              accept="image/*"
              label="Question Attachment"
              density="compact"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-divider class="border-opacity-100" />
        <v-row>
          <v-col v-if="question.type == 'multiple selection'">
            <v-row>
              <v-col class="mx-4 mt-4">
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
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="mx-4 mt-4">
                <v-btn
                  color="cyan-darken-2"
                  prepend-icon="mdi-plus"
                  block
                  @click.prevent="addSolution(index_1)"
                >
                  Add Solutions
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <SolutionComponent
                  v-for="(solution, index_3) in question.solutions"
                  v-model:solution="solution.solution"
                  v-model:file="solution.file"
                  :index="index_3"
                  :check="checkList(question.solutions)"
                  :key="index_3"
                  @remove="removeSolution(index_1, index_3)"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="mx-4 mt-4">
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
                  :index="index_4"
                  :check="checkList(question.corrects)"
                  :key="index_4"
                  @remove="removeCorrect(index_1, index_4)"
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
import { ref, reactive } from "vue";
// import { useVuelidate } from "@vuelidate/core";

import OptionComponent from "@/components/questions/OptionComponent.vue";
import SolutionComponent from "@/components/questions/SolutionComponent.vue";
import CorrectComponent from "@/components/questions/CorrectComponent.vue";

import Module from "@/types/Module";
import Question from "@/types/Question";
import Option from "@/types/Option";
import Solution from "@/types/Solution";
import Correct from "@/types/Correct";

// import rules from "@/helpers/rules/rules_questions";

const props = defineProps<{
  module: Module;
}>();

const types = ref<string[]>(["multiple selection", "word problem"]);
const questions = reactive<Question[]>([
  {
    content: "",
    type: "word problem",
    file: [],
    options: [
      {
        content: "",
        file: [],
      },
    ],
    solutions: [
      {
        solution: "",
        file: [],
      },
    ],
    corrects: [
      {
        content: "",
      },
    ],
  },
]);

const addQuestion = () => {
  questions.push({
    content: "",
    type: "word problem",
    file: [],
    options: [
      {
        content: "",
        file: [],
      },
    ],
    solutions: [
      {
        solution: "",
        file: [],
      },
    ],
    corrects: [
      {
        content: "",
      },
    ],
  });
};

const addOption = (index: number) => {
  questions[index].options?.push({
    content: "",
    file: [],
  });
};

const addSolution = (index: number) => {
  questions[index].solutions?.push({
    solution: "",
    file: [],
  });
};

const addCorrect = (index: number) => {
  questions[index].corrects?.push({
    content: "",
  });
};

const checkList = (
  list: Option[] | Solution[] | Correct[] | null | undefined
): boolean => {
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

const removeSolution = (index_1: number, index_2: number) => {
  questions[index_1].solutions?.splice(index_2, 1);
};

const removeCorrect = (index_1: number, index_2: number) => {
  questions[index_1].corrects?.splice(index_2, 1);
};

const submit = async () => {
  console.log(props.module);
  //
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
