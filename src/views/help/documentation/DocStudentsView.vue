<template>
  <v-card-text>
    <div v-if="focusPage === 'students-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Page
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'students-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Filter Search
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'students-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Creation
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'students-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Update
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
