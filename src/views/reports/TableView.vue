<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-col>
          <GenerationView />
        </v-col>
        <v-col class="d-flex">
          <v-text-field
            class="mr-4"
            v-model="search"
            label="Search Result"
            density="compact"
            variant="outlined"
          />
          <FilterView />
        </v-col>
      </v-row>
    </v-card>
  </v-card-text>
  <v-divider />
  <v-card-text class="table-height">
    <v-data-table
      class="w-100"
      item-value="name"
      :search="search"
      :items="results"
      :headers="headers"
      :items-per-page="useResultModule().itemsPerPage"
      :loading="useResultModule().isTableLoading"
      :page="useResultModule().currentPage"
      :hide-actions="true"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td class="text-left">
            {{ item.student.full_name }}
          </td>
          <td class="text-left">
            {{ getSectionName(item.student.section) }}
          </td>
          <td class="text-left">
            {{ item.module?.name }}
          </td>
          <td class="text-center">Stage {{ item.module.step }}</td>
          <td class="text-center">
            {{ item.total_score }} /
            {{ item.items }}
          </td>
          <td class="text-left">
            <span
              :class="`font-weight-bold text-${
                evaluateExam(item) === 'Passed' ? 'green' : 'red'
              }`"
            >
              {{ evaluateExam(item) }}</span
            >
          </td>
          <td class="text-center">
            {{ secondsToMinutes(item.timer) }}
          </td>
          <td class="text-left">
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent">
                <v-list density="compact" variant="plain">
                  <ResultView v-bind:result="item" />
                  <InvalidateView v-bind:result="item" />
                </v-list>
              </v-menu>
            </v-btn>
          </td>
        </tr>
      </template>
      <template v-slot:bottom> </template>
    </v-data-table>
  </v-card-text>
  <v-divider />
  <v-card-actions class="mt-auto pa-4 mb-4">
    <v-spacer />
    <v-pagination
      color="purple-darken-3"
      v-model="useResultModule().currentPage"
      :length="useResultModule().totalPages"
      :total-visible="7"
    />
  </v-card-actions>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useResultModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import { useResultModule } from "@/store";
import { evaluateExam, secondsToMinutes } from "@/helpers/evaluation";
import { getSectionName } from "@/helpers/instance";

import FilterView from "./FilterView.vue";
import GenerationView from "./GenerationView.vue";
import InvalidateView from "./InvalidateView.vue";
import ResultView from "./result/DialogView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_results";
import Result from "@/types/Result";

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

const search = ref<string>("");
const resultModule = useResultModule();
const results = computed<Result[]>(() => resultModule.getResults);

onMounted(async () => {
  await useResultModule().read();
});

watch(
  () => useResultModule().currentPage,
  async () => {
    await resultModule.read(useResultModule().currentPage);
  }
);

provide("success", success);
provide("error", error);
</script>

<style scoped>
.table-height {
  height: calc(100vh - 250px);
  overflow-y: auto;
}
</style>
