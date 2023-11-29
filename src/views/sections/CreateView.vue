<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create Section
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card height="540">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Create New Section </span>
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
                  label="Section Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.name.$error"
                  :error-messages="errors.name"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  class="mx-4"
                  v-model.trim="v$.school.$model"
                  prepend-inner-icon="mdi-school"
                  label="Section School Name"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useSchoolModule().getSchools"
                  :error="v$.school.$error"
                  :error-messages="errors.school"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  class="mx-4"
                  v-model.trim="v$.teacher.$model"
                  prepend-inner-icon="mdi-human-male-board"
                  label="Teacher Assignment"
                  density="compact"
                  variant="outlined"
                  item-title="full_name"
                  item-value="id"
                  :items="useTeacherModule().getTeachers"
                  :error="v$.teacher.$error"
                  :error-messages="errors.teacher"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.description"
                  label="Sectopm Description/Notes"
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
                  @click.prevent="clearForm"
                  variant="elevated"
                  width="200"
                  dark
                  color="error"
                  prepend-icon="mdi-close"
                >
                  Clear
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
  </v-btn>
  <SuccessComponent ref="success" />
  <ErrorComponent ref="error" />
  <LoadingComponent v-bind:activate="useSectionModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useSectionModule, useSchoolModule, useTeacherModule } from "@/store";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import Section from "@/types/Section";
import VSection from "@/helpers/validations/v_sections";
import rules from "@/helpers/rules/rules_sections";

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

const state = reactive<Section>({
  name: "",
  description: "",
  school: "",
  teacher: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VSection>(v$.value.$errors));

const clearForm = () => {
  state.name = "";
  state.description = "";
  state.school = "";
  state.teacher = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useSectionModule().create(state);
    if (response) {
      clearForm();
      success.value.show("Section has been successfully recorded.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process the request.");
    }
  }
};
</script>
