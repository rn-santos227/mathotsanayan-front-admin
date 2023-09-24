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
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                block
                color="purple-darken-3"
                variant="outlined"
              >
                <v-icon size="large">mdi-dots-horizontal</v-icon></v-btn
              >
            </template>
            <v-list density="compact" variant="plain">
              <UpdateView v-bind:course="props.item.raw" />
              <DeleteView v-bind:course="props.item.raw" />
            </v-list>
          </v-menu>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";
import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import { computed, onMounted } from "vue";
import { useCourseModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import headers from "@/helpers/headers/header_courses";
import Course from "@/types/Course";

const courseModule = useCourseModule();
const courses = computed<Course[]>(() => courseModule.getCourses);

onMounted(async () => {
  await useCourseModule().read();
});
</script>
