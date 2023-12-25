<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create Module
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Create New Module </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <form>
          <v-card-text class="text--primary">
            <v-row>
              <v-col cols="9">
                <v-text-field
                  v-model.trim="v$.name.$model"
                  label="Module Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.name.$error"
                  :error-messages="errors.name"
                />
              </v-col>
              <v-col cols="3">
                <v-select
                  :items="steps"
                  v-model.trim="v$.step.$model"
                  label="Module Step"
                  density="compact"
                  variant="outlined"
                  :error="v$.step.$error"
                  :error-messages="errors.step"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-slider
                  label="Passing Rate:"
                  color="purple-darken-3"
                  :thumb-size="32"
                  v-model="state.passing"
                  thumb-label
                ></v-slider>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model.trim="v$.subject.$model"
                  prepend-inner-icon="mdi-book"
                  label="Module Subject"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useSubjectModule().getSubjects"
                  :error="v$.subject.$error"
                  :error-messages="errors.subject"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.description"
                  label="Module Description/Notes"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.objective"
                  label="Module Objective"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-textarea
                  rows="3"
                  v-model.trim="state.direction"
                  label="Module Direction/Instruction"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider class="mb-2 mt-auto" />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
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
              @click.prevent="submitForm"
              variant="elevated"
              width="200"
              dark
              color="success"
              prepend-icon="mdi-check"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-btn>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useModuleModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useModuleModule, useSubjectModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Module from "@/types/Module";
import VModule from "@/helpers/validations/v_modules";
import rules from "@/helpers/rules/rules_modules";

const dialog = ref<boolean>(false);
const steps = ref<string[] | number[]>([]);
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

const state = reactive<Module>({
  name: "",
  step: "",
  passing: 50,
  objective: "",
  description: "",
  direction: "",
  subject: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VModule>(v$.value.$errors));

watch(
  () => state.subject,
  () => {
    if (
      typeof state.subject === "number" ||
      typeof state.subject === "string"
    ) {
      steps.value = useSubjectModule().getModuleCount(state.subject);
    }
  }
);

const clearForm = () => {
  state.name = "";
  state.step = "";
  state.description = "";
  state.subject = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useModuleModule().create(state);
  if (response) {
    clearForm();
    success.value.show("Course has been successfully recorded.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
