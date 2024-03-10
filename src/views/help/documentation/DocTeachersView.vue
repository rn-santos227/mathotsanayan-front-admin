<template>
  <v-card-text>
    <div v-if="focusPage === 'teachers-main'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Teachers Manager
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

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

    <div v-if="focusPage === 'teachers-search'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Teachers Filter Search
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
    </div>

    <div v-if="focusPage === 'teachers-create'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Teachers Creation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <p class="ma-6">
        {{ docs[9] }}
      </p>

      <p class="ma-6">
        {{ docs[10] }}
      </p>
    </div>

    <div v-if="focusPage === 'teachers-update'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Teachers Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <p class="ma-6">
        {{ docs[12] }}
      </p>

      <p class="ma-6">
        {{ docs[13] }}
      </p>

      <p class="ma-6">
        {{ docs[14] }}
      </p>

      <p class="ma-6">
        {{ docs[15] }}
      </p>
    </div>

    <div v-if="focusPage === 'teachers-delete'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Teachers Deletion
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_teachers";

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
