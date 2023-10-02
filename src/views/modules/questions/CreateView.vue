<template>
  <form v-for="(question, index) in questions" :key="index">
    <v-row>
      <v-col>
        <v-text-field
          class="mx-4"
          v-model="question.content"
          label="Question Content/Instruction"
          density="compact"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="question.type"
          :items="types"
          label="Question Type"
          density="compact"
          variant="outlined"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-file-input
          v-model="question.file"
          :items="types"
          label="Question Attachment"
          density="compact"
          variant="outlined"
        />
      </v-col>
    </v-row>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Question from "@/types/Question";

const types = ref<string[]>(["multiple", "word"]);
const questions = ref<Question[]>([
  {
    content: "",
    type: "word",
    file: [],
    options: [],
    solutions: [],
  },
]);
</script>
