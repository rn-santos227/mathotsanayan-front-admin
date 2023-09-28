<template>
  <v-data-table
    class="w-100"
    :items="courses"
    :headers="headers"
    :loading="courseModule.isTableLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.name }}
        </td>

        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:course="props.item.raw" />
                <DeleteView v-bind:course="props.item.raw" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useCourseModule().isLoading" />
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import { computed, onMounted, provide, ref } from "vue";
import { useCourseModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import headers from "@/helpers/headers/header_courses";
import Course from "@/types/Course";

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

const courseModule = useCourseModule();
const courses = computed<Course[]>(() => courseModule.getCourses);

onMounted(async () => {
  await useCourseModule().read();
});

provide("success", success);
provide("error", error);
</script>
