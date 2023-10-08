<template>
  <div class="mx-8">
    <form v-for="(question, index_1) in questions" :key="index_1">
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
                  v-model:type="option.type"
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
                <v-card
                  class="mx-4 mb-4 outlined-border-solutions"
                  variant="outlined"
                  v-for="(solution, index_3) in question.solutions"
                  :key="index_3"
                >
                  <v-card
                    class="rounded-0 rounded-t mb-6 py-2"
                    color="cyan-darken-2"
                    flat
                  >
                    <v-card-title>
                      <v-row>
                        <v-col>
                          <span class="text-h6">
                            Solution # {{ index_3 + 1 }}
                          </span>
                        </v-col>
                        <v-col class="d-flex">
                          <v-spacer />
                          <v-btn
                            v-if="checkList(question.solutions)"
                            density="comfortable"
                            variant="outlined"
                            icon="mdi-delete-circle-outline"
                            @click="removeSolution(index_1, index_3)"
                          >
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
                  <v-card-text class="ma-4">
                    <v-row>
                      <v-text-field
                        v-model="solution.content"
                        label="Solution Content"
                        density="compact"
                        variant="outlined"
                      />
                    </v-row>
                    <v-row>
                      <v-text-field
                        v-model="solution.type"
                        label="Solution Type"
                        density="compact"
                        variant="outlined"
                      />
                    </v-row>
                    <v-row>
                      <v-file-input
                        v-model="solution.file"
                        accept="image/*"
                        label="Solution Attachment"
                        density="compact"
                        variant="outlined"
                      />
                    </v-row>
                  </v-card-text>
                </v-card>
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
                <v-card
                  class="mx-4 mb-4 outlined-border-corrects"
                  variant="outlined"
                  v-for="(correct, index_4) in question.corrects"
                  :key="index_4"
                >
                  <v-card
                    class="rounded-0 rounded-t mb-6 py-2"
                    color="teal-darken-2"
                    flat
                  >
                    <v-card-title>
                      <v-row>
                        <v-col>
                          <span class="text-h6">
                            Correct Answer # {{ index_4 + 1 }}
                          </span>
                        </v-col>
                        <v-col class="d-flex">
                          <v-spacer />
                          <v-btn
                            v-if="checkList(question.corrects)"
                            density="comfortable"
                            variant="outlined"
                            icon="mdi-delete-circle-outline"
                            @click="removeCorrect(index_1, index_4)"
                          >
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
                  <v-card-text class="ma-4">
                    <v-row>
                      <v-text-field
                        v-model="correct.content"
                        label="Correct Answer"
                        density="compact"
                        variant="outlined"
                      />
                    </v-row>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card>
      <v-divider class="my-5" />
    </form>
    <v-row>
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Question from "@/types/Question";
import Option from "@/types/Option";
import Solution from "@/types/Solution";
import Correct from "@/types/Correct";

import OptionComponent from "@/components/questions/OptionComponent.vue";

const types = ref<string[]>(["multiple selection", "word problem"]);
const questions = ref<Question[]>([
  {
    content: "",
    type: "word problem",
    file: [],
    options: [
      {
        content: "",
        type: "",
        file: [],
      },
    ],
    solutions: [
      {
        title: "",
        content: "",
        type: "",
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
  questions.value.push({
    content: "",
    type: "word problem",
    file: [],
    options: [],
    solutions: [
      {
        title: "",
        content: "",
        type: "",
        file: [],
      },
    ],
    corrects: [
      {
        content: "",
      },
    ],
  });
  console.log(questions.value.length);
};

const addOption = (index: number) => {
  questions.value[index].options?.push({
    content: "",
    type: "",
    file: [],
  });
};

const addSolution = (index: number) => {
  questions.value[index].solutions?.push({
    title: "",
    content: "",
    type: "",
    file: [],
  });
};

const addCorrect = (index: number) => {
  questions.value[index].corrects?.push({
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
  questions.value.splice(index, 1);
};

const removeOption = (index_1: number, index_2: number) => {
  questions.value[index_1].options?.splice(index_2, 1);
};

const removeSolution = (index_1: number, index_2: number) => {
  questions.value[index_1].solutions?.splice(index_2, 1);
};

const removeCorrect = (index_1: number, index_2: number) => {
  questions.value[index_1].corrects?.splice(index_2, 1);
};

const submit = async () => {
  console.log(questions.value);
};
</script>

<style scoped>
.outlined-border-solutions {
  border: 2px solid #0097a7;
}

.outlined-border-corrects {
  border: 2px solid #00796b;
}

.question-border {
  border: 2px solid #6a1b9a;
}
</style>
