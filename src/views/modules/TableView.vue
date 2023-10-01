<template>
  <v-data-table
    class="w-100"
    :items="modules"
    :headers="headers"
    :loading="moduleModule.isTableLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.name }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw.questions.length }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw.subject.name }}
        </td>
        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <QuestionView v-bind:module="props.item.raw" />
                <UpdateView v-bind:module="props.item.raw" />
                <DeleteView v-bind:module="props.item.raw" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useModuleModule().isLoading" />
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { computed, onMounted, provide, ref } from "vue";
import { useModuleModule, useSubjectModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import QuestionView from "./questions/DialogView.vue";
import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";
import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import headers from "@/helpers/headers/header_modules";
import Module from "@/types/Module";

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

const moduleModule = useModuleModule();
const modules = computed<Module[]>(() => moduleModule.getModules);

onMounted(async () => {
  await useModuleModule().read();
  await useSubjectModule().read();
});

provide("success", success);
provide("error", error);
</script>
