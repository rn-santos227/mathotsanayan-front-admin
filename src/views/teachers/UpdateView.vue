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
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          variant="flat"
        >
          <v-card-actions class="mx-4">
            <span class="text-h6">
              Update Teacher ID: {{ padLeft(state.id) }}
            </span>
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
          <v-card-text>
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
                  label="School"
                  density="compact"
                  variant="outlined"
                  item-title="name"
                  item-value="id"
                  :items="useSchoolsModule().getSchools"
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
          </v-card-text>
          <v-divider class="mb-2 mt-auto" />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
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
  </v-list-item>
</template>

<script setup lang="ts">
import { inject, ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useTeachersModule, useSchoolsModule } from "@/store";

import Teacher from "@/types/Teacher";
import VTeacher from "@/helpers/validations/v_teachers";
import { rules } from "@/helpers/rules/rules_update_teacher";
import { padLeft } from "@/helpers/utils";

const dialog = ref<boolean>(false);
const success = inject("success", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const error = inject("error", {
  value: {
    show: (message: string) => {
      return message;
    },
  },
});

const props = defineProps<{
  teacher: Teacher;
}>();

const state = reactive<Teacher>({ ...props.teacher });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VTeacher>(v$.value.$errors));

const resetForm = () => {
  state.first_name = props.teacher.first_name;
  state.middle_name = props.teacher.middle_name;
  state.last_name = props.teacher.last_name;
  state.suffix = props.teacher.suffix;
  state.email = props.teacher.email;
  state.contact_number = props.teacher.contact_number;
  state.school = props.teacher.school;

  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useTeachersModule().update(state);
  if (response) {
    resetForm();
    success.value.show("Teacher has been successfully updated.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
