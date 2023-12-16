<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create Subject
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card height="360">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Create New Subject </span>
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
                  v-model.trim="v$.name.$model"
                  label="Subject Name"
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
                  v-model.trim="state.description"
                  label="Subject Description/Notes"
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
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useSubjectModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useSubjectModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Subject from "@/types/Subject";
import VSubject from "@/helpers/validations/v_subject";
import rules from "@/helpers/rules/rules_subject";

const dialog = ref<boolean>(false);
const success = ref({
  show: (message: string) => {
    console.log(message);
  },
});
const error = ref({
  show: (message: string) => {
    console.log(message);
  },
});

const state = reactive<Subject>({
  name: "",
  description: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VSubject>(v$.value.$errors));

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};

const clearForm = () => {
  state.name = "";
  state.description = "";
  v$.value.$reset();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useSubjectModule().create(state);
    if (response) {
      clearForm();
      success.value.show("Subject has been successfully recorded.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process the request.");
    }
  }
};
</script>
