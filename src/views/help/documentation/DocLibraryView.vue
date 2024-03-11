<template>
  <v-card-text>
    <div v-if="focusPage === 'library-accounts'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Account
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

      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <p class="ma-6">
        {{ docs[5] }}
      </p>
    </div>

    <div v-if="focusPage === 'library-admins'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Admins
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <p class="ma-6">
        {{ docs[9] }}
      </p>
    </div>

    <div v-if="focusPage === 'library-courses'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Courses
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-schools'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Schools
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-sections'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Sections
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-subjects'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Subjects
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_library";

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
