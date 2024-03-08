<template>
  <v-card-text>
    <div v-if="focusPage === 'module-main'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Modules Manager Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[0] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_002.png')" />

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

    <div v-if="focusPage === 'module-search'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Modules Filter Search
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_004.png')" />

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <p class="ma-6">
        {{ docs[7] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-create'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Module Creation
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_003.png')" />

      <p class="ma-6">
        {{ docs[9] }}
      </p>

      <p class="ma-6">
        {{ docs[10] }}
      </p>

      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <p class="ma-6">
        {{ docs[12] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-update'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Modules Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[13] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_005.png')" />

      <p class="ma-6">
        {{ docs[14] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-delete'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Module Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[15] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_006.png')" />

      <p class="ma-6">
        {{ docs[16] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Management Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[17] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_007.png')" />

      <p class="ma-6">
        {{ docs[18] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-create'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Create
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[19] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_008.png')" />

      <p class="ma-6">
        {{ docs[20] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_009.png')" />

      <p class="ma-6">
        {{ docs[21] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-update'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Update
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[22] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_012.png')" />

      <p class="ma-6">
        {{ docs[23] }}
      </p>

      <p class="ma-6">
        {{ docs[24] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-delete'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Deletion
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[25] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_013.png')" />

      <p class="ma-6">
        {{ docs[26] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-test'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Testing
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[27] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_015.png')" />

      <p class="ma-6">
        {{ docs[28] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_014.png')" />

      <p class="ma-6">
        {{ docs[29] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-options'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Answers
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[30] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_010.png')" />

      <p class="ma-6">
        {{ docs[31] }}
      </p>

      <p class="ma-6">
        {{ docs[32] }}
      </p>
    </div>

    <div v-if="focusPage === 'module-question-solutions'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Question Options
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[33] }}
      </p>

      <v-img class="ma-6" cover :src="require('@/assets/help/doc_011.png')" />

      <p class="ma-6">
        {{ docs[34] }}
      </p>

      <p class="ma-6">
        {{ docs[35] }}
      </p>
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
