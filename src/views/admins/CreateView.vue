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
      </v-card>
    </v-dialog>
  </v-btn>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useAdminsModule().isLoading" />
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useAdminsModule } from "@/store";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Admin from "@/types/Admin";

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
});

const clearForm = () => {
  state.name = "";
  state.email = "";
  state.contact_number = "";
};

const close = () => {
  dialog.value = !dialog.value;
  clearForm();
};
</script>
