<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-spacer />
        <v-col class="d-flex">
          <v-text-field
            class="mr-4"
            v-model="search"
            label="Search Student"
            density="compact"
            variant="outlined"
          />
          <FilterView />
          <v-btn
            class="ml-4"
            variant="outlined"
            color="purple-darken-3"
            prepend-icon="mdi-refresh"
            height="40"
            width="180"
            @click.prevent="resetSearch"
          >
            Reset List
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-card-text>
  <v-divider />
  <v-card-text class="table-height">
    <v-data-table
      class="w-100"
      :search="search"
      :items="students"
      :headers="headers"
      :loading="useStudentModule().isTableLoading"
      item-value="name"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-left">
            {{ item.full_name }}
          </td>
          <td class="text-left">
            {{ getSectionName(item.section) }}
          </td>
          <td class="text-left">
            {{ item.email }}
          </td>
          <td class="text-left">
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
      <template v-slot:bottom> </template>
    </v-data-table>
  </v-card-text>
  <v-divider />
  <v-card-actions class="mt-auto pa-4 mb-12">
    <v-spacer />
    <v-pagination
      color="purple-darken-3"
      v-model="useStudentModule().currentPage"
      :length="useStudentModule().totalPages"
      :total-visible="7"
    />
  </v-card-actions>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useStudentModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import {
  useStudentModule,
  useCourseModule,
  useSchoolModule,
  useSectionModule,
} from "@/store";
import { getSchoolName, getSectionName } from "@/helpers/instance";

import FilterView from "./FilterView.vue";
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

watch(
  () => useStudentModule().currentPage,
  async () => {
    await studentModule.read(useStudentModule().currentPage);
  }
);

const resetSearch = async () => {
  await useStudentModule().read();
};

provide("success", success);
provide("error", error);
</script>

<style scoped>
.table-height {
  height: calc(100vh - 250px);
  overflow-y: auto;
}
</style>
