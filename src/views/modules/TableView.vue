<template>
  <v-card-text>
    <v-card variant="flat">
      <v-row class="mt-1">
        <v-spacer />
        <v-col class="d-flex">
          <v-text-field
            class="mr-4"
            v-model="search"
            label="Search Module"
            density="compact"
            variant="outlined"
          />
          <FilterView />
          <v-btn
            class="ml-4"
            variant="outlined"
            color="purple-darken-3"
            prepend-icon="mdi-refresh"
            height="40"
            width="180"
            @click.prevent="resetSearch"
          >
            Reset List
          </v-btn>
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
      :items="modules"
      :headers="headers"
      :items-per-page="useModuleModule().page.per_page"
      :loading="useModuleModule().isTableLoading"
      :page="useModuleModule().page.current_page"
    >
      <template v-slot:item="{ item, index }">
        <tr>
          <td class="text-xs-left">
            {{ item.name }}
          </td>
          <td class="text-xs-left">
            {{ item?.questions?.length }}
          </td>
          <td class="text-xs-left">
            {{ getSubjectName(item?.subject) }}
          </td>
          <td>
            <v-btn block color="purple-darken-3" variant="outlined">
              <v-icon size="large">mdi-dots-horizontal</v-icon>
              <v-menu activator="parent">
                <v-list density="compact" variant="plain">
                  <QuestionView v-bind:module="item" v-bind:index="index" />
                  <UpdateView v-bind:module="item" />
                  <DeleteView v-bind:module="item" />
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
  <v-card-actions class="mt-auto pa-4 mb-12">
    <v-spacer />
    <span class="text-body-2">
      {{ useModuleModule().page.from }}-{{ useModuleModule().page.to }} of
      {{ useModuleModule().page.total }}
    </span>
    <v-pagination
      color="purple-darken-3"
      v-model="useModuleModule().page.current_page"
      :length="useModuleModule().page.last_page"
      :total-visible="7"
    />
  </v-card-actions>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useModuleModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import { useModuleModule, useSubjectModule } from "@/store";
import { getSubjectName } from "@/helpers/instance";

import FilterView from "./FilterView.vue";
import QuestionView from "./questions/DialogView.vue";
import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_modules";
import Module from "@/types/Module";

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
const moduleModule = useModuleModule();
const modules = computed<Module[]>(() => moduleModule.getModules);

let initialCallMade = false;

onMounted(async () => {
  if (initialCallMade) return;
  await useModuleModule().read();
  await useSubjectModule().read();
  initialCallMade = true;
});

watch(
  () => useModuleModule().page.current_page,
  async () => {
    if (!initialCallMade) return;
    await moduleModule.read(useModuleModule().page.current_page);
  }
);

const resetSearch = async () => {
  await useModuleModule().read();
};

provide("success", success);
provide("error", error);
</script>

<style scoped>
.table-height {
  height: calc(100vh - 250px);
  overflow-y: auto;
}
</style>
