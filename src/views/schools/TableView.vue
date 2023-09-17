<template>
  <v-data-table
    class="w-100"
    :items="schools"
    :headers="headers"
    :loading="schoolModule.isLoading"
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
        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td></td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";

import { computed, onMounted } from "vue";
import { useSchoolModule } from "@/store";
import { formatDate } from "@/helpers/utils";
import headers from "@/helpers/headers/header_schools";
import School from "@/types/School";

const schoolModule = useSchoolModule();
const schools = computed<School[]>(() => schoolModule.getSchools);

onMounted(async () => {
  await useSchoolModule().read();
});
</script>
