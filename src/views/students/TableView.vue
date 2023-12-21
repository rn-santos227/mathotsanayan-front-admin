<template>
  <v-card>
    <v-card-actions>
      <v-spacer />
      <v-text-field
        v-model="search"
        label="Search Student"
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
      />
    </v-card-actions>
  </v-card>
  <v-data-table
    class="w-100"
    :search="search"
    :items="students"
    :headers="headers"
    :loading="studentModule.isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-xs-left">
          {{ item.full_name }}
        </td>
        <td class="text-xs-left">
          {{ item.email }}
        </td>
        <td class="text-xs-left">
          {{ getSchoolName(item?.school) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:student="item" />
                <DeleteView v-bind:student="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useStudentModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import {
  useStudentModule,
  useCourseModule,
  useSchoolModule,
  useSectionModule,
} from "@/store";
import { getSchoolName } from "@/helpers/instance";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";
import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_students";
import Student from "@/types/Student";

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

const search = ref<string>("");
const studentModule = useStudentModule();
const students = computed<Student[]>(() => studentModule.getStudents);

onMounted(async () => {
  await useStudentModule().read();
  await useCourseModule().read();
  await useSchoolModule().read();
  await useSectionModule().read();
});

provide("success", success);
provide("error", error);
</script>
