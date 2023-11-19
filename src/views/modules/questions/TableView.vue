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
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { useQuestionModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";

const props = defineProps<{
  questions?: Question[];
}>();
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
}
</style>
