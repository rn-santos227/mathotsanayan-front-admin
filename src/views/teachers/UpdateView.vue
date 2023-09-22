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
      <v-card height="560">
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-h6">
                  Update Teacher ID: {{ padLeft(state.id) }}
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
              <v-col cols="3">
                <v-text-field
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4"
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
                  class="mx-4 mt-4"
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
                  class="mx-4 mt-4"
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
  <LoadingComponent v-bind:activate="useTeacherModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useTeacherModule, useSchoolModule } from "@/store";

import SuccessComponent from "@/components/dialogs/SuccessComponent.vue";
import ErrorComponent from "@/components/dialogs/ErrorComponent.vue";
import LoadingComponent from "@/components/dialogs/LoadingComponent.vue";

import Teacher from "@/types/Teacher";
import VTeacher from "@/helpers/validations/v_teachers";
import { rules, rules_password } from "@/helpers/rules/rules_teachers";
import { padLeft } from "@/helpers/utils";

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

const props = defineProps<{
  teacher: Teacher;
}>();

const state = reactive<Teacher>({ ...props.teacher });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VTeacher>(v$.value.$errors));

watch(
  () => state.password,
  (pword: string) => {
    rules_password.value = pword;
  }
);

const resetForm = () => {
  state.first_name = props.teacher.first_name;
  state.middle_name = props.teacher.middle_name;
  state.last_name = props.teacher.last_name;
  state.suffix = props.teacher.suffix;
  state.email = props.teacher.email;
  state.contact_number = props.teacher.contact_number;
  state.school = props.teacher.school;
  state.password = "";
  state.password_confirm = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    const response = await useTeacherModule().update(state);
    if (response) {
      resetForm();
      success.value.show("Teacher has been successfully updated.");
      dialog.value = false;
    } else {
      error.value.show("The server has not able to process request.");
    }
  }
};
</script>
