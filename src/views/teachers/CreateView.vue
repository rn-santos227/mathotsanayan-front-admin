<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create Teacher
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="70%"
    >
      <v-card height="560">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6"> Create New Teacher </span>
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
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.first_name.$model"
                  label="First Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.first_name.$error"
                  :error-messages="errors.first_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.middle_name.$model"
                  label="Middle Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.middle_name.$error"
                  :error-messages="errors.middle_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.last_name.$model"
                  label="Last Name"
                  density="compact"
                  variant="outlined"
                  :error="v$.last_name.$error"
                  :error-messages="errors.last_name"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model.trim="v$.suffix.$model"
                  label="Suffix"
                  density="compact"
                  variant="outlined"
                  :error="v$.suffix.$error"
                  :error-messages="errors.suffix"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-autocomplete
                  v-model.trim="v$.school.$model"
                  prepend-inner-icon="mdi-school"
                  label="School Name"
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
              <v-col cols="6">
                <v-text-field
                  v-model.trim="v$.email.$model"
                  autocomplete="email"
                  label="Email Address"
                  density="compact"
                  variant="outlined"
                  :error="v$.email.$error"
                  :error-messages="errors.email"
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model.trim="v$.contact_number.$model"
                  label="Contact Number (Optional)"
                  density="compact"
                  variant="outlined"
                  :error="v$.contact_number.$error"
                  :error-messages="errors.contact_number"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-lock"
                  v-model.trim="v$.password.$model"
                  autocomplete="new-password"
                  label="Password"
                  density="compact"
                  variant="outlined"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :error="v$.password.$error"
                  :error-messages="errors.password"
                  @click:append-inner="show = !show"
                />
              </v-col>
              <v-col>
                <v-text-field
                  prepend-inner-icon="mdi-lock"
                  v-model.trim="v$.password_confirm.$model"
                  autocomplete="new-password"
                  label="Password"
                  density="compact"
                  variant="outlined"
                  :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show ? 'text' : 'password'"
                  :error="v$.password_confirm.$error"
                  :error-messages="errors.password_confirm"
                  @click:append-inner="show = !show"
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
  <LoadingDialogComponent v-bind:activate="useTeacherModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useTeacherModule, useSchoolModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Teacher from "@/types/Teacher";
import VTeacher from "@/helpers/validations/v_teachers";
import { rules, rules_password } from "@/helpers/rules/rules_teachers";

const show = ref<boolean>(false);
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

const state = reactive<Teacher>({
  first_name: "",
  middle_name: "",
  last_name: "",
  suffix: "",
  password: "",
  password_confirm: "",
  email: "",
  contact_number: "",
  school: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VTeacher>(v$.value.$errors));

watch(
  () => state.password,
  (pword: string) => {
    rules_password.value = pword;
  }
);

const clearForm = () => {
  state.first_name = "";
  state.middle_name = "";
  state.last_name = "";
  state.suffix = "";
  state.password = "";
  state.password_confirm = "";
  state.email = "";
  state.contact_number = "";
  state.school = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useTeacherModule().create(state);
    if (response) {
      clearForm();
      success.value.show("Teacher has been successfully recorded.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process the request.");
    }
  }
};
</script>
