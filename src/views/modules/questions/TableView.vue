<template>
  <v-card-text class="question-height">
    <v-data-table
      class="w-100"
      :items="table_props.questions"
      :headers="headers"
      item-value="name"
      :loading="useQuestionModule().isTableLoading"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-xs-left">
            <ImageComponent
              v-bind:id="item.id"
              v-bind:file="item.file"
              v-model:trigger="item.trigger"
            />
          </td>
          <td class="text-xs-left">
            {{ item.content }}
          </td>
          <td class="text-xs-left">
            {{ item.type }}
          </td>
          <td class="text-xs-left">
            {{ item?.corrects.length }}
          </td>
          <td class="text-xs-left">
            {{ formatDate(item?.created_at) }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent">
                <v-list density="compact" variant="plain">
                  <UpdateView
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                  <DeleteView
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card-text>
</template>

<script setup lang="ts">
import ImageComponent from "@/components/ImageComponent.vue";

import { useQuestionModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import DeleteView from "./DeleteView.vue";
import UpdateView from "./UpdateView.vue";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";

const table_props = defineProps<{
  index: number;
  questions?: Question[];
}>();
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
