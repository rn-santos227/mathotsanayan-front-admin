<template>
  <v-data-table
    class="w-100"
    :items="sections"
    :headers="headers"
    :loading="sectionModule.isLoading"
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
          {{ props.item.raw.created_at }}
        </td>
        <td></td>
      </tr>
    </template>
  </v-data-table>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";

import { computed } from "vue";
import { useSectionModule } from "@/store/modules/sections_module";
import headers from "@/helpers/headers/header_sections";
import Section from "@/types/Section";

const sectionModule = useSectionModule();
const sections = computed<Section[]>(() => sectionModule.getSections);
</script>
