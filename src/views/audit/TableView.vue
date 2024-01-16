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
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { useAuditModule } from "@/store/modules/audit_module";

import header from "@/helpers/headers/header_audit";
import Audit from "@/types/Audit";

const search = ref<string>("");
const auditModule = useAuditModule();
const audit = computed<Audit[]>(() => auditModule.getAudit);

let initialCallMade = false;

onMounted(async () => {
  if (initialCallMade) return;
  await useAuditModule().read();
  initialCallMade = true;
});

watch(
  () => useAuditModule().page.current_page,
  async () => {
    if (!initialCallMade) return;
    await auditModule.read(useAuditModule().page.current_page);
  }
);

const resetSearch = async () => {
  await useAuditModule().read();
};
</script>
