<template>
  <v-card-text> </v-card-text>
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

</script>
