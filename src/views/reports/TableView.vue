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
  </v-data-table>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useResultModule } from "@/store";
import headers from "@/helpers/headers/header_results";
import Result from "@/types/Result";

const search = ref<string>("");
const resultModule = useResultModule();
const results = computed<Result[]>(() => resultModule.getResults);
</script>
