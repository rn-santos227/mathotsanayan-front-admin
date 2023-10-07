<template>
  <div class="mx-8">
    <form v-for="(question, index_1) in questions" :key="index_1">
      <v-card class="mb-8" elevation="4">
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
              :items="types"
              accept="image/*"
              label="Question Attachment"
              density="compact"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-divider />
        <v-row>
          <v-col v-if="question.type == 'multiple selection'">
            <v-card
              class="ma-4"
              variant="outlined"
              v-for="(option, index_2) in question.options"
              :key="index_2"
            >
              <v-card
                class="rounded-0 rounded-t mb-6 py-2"
                color="purple-darken-3"
                flat
              >
                <v-card-title>
                  <v-row>
                    <v-col>
                      <span class="text-h6"> Option # {{ index_2 + 1 }} </span>
                    </v-col>
                    <v-col class="d-flex">
                      <v-spacer />
                      <v-btn
                        v-if="checkList(question.options)"
                        density="comfortable"
                        variant="outlined"
                        icon="mdi-delete-circle-outline"
                      >
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-title>
              </v-card>
            </v-card>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="mx-4 mt-4">
                <v-btn
                  color="light-blue-darken-2"
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
                  class="mx-4 mb-4"
                  variant="outlined"
                  v-for="(solution, index_3) in question.solutions"
                  :key="index_3"
                >
                  <v-card
                    class="rounded-0 rounded-t mb-6 py-2"
                    color="purple-darken-3"
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
                          >
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-row>
              <v-col class="mx-4 mt-4">
                <v-btn
                  color="light-blue-darken-2"
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
                  class="mx-4 mb-4"
                  variant="outlined"
                  v-for="(correct, index_4) in question.corrects"
                  :key="index_4"
                >
                  <v-card
                    class="rounded-0 rounded-t mb-6 py-2"
                    color="purple-darken-3"
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
                          >
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-card-title>
                  </v-card>
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
          color="light-blue-darken-3"
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

const submit = async () => {
  //
};
</script>
