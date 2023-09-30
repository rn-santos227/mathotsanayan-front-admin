<template>
  <v-data-table
    class="w-100"
    :items="props.questions"
    :headers="headers"
    item-value="name"
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
          {{ props.item.raw?.answers.length }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw?.solutions.length }}
        </td>
        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td></td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { formatDate } from "@/helpers/utils";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";

const props = defineProps<{
  questions: Question[];
}>();
</script>
