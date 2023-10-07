<template>
  <div class="mx-8">
    <form v-for="(question, index) in questions" :key="index">
      <v-card class="mb-8" elevation="4">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Question # {{ index + 1 }} </span>
              </v-col>
              <v-col class="d-flex">
                <v-spacer />
                <v-btn
                  v-if="questions.length > 1"
                  density="comfortable"
                  variant="outlined"
                  icon="mdi-delete-circle-outline"
                  @click="remove(index)"
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
      </v-card>
    </form>
    <v-divider class="my-5" />
    <v-row>
      <v-col>
        <v-btn
          class="mb-2"
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

const types = ref<string[]>(["multiple selection", "word problem"]);
const questions = ref<Question[]>([
  {
    content: "",
    type: "word problem",
    file: [],
    options: [],
    solutions: [],
  },
]);

const addQuestion = () => {
  questions.value.push({
    content: "",
    type: "word problem",
    file: [],
    options: [],
    solutions: [],
  });
  console.log(questions.value.length);
};

const remove = (index: number) => {
  questions.value.splice(index, 1);
};

const submit = async () => {
  //
};
</script>
