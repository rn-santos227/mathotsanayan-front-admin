<template>
  <v-data-table
    class="w-100"
    :items="courses"
    :headers="headers"
    :loading="courseModule.isLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.name }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw.modules?.length }}
        </td>
        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td></td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { VDataTable } from "vuetify/labs/VDataTable";
import { useCourseModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import headers from "@/helpers/headers/header_courses";
import Course from "@/types/Course";

const courseModule = useCourseModule();
const courses = computed<Course[]>(() => courseModule.getCourses);

onMounted(() => {
  useCourseModule().read();
});
</script>
