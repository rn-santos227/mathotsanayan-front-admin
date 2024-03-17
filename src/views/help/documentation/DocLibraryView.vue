<template>
  <v-card-text>
    <div v-if="focusPage === 'library-accounts'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Accounts Manager
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

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_032.png')"
      />

      <p class="ma-6">
        {{ docs[4] }}
      </p>

      <p class="ma-6">
        {{ docs[5] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_033.png')"
      />
    </div>

    <div v-if="focusPage === 'library-admins'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Administrations Manager
      </span>
      <v-divider class="my-2" />

      <p class="ma-6">
        {{ docs[6] }}
      </p>

      <p class="ma-6">
        {{ docs[7] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_034.png')"
      />

      <p class="ma-6">
        {{ docs[8] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_035.png')"
      />

      <p class="ma-6">
        {{ docs[9] }}
      </p>
    </div>

    <div v-if="focusPage === 'library-courses'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Courses Manager
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[10] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_036.png')"
      />

      <p class="ma-6">
        {{ docs[11] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_037.png')"
      />

      <p class="ma-6">
        {{ docs[12] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_038.png')"
      />

      <p class="ma-6">
        {{ docs[13] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_039.png')"
      />
    </div>

    <div v-if="focusPage === 'library-schools'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Schools Manager
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[14] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_040.png')"
      />

      <p class="ma-6">
        {{ docs[15] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_041.png')"
      />

      <p class="ma-6">
        {{ docs[16] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_042.png')"
      />

      <p class="ma-6">
        {{ docs[17] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_043.png')"
      />
    </div>

    <div v-if="focusPage === 'library-sections'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Sections Manager
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[18] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_044.png')"
      />

      <p class="ma-6">
        {{ docs[19] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_045.png')"
      />

      <p class="ma-6">
        {{ docs[20] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_046.png')"
      />

      <p class="ma-6">
        {{ docs[21] }}
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/images/help/doc_047.png')"
      />
    </div>

    <div v-if="focusPage === 'library-subjects'">
      <span class="text-h5 font-weight-bold">
        MatHOTSanayanAdmin Library Subjects
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        {{ docs[22] }}
      </p>

      <p class="ma-6">
        {{ docs[23] }}
      </p>

      <p class="ma-6">
        {{ docs[24] }}
      </p>

      <p class="ma-6">
        {{ docs[25] }}
      </p>
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
