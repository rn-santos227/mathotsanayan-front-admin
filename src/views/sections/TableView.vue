<template>
  <v-data-table
    class="w-100"
    :items="sections"
    :headers="headers"
    :loading="sectionModule.isTableLoading"
    item-value="name"
  >
    <template v-slot:item="props">
      <tr>
        <td class="text-xs-left">
          {{ props.item.raw.name }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw.level }}
        </td>
        <td class="text-xs-left">
          {{ props.item.raw?.teacher_id }}
        </td>
        <td class="text-xs-left">
          {{ formatDate(props.item.raw.created_at) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <UpdateView v-bind:section="props.item.raw" />
                <DeleteView v-bind:section="props.item.raw" />
              </v-list>
            </v-menu>
          </v-btn>
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
import { useSectionModule, useSchoolModule, useTeacherModule } from "@/store";
import { formatDate } from "@/helpers/utils";

import headers from "@/helpers/headers/header_sections";
import Section from "@/types/Section";

const sectionModule = useSectionModule();
const sections = computed<Section[]>(() => sectionModule.getSections);

onMounted(async () => {
  await useSectionModule().read();
  await useSchoolModule().read();
  await useTeacherModule().read();
});
</script>
