<template>
  <v-data-table
    class="w-100"
    :items="sections"
    :headers="headers"
    :loading="useSectionModule().isTableLoading"
    item-value="name"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.name }}
        </td>
        <td class="text-left">
          {{ item?.students?.length }}
        </td>
        <td class="text-left">
          {{ getTeacherName(item?.teacher) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:section="item" />
                <DeleteView v-bind:section="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useSectionModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useSectionModule, useSchoolModule, useTeacherModule } from "@/store";
import { getTeacherName } from "@/helpers/instance";

import UpdateView from "./UpdateView.vue";
import DeleteView from "./DeleteView.vue";
import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import headers from "@/helpers/headers/header_sections";
import Section from "@/types/Section";

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

const sectionModule = useSectionModule();
const sections = computed<Section[]>(() => sectionModule.getSections);

onMounted(async () => {
  await useSectionModule().read();
  await useSchoolModule().read();
  await useTeacherModule().read();
});

provide("success", success);
provide("error", error);
</script>
