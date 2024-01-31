<template>
  <v-card-text>
    <span class="text-h5 font-weight-bold"> MatHotSanayan Admin Modules </span>
    <v-divider class="my-2" />
    <div v-if="focusPage === 'module-main'"></div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  page: string;
}>();

const focusPage = ref(props.page);
</script>
