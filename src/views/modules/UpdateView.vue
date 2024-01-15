<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-update"></v-icon> Update
    </v-list-item-title>
    <v-dialog
      class="ma-auto hide-scroll"
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
            <span class="text-h5">
              Update Module ID: {{ padLeft(state.id) }}
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
          <v-card-text v-if="!$props.module.active">
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
                  :items="useSubjectsModule().getSubjects"
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
            <v-switch
              class="active ml-6"
              color="green-darken-3"
              inset
              hide-details
              label="Activate"
              v-model="state.active"
            />
            <v-btn
              v-if="!$props.module.active"
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
import { inject, ref, reactive, computed, watch } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
import { useModulesModule, useSubjectsModule } from "@/store";
import { padLeft } from "@/helpers/utils";

import Module from "@/types/Module";
import VModule from "@/helpers/validations/v_modules";
import rules from "@/helpers/rules/rules_modules";

const dialog = ref<boolean>(false);
const steps = ref<string[] | number[]>([]);
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
  module: Module;
}>();

const state = reactive<Module>({ ...props.module });
const v$ = useVuelidate(rules, state);
const errors = computed(() => useValidationErrors<VModule>(v$.value.$errors));

watch(
  () => state.subject,
  () => {
    if (
      typeof state.subject === "number" ||
      typeof state.subject === "string"
    ) {
      steps.value = useSubjectsModule().getModuleCount(state.subject);
    }
  }
);

const resetForm = () => {
  state.name = props.module.name;
  state.step = props.module.step;
  state.subject = props.module.subject;
  state.description = props.module.description;
  v$.value.$reset();
};

const close = () => {
  dialog.value = !dialog.value;
  resetForm();
};

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const response = await useModulesModule().update(state);
  if (response) {
    resetForm();
    success.value.show("Module has been successfully updated.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process the request.");
  }
};
</script>

<style scoped>
.active {
  margin-top: -10px;
}
</style>
