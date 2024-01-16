<template>
  <v-card-text> </v-card-text>
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref, watch } from "vue";
import { useAuditModule } from "@/store/modules/audit_module";

import Audit from "@/types/Audit";

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
</script>
