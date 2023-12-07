<template>
  <v-card height="380" class="mb-4 outlined-border-corrects" variant="outlined">
    <v-card class="rounded-0 rounded-t mb-6 py-2" color="teal-darken-2" flat>
      <v-card-title>
        <v-row>
          <v-col>
            <span class="text-h6"> {{ displayTitle() }} </span>
          </v-col>
          <v-col class="d-flex">
            <v-spacer />
            <v-btn
              v-if="check"
              density="comfortable"
              variant="outlined"
              icon="mdi-delete-circle-outline"
              @click="remove"
            >
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
    <v-card-text class="ma-4">
      <v-row>
        <v-text-field
          class="mt-2"
          rows="3"
          v-model="content"
          label="Correct Answer"
          density="compact"
          variant="outlined"
          :error="v$.content.$error"
          :error-messages="errors.content"
        />
      </v-row>
      <v-row>
        <v-textarea
          class="mt-2"
          rows="3"
          v-model="solution"
          label="Solution"
          density="compact"
          variant="outlined"
          :error="v$.solution.$error"
          :error-messages="errors.solution"
        />
      </v-row>
      <v-row>
        <v-file-input
          class="mt-2"
          v-model="input_file"
          accept="image/*"
          label="Option Attachment"
          density="compact"
          variant="outlined"
          @change="changeFile"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";

import VCorrect from "@/helpers/validations/v_corrects";
import rules from "@/helpers/rules/rules_corrects";

const input_file = ref<File[]>([]);
const props = defineProps<{
  content: string;
  solution: string;
  file: File | null;
  title: string | undefined;
  index: number;
  check: boolean;
}>();

const emit = defineEmits([
  "update:content",
  "update:solution",
  "update:file",
  "remove",
]);

const errors = computed(() => useValidationErrors<VCorrect>(v$.value.$errors));
const v$ = useVuelidate(rules, props);

const content = computed({
  get: () => props.content,
  set: (value: string) => {
    emit("update:content", value);
  },
});

const solution = computed({
  get: () => props.solution,
  set: (value: string) => {
    emit("update:solution", value);
  },
});

const changeFile = () => {
  emit("update:file", input_file.value[0]);
};

const remove = () => {
  emit("remove");
};

const validate = (): boolean => {
  v$.value.$validate();
  return v$.value.$error;
};

const reset = () => {
  v$.value.$reset();
};

const displayTitle = () => {
  if (props.title) {
    return props.title;
  } else {
    return "Correct # " + (props.index + 1);
  }
};

defineExpose({
  validate,
  reset,
});
</script>

<style scoped>
.outlined-border-corrects {
  border: 2px solid #00796b;
}
</style>
