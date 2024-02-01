<template>
  <v-card-text>
    <div v-if="focusPage === 'teachers-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Teachers Page
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  page: string;
}>();

const focusPage = ref(props.page);

watch(
  () => props.page,
  (newValue) => {
    focusPage.value = newValue;
  }
);
</script>
