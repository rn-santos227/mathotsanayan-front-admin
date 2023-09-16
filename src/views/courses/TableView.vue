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
          {{ props.item.raw.contact_number }}
        </td>
        <td></td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";

import { computed } from "vue";
import { useCourseModule } from "@/store";
import headers from "@/helpers/headers/header_schools";
import Course from "@/types/Course";

const courseModule = useCourseModule();
const courses = computed<Course[]>(() => courseModule.getCourses);
</script>
