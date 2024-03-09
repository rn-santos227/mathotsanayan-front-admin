<template>
  <v-card-text>
    <div v-if="focusPage === 'reports-main'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Examination Report Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_021.png')" />

      <p class="ma-6">
        {{ docs[1] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-search'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Report Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_022.png')" />

      <p class="ma-6">
        {{ docs[3] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-generate'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Report Generation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_045.png')" />

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <p class="ma-6">
        {{ docs[6] }}
      </p>
    </div>

    <div v-if="focusPage === 'reports-details'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Report Details
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-answers'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Report Answer Table
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'reports-invalidate'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Invalidating a Result
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_reports";

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
