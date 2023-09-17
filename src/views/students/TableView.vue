<template>
  <v-data-table
    class="w-100"
    :items="students"
    :headers="headers"
    :loading="studentModule.isLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.fullname }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw.email }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw?.school.name }}
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
import { useStudentModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import headers from "@/helpers/headers/header_students";
import Student from "@/types/Student";

const studentModule = useStudentModule();
const students = computed<Student[]>(() => studentModule.getStudents);

onMounted(async () => {
  await useStudentModule().read();
});
</script>
