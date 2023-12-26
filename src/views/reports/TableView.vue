<template>
  <v-card variant="flat">
    <v-card-actions>
      <v-spacer />
      <v-text-field
        v-model="search"
        label="Search Result"
        density="compact"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
      />
    </v-card-actions>
  </v-card>
  <v-divider />
  <v-data-table
    class="w-100"
    :search="search"
    :items="results"
    :headers="headers"
    :loading="useResultModule().isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.student.full_name }}
        </td>
        <td class="text-left"></td>
        <td class="text-left">
          {{ item.module?.name }}
        </td>
        <td class="text-center">Stage {{ item.module.step }}</td>
        <td class="text-center">
          {{ item.total_score }} /
          {{ item.items }}
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useResultModule } from "@/store";

import headers from "@/helpers/headers/header_results";
import Result from "@/types/Result";

const search = ref<string>("");
const resultModule = useResultModule();
const results = computed<Result[]>(() => resultModule.getResults);

onMounted(async () => {
  await useResultModule().read();
});
</script>
