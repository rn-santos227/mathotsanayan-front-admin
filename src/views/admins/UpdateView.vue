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
              Update Admin ID: {{ padLeft(state.id) }}
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
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script setup lang="ts">
import { inject, ref, reactive, computed, watch, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useAdminsModule } from "@/store";
import { rules, rules_password } from "@/helpers/rules/rules_admins";
import { padLeft } from "@/helpers/utils";

import Admin from "@/types/Admin";
import VAdmin from "@/helpers/validations/v_admins";

const show = ref<boolean>(false);
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
  admin: Admin;
}>();
const state = reactive<Admin>({ ...props.admin });

const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VAdmin>(v$.value.$errors));

onMounted(() => {
  state.password = "";
  state.password_confirm = "";
  rules_password.value = "";
});

watch(
  () => state.password,
  (pword: string) => {
    rules_password.value = pword;
  }
);

const resetForm = () => {
  state.name = props.admin.name;
  state.email = props.admin.email;
  state.current_password = props.admin.current_password;
  state.password = "";
  state.password_confirm = "";
  rules_password.value = "";
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  resetForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
};
</script>
