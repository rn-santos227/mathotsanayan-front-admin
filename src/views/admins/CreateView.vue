<template>
  <v-btn variant="outlined" prepend-icon="mdi-plus">
    Create Admin
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
            <span class="text-h6"> Create New Course </span>
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
          <v-card-text class="text--primary pa-6">
            <v-row>
              <v-col>
                <v-text-field
                  v-model.trim="v$.name.$model"
                  label="Admin Name"
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
                  v-model.trim="v$.contact_number.$model"
                  label="Contact Number"
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
                  v-model.trim="v$.email.$model"
                  autocomplete="email"
                  label="Admin Email Address"
                  density="compact"
                  variant="outlined"
                  :error="v$.email.$error"
                  :error-messages="errors.email"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </form>
      </v-card>
    </v-dialog>
  </v-btn>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useAdminsModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useAdminsModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Admin from "@/types/Admin";
import VAdmin from "@/helpers/validations/v_admins";
import { rules, rules_password } from "@/helpers/rules/rules_admins";

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

const state = reactive<Admin>({
  name: "",
  email: "",
  contact_number: "",
  current_password: "",
  password: "",
  password_confirm: "",
});

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VAdmin>(v$.value.$errors));

watch(
  () => state.password,
  (pword: string) => {
    rules_password.value = pword;
  }
);

const clearForm = () => {
  state.name = "";
  state.email = "";
  state.contact_number = "";
  state.password = "";
  state.password_confirm = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};
</script>
