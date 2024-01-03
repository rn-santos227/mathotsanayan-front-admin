<template>
  <v-card variant="flat">
    <v-row class="mt-1">
      <v-col>
        <GenerationView class="ml-4" />
      </v-col>
      <v-col class="d-flex">
        <v-text-field
          class="align-self-end"
          v-model="search"
          label="Search Result"
          density="compact"
          variant="outlined"
        />
        <FilterView class="ml-4" />
      </v-col>
    </v-row>
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
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useResultModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
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

const currentPage = ref<number>(1);
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

async function onPageChange(newPage: number): Promise<void> {
  currentPage.value = newPage;
  await resultModule.read(newPage);
}

provide("success", success);
provide("error", error);
</script>
