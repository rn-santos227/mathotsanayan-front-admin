<template>
  <v-card-text>
    <div v-if="focusPage === 'module-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_002.png')" />

      <p class="ma-6">
        {{ docs[1] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-search'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[2] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_004.png')" />

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

    <div v-if="focusPage === 'module-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Creation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_003.png')" />

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

    <div v-if="focusPage === 'module-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_005.png')" />

      <p class="ma-6">
        {{ docs[12] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Module Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[13] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_006.png')" />

      <p class="ma-6">
        {{ docs[14] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Table
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[15] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_007.png')" />

      <p class="ma-6">
        {{ docs[16] }}
      </p>

      <p class="ma-6">
        {{ docs[17] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-create'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[18] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_008.png')" />

      <p class="ma-6">
        {{ docs[19] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_009.png')" />

      <p class="ma-6">
        {{ docs[20] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-update'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[21] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_012.png')" />

      <p class="ma-6">
        {{ docs[22] }}
      </p>

      <p class="ma-6">
        {{ docs[23] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-delete'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[24] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_013.png')" />

      <p class="ma-6">
        {{ docs[25] }}
      </p>

      <p class="ma-6">
        {{ docs[26] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-test'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Test
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[27] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_015.png')" />
      <v-img class="ma-6" cover :src="require('@/assets/help/doc_014.png')" />

      <p class="ma-6">
        {{ docs[28] }}
      </p>

      <p class="ma-6">
        {{ docs[29] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-options'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Options
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-solutions'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Solutions
      </span>
      <v-divider class="my-2" />
    </div>
  </v-card-text>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import docs from "@/helpers/documentation/doc_modules";
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
