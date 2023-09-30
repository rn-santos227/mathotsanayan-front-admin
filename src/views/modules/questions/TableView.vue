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
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";

const props = defineProps<{
  questions: Question[];
}>();
</script>
