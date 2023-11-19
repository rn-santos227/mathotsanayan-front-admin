<template>
  <v-row class="mt-1 mx-2">
    <v-col>
      <v-textarea
        rows="3"
        v-model.trim="content"
        label="Question Content/Instruction"
        density="compact"
        variant="outlined"
        :error="v$.content.$error"
        :error-messages="errors.content"
      />
    </v-col>
  </v-row>
  <v-row class="mb-1 mx-2">
    <v-col>
      <v-select
        v-model="type"
        :items="types"
        label="Question Type"
        density="compact"
        variant="outlined"
        @update:modelValue="changeQuestionType($event)"
      />
    </v-col>
    <v-col>
      <v-file-input
        v-model="input_file"
        accept="image/*"
        label="Question Attachment"
        density="compact"
        variant="outlined"
        @change="changeFile"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
const types = ref<string[]>([
  "multiple selection",
  "single correct",
  "word problem",
]);

import VQuestion from "@/helpers/validations/v_questions";
import rules from "@/helpers/rules/rules_questions";

const input_file = ref<File[]>([]);
const props = defineProps<{
  content: string;
  type: string;
  file: File | null;
}>();

const emit = defineEmits([
  "update:content",
  "update:type",
  "update:file",
  "changeType",
]);

const v$ = useVuelidate(rules, props);
const errors = computed(() => useValidationErrors<VQuestion>(v$.value.$errors));

const content = computed({
  get: () => v$.value.content.$model,
  set: (value: string) => {
    emit("update:content", value);
  },
});

const type = computed({
  get: () => props.type,
  set: (value: string) => {
    emit("update:type", value);
  },
});

const changeFile = () => {
  emit("update:file", input_file.value[0]);
};

const changeQuestionType = (event: Event) => {
  emit("changeType", event);
};

const validate = (): boolean => {
  v$.value.$validate();
  return v$.value.$error;
};

const reset = () => {
  v$.value.$reset();
};

defineExpose({
  validate,
  reset,
});
</script>
