<template>
  <v-card-text>
    <v-text-field
      class="mr-4"
      v-model="search"
      label="Question Search"
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
      :items="questions"
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
                    v-if="!module_props.module.active"
                    v-bind:question="item"
                    v-bind:index="module_props.index"
                  />
                  <RemoveImgView
                    v-if="!module_props.module.active && item.file"
                    v-bind:question="item"
                    v-bind:index="module_props.index"
                  />
                  <OptionsView
                    v-if="
                      !module_props.module.active && item.type != 'word problem'
                    "
                    v-bind:question="item"
                    v-bind:index="module_props.index"
                  />
                  <UpdateView
                    v-if="!module_props.module.active"
                    v-bind:question="item"
                    v-bind:index="module_props.index"
                  />
                  <DeleteView
                    v-if="!module_props.module.active"
                    v-bind:question="item"
                    v-bind:index="module_props.index"
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
import { computed, onMounted, ref } from "vue";
import ImageComponent from "@/components/ImageComponent.vue";

import { useQuestionsModule } from "@/store";

import TestView from "./TestView.vue";
import RemoveImgView from "./RemoveImgView.vue";
import CorrectsView from "./corrects/DialogView.vue";
import OptionsView from "./options/DialogView.vue";
import DeleteView from "./DeleteView.vue";
import UpdateView from "./UpdateView.vue";

import Question from "@/types/Question";
import headers from "@/helpers/headers/header_question";
import Module from "@/types/Module";

const search = ref<string>("");
const questionModule = useQuestionsModule();
const questions = computed<Question[]>(() => questionModule.getQuestions);

const module_props = defineProps<{
  index: number;
  module: Module;
  questions?: Question[];
}>();

onMounted(async () => {
  const id = module_props.module.id;
  if (id) {
    await useQuestionsModule().read(id);
  }
});
</script>

<style scoped>
.question-height {
  height: calc(100vh - 280px);
  overflow-y: auto;
}
</style>
