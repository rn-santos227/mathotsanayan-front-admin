<template>
  <v-btn variant="outlined">
    Create School
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
          <v-card-title>
            <v-row>
              <v-col>
                <span class="text-subtitle-1 font-weight-bold">
                  Create New School
                </span>
              </v-col>
              <v-col class="d-flex">
                <v-spacer />
                <v-btn
                  density="comfortable"
                  variant="outlined"
                  icon="mdi-close"
                  @click="dialog = !dialog"
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
                  v-model.trim="v$.contact_number.$model"
                  label="School Contact Number"
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
                  class="mx-4"
                  v-model.trim="state.description"
                  label="School Description/Notes"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-divider class="mb-2"></v-divider>
            <v-card-actions class="text-right">
              <v-row>
                <v-col>
                  <v-btn
                    class="mb-3"
                    @click.prevent="submitForm"
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
          </v-card-text>
        </form>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";

import School from "@/types/School";
import VSchool from "@/helpers/validations/v_schools";
import rules from "@/helpers/rules/rules_schools";

const dialog = ref<boolean>(false);
const state = reactive<School>({
  name: "",
  contact_number: "",
  description: "",
});

const errors = computed(() => useValidationErrors<VSchool>(v$.value.$errors));
const v$ = useVuelidate(rules, state);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    //
  }
};
</script>
