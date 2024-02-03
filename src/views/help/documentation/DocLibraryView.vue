<template>
  <v-card-text>
    <div v-if="focusPage === 'library-accounts'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Account
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>
    </div>

    <div v-if="focusPage === 'library-admins'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Admins
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-courses'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Courses
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-schools'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Schools
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-sections'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Sections
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'library-subjects'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Library Subjects
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
