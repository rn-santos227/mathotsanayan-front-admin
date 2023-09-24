<template>
  <v-data-table
    class="w-100"
    :items="students"
    :headers="headers"
    :loading="studentModule.isTableLoading"
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
              <UpdateView v-bind:student="props.item.raw" />
              <DeleteView v-bind:student="props.item.raw" />
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
