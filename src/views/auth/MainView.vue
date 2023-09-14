<template>
  <v-container class="base fill-height" fluid>
    <v-card elevation="8" width="35%" class="ma-auto">
      <v-card class="rounded-0 rounded-t mb-6" color="purple-darken-3" flat>
        <v-card-text>
          <span class="text-subtitle-1 font-weight-bold">
            Mathotsanayan Admin Login
          </span>
        </v-card-text>
      </v-card>
      <form>
        <v-card-text class="text--primary">
          <v-text-field
            class="mx-4"
            v-model.trim="v$.email.$model"
            label="Email"
            density="compact"
            variant="outlined"
            :error="v$.email.$error"
            :error-messages="errors.email"
          />
          <v-text-field
            class="mx-4 mt-4"
            v-model.trim="v$.password.$model"
            label="Password"
            density="compact"
            variant="outlined"
            :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            :error="v$.password.$error"
            :error-messages="errors.password"
            @click:append-inner="show = !show"
          />
        </v-card-text>
        <v-card-actions class="text-right">
          <v-btn
            @click.prevent="submitForm"
            block
            variant="elevated"
            dark
            color="purple-darken-3"
          >
            Login
          </v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { ref, reactive, computed } from "vue";
import { useValidationErrors } from "@/services/handlers";
import { useAuthModule } from "@/store";
import { useRouter } from "vue-router";

import Login from "@/types/Login";

const authModule = useAuthModule();
const router = useRouter();
const show = ref<boolean>(false);
const state = reactive<Login>({
  email: "mathotsanayan@gmail.com",
  password: "Test@12345",
});
const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});
const errors = computed(() => useValidationErrors<Login>(v$.value.$errors));
const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    await authModule.login(v$.value.email.$model, v$.value.password.$model);
    if (authModule.isAuthenticated) {
      router.push("/");
    }
  }
};
</script>
