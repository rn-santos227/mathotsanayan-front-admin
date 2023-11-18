<template>
  <v-card-text class="question-height">
    <v-data-table
      class="w-100"
      :items="props.questions"
      :headers="headers"
      item-value="name"
      :loading="useQuestionModule().isTableLoading"
    >
      <template v-slot:item="props">
        <tr>
          <td class="text-xs-left">
            {{ props.item.raw.content }}
          </td>
          <td class="text-xs-left">
            {{ props.item.raw.type }}
          </td>
          <td class="text-xs-left">
            {{ props.item.raw?.corrects.length }}
          </td>
          <td class="text-xs-left">
            {{ formatDate(props.item.raw.created_at) }}
          </td>
          <td></td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useQuestionModule().isLoading" />
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { provide, ref } from "vue";
import { useQuestionModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";

const success = ref({
  show: (message: string) => {
    return message;
  },
});

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const props = defineProps<{
  questions?: Question[];
}>();

provide("success", success);
provide("error", error);
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
}
</style>
