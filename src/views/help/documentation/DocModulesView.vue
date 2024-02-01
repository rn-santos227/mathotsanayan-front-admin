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
        detailed insights into the process of question addition, MatHotSanayan
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
      <p class="ma-6">
        The Module Page Filter Search function in MatHotSanayan introduces a
        versatile and efficient way for administrators to pinpoint specific
        modules based on various criteria. This feature empowers users to
        streamline their workflow by searching for modules according to three
        key parameters: module name, subject name, or keywords within the
        module's description.
      </p>

      <v-img
        class="ma-6"
        cover
        :src="require('@/assets/help/doc_004.png')"
      ></v-img>

      <p class="ma-6">
        With the search by module name option, administrators can quickly locate
        a particular module by typing its name directly into the search bar.
        This targeted approach ensures swift access to specific assessments,
        saving valuable time and enhancing overall navigation.
      </p>

      <p class="ma-6">
        Similarly, the search by subject name allows for the effortless
        categorization of modules. Administrators can filter modules based on
        their designated subject, facilitating a systematic organization that
        aligns with the educational institution's curriculum structure.
      </p>

      <p class="ma-6">
        Moreover, the search by words within the module's description adds a
        layer of granularity to the search process. This functionality allows
        administrators to locate modules based on specific keywords present in
        their descriptions, providing a more nuanced and tailored approach to
        information retrieval.
      </p>
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
