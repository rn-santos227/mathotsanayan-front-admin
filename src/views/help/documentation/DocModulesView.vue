<template>
  <v-card-text>
    <div v-if="focusPage === 'module-main'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Modules Page
      </span>
      <v-divider class="my-2" />
      <p class="ma-6">
        The Modules Manager Page in MatHotSanayan acts as a central hub,
        providing administrators with a robust set of tools to oversee and
        manage assessment modules efficiently. This pivotal control center
        streamlines essential tasks, offering a comprehensive suite of features
        for creating, updating, activating, and deleting modules. Administrators
        can effortlessly navigate through step-by-step procedures outlined in
        this documentation, ensuring a user-friendly experience in handling the
        intricacies of module management. From the inception of a new module to
        its eventual deactivation or deletion, every aspect is covered,
        empowering administrators with the control they need.
      </p>
      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/help/doc_002.png')"
      ></v-img>
      <p class="ma-6">
        In addition to core module management functionalities, this
        documentation sheds light on the seamless integration of question
        management within the Modules Manager Page. This ensures a holistic
        approach to assessment administration, allowing administrators to not
        only structure modules but also add questions effortlessly. By providing
        detailed insights into the process of question addition, [CAA Tool Name]
        offers a comprehensive solution that enables administrators to tailor
        assessments to their specific needs. This dual functionality,
        encompassing both module and question management, establishes the
        Modules Manager Page as a versatile and indispensable tool within the
        MatHotSanayan ecosystem.
      </p>
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
        MatHotSanayan Admin Module Deletion
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
        MatHotSanayan Admin Question Deletion
      </span>
      <v-divider class="my-2" />
    </div>

    <div v-if="focusPage === 'module-question-test'">
      <span class="text-h5 font-weight-bold">
        MatHotSanayan Admin Question Test
      </span>
      <v-divider class="my-2" />
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
