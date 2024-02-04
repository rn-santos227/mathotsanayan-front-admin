<template>
  <v-card-text>
    <div v-if="focusPage === 'students-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_016.png')" />

      <p class="ma-6">
        {{ docs[1] }}
      </p>

      <p class="ma-6">
        {{ docs[2] }}
      </p>
    </div>

    <div v-if="focusPage === 'students-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[3] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_017.png')" />

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

    <div v-if="focusPage === 'students-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Creation
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_018.png')" />

      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <p class="ma-6">
        {{ docs[9] }}
      </p>
    </div>

    <div v-if="focusPage === 'students-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Update
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[10] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_019.png')" />

      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <p class="ma-6">
        {{ docs[12] }}
      </p>
    </div>

    <div v-if="focusPage === 'students-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Students Deletion
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_students";

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
