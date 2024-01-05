<template>
  <v-card variant="flat">
    <v-row class="mt-1">
      <v-spacer />
      <v-col class="d-flex">
        <v-text-field
          class="align-self-end"
          v-model="search"
          label="Search Teacher"
          density="compact"
          variant="outlined"
        />
        <FilterView class="ml-4" />
      </v-col>
    </v-row>
  </v-card>
  <v-divider />
  <v-data-table
    class="w-100"
    :items="teachers"
    :headers="headers"
    :loading="useSchoolModule().isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.full_name }}
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
                <UpdateView v-bind:teacher="item" />
                <DeleteView v-bind:teacher="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:bottom> </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useSchoolModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useTeacherModule, useSchoolModule } from "@/store";
import { getSchoolName } from "@/helpers/instance";

import FilterView from "./FilterView.vue";
import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_teachers";
import Teacher from "@/types/Teacher";

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
const teacherModule = useTeacherModule();
const teachers = computed<Teacher[]>(() => teacherModule.getTeachers);

onMounted(async () => {
  await useTeacherModule().read();
  await useSchoolModule().read();
});

provide("success", success);
provide("error", error);
</script>
