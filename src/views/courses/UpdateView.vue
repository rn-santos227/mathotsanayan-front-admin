<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-update"></v-icon> Update
    </v-list-item-title>
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card height="450">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h5">
                  Update Course ID: {{ padLeft(state.id) }}
                </span>
              </v-col>
              <v-col class="d-flex">
                <v-spacer />
                <v-btn
                  density="comfortable"
                  variant="outlined"
                  icon="mdi-close"
                  @click="close"
                >
                </v-btn>
              </v-col>
            </v-row>
          </v-card-title>
        </v-card>
        <form>
          <v-card-text class="text--primary">
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="v$.name.$model"
                  label="Course Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.name.$error"
                  :error-messages="errors.name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="v$.abbreviation.$model"
                  label="Course Abbreviation"
                  density="compact"
                  variant="outlined"
                  :error="v$.abbreviation.$error"
                  :error-messages="errors.abbreviation"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.description"
                  label="Course Description/Notes"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mb-2 mt-auto" />
          <v-card-actions class="text-right">
            <v-row>
              <v-col>
                <v-btn
                  class="mb-3"
                  @click.prevent="resetForm"
                  variant="elevated"
                  width="200"
                  dark
                  color="error"
                  prepend-icon="mdi-close"
                >
                  Reset
                </v-btn>
                <v-btn
                  class="mb-3"
                  @click.prevent="submitForm"
                  variant="elevated"
                  width="200"
                  dark
                  color="success"
                  prepend-icon="mdi-check"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-list-item>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useCourseModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useCourseModule } from "@/store";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import Course from "@/types/Course";
import VCourse from "@/helpers/validations/v_courses";
import rules from "@/helpers/rules/rules_courses";
import { padLeft } from "@/helpers/utils";

const dialog = ref<boolean>(false);
const success = ref({
  show: (message: string) => {
    return message;
  },
});

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const props = defineProps<{
  course: Course;
}>();

const state = reactive<Course>({ ...props.course });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VCourse>(v$.value.$errors));

const resetForm = () => {
  state.name = props.course.name;
  state.description = props.course.description;
  v$.value.$reset();
};

const close = () => {
  dialog.value = false;
  resetForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useCourseModule().update(state);
    if (response) {
      resetForm();
      success.value.show("Course has been successfully updated.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process request.");
    }
  }
};
</script>
