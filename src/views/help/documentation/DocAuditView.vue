<template>
  <v-card-text>
    <div v-if="focusPage === 'audit-main'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Audit Trail Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_052.png')"
      />

      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <p class="ma-6">
        {{ docs[3] }}
      </p>
    </div>

    <div v-if="focusPage === 'audit-search'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Audit Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <p class="ma-6">
        {{ docs[8] }}
      </p>
    </div>

    <div v-if="focusPage === 'audit-details'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Audit Details
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[9] }}
      </p>
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_audit";

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
