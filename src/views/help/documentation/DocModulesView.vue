<template>
  <v-card-text>
    <div v-if="focusPage === 'module-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Table
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Filter Search
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Creation
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Delete
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Table
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Create
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Update
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Delete
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-test'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Test
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
