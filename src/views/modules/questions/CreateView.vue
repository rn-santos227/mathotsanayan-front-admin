<template>
  <form v-for="(question, index) in questions" :key="index">
    <v-row class="my-1">
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
</script>
