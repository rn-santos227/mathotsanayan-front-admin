<template>
  <v-data-table
    class="w-100"
    :items="subjects"
    :headers="headers"
    :loading="useSubjectModule().isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-xs-left">
          {{ item.name }}
        </td>
        <td class="text-xs-left">
          {{ item?.modules?.length }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:subject="item" />
                <DeleteView v-bind:subject="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useSubjectModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useSubjectModule } from "@/store";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";
import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_subject";
import Subject from "@/types/Subject";

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

const subjectModule = useSubjectModule();
const subjects = computed<Subject[]>(() => subjectModule.getSubjects);

onMounted(async () => {
  await useSubjectModule().read();
});

provide("success", success);
provide("error", error);
</script>
