<template>
  <v-card-text>
    <div v-if="focusPage === 'reports-main'">
      <span class="text-h5 font-weight-bold"> MatHotSanayan Admin Report </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Report Filter Search
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-generate'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Report Generation
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-details'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Report Details
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-answers'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Report Answer Table
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-invalidate'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Invalidating a Result
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
