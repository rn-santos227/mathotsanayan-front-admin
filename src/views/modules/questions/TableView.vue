<template>
  <v-card-text>
    <v-text-field
      class="mr-4"
      v-model="search"
      label="Question Module"
      density="compact"
      variant="outlined"
    />
  </v-card-text>
  <v-divider />
  <v-card-text class="question-height">
    <v-data-table
      class="w-100"
      item-value="name"
      :search="search"
      :items="table_props.questions"
      :headers="headers"
      :loading="useQuestionsModule().isTableLoading"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-left">
            <ImageComponent
              class="my-4"
              v-bind:id="item.id"
              v-bind:file="item.file"
              v-bind:height="150"
              v-bind:width="150"
              v-model:trigger="item.trigger"
            />
          </td>
          <td class="text-left">
            {{ item.content }}
          </td>
          <td class="text-left">
            {{ item.type }}
          </td>
          <td class="text-left">
            {{ item?.corrects.length }}
          </td>
          <td class="text-left">
            {{ item?.options.length }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent" persistent>
                <v-list density="compact" variant="plain">
                  <TestView v-bind:question="item" />
                  <CorrectsView
                    v-if="!table_props.module.active"
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                  <RemoveImgView
                    v-if="!table_props.module.active && item.file"
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                  <OptionsView
                    v-if="
                      !table_props.module.active && item.type != 'word problem'
                    "
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                  <UpdateView
                    v-if="!table_props.module.active"
                    v-bind:question="item"
                    v-bind:index="table_props.index"
                  />
                  <DeleteView
                    v-if="!table_props.module.active"
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
import { ref } from "vue";
import ImageComponent from "@/components/ImageComponent.vue";

import { useQuestionsModule } from "@/store";

import TestView from "./TestView.vue";
import RemoveImgView from "./RemoveImgView.vue";
import CorrectsView from "./corrects/CorrectsView.vue";
import OptionsView from "./options/OptionsView.vue";
import DeleteView from "./DeleteView.vue";
import UpdateView from "./UpdateView.vue";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";
import Module from "@/types/Module";

const search = ref<string>("");
const table_props = defineProps<{
  index: number;
  module: Module;
  questions?: Question[];
}>();
</script>

<style scoped>
.question-height {
  height: calc(100vh - 200px);
  overflow-y: auto;
}
</style>
