<template>
  <v-data-table
    class="w-100"
    :items="teachers"
    :headers="headers"
    :loading="teacherModule.isLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.full_name }}
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
import { useTeacherModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import headers from "@/helpers/headers/header_teachers";
import Teacher from "@/types/Teacher";

const teacherModule = useTeacherModule();
const teachers = computed<Teacher[]>(() => teacherModule.getTeachers);

onMounted(() => {
  useTeacherModule().read();
});
</script>
