<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create School
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="50%"
    >
      <v-card height="640">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h5"> Create New School </span>
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
                  label="School Name"
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
                  v-model.trim="state.email"
                  label="School Email (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.contact_number"
                  label="School Contact Number (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.address"
                  label="School Address (Optional)"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  class="mx-4"
                  v-model.trim="state.description"
                  label="School Description/Notes (Optional)"
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
  <LoadingComponent v-bind:activate="useSchoolModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useSchoolModule } from "@/store";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import School from "@/types/School";
import VSchool from "@/helpers/validations/v_schools";
import rules from "@/helpers/rules/rules_schools";

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

const state = reactive<School>({
  name: "",
  email: "",
  address: "",
  contact_number: "",
  description: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VSchool>(v$.value.$errors));

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};

const clearForm = () => {
  state.name = "";
  state.email = "";
  state.address = "";
  state.contact_number = "";
  state.description = "";
  v$.value.$reset();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useSchoolModule().create(state);
    if (response) {
      clearForm();
      success.value.show("School has been successfully recorded.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process request.");
    }
  }
};
</script>
