<template>
  <v-data-table
    class="w-100"
    :items="teachers"
    :headers="headers"
    :loading="teacherModule.isTableLoading"
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
        <td class="text-xs-left">
          {{ formatDate(item.created_at) }}
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
  </v-data-table>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useSchoolModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useTeacherModule, useSchoolModule } from "@/store";
import { formatDate } from "@/helpers/utils";
import { getSchoolName } from "@/helpers/instance";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

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

import headers from "@/helpers/headers/header_teachers";
import Teacher from "@/types/Teacher";

const teacherModule = useTeacherModule();
const teachers = computed<Teacher[]>(() => teacherModule.getTeachers);

onMounted(async () => {
  await useTeacherModule().read();
  await useSchoolModule().read();
});

provide("success", success);
provide("error", error);
</script>
