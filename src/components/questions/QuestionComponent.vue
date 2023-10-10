<template>
  <v-row class="my-1 mx-2">
    <v-col>
      <v-text-field
        v-model.trim="content"
        label="Question Content/Instruction"
        density="compact"
        variant="outlined"
        :error="v$.content.$error"
        :error-messages="errors.content"
      />
    </v-col>
    <v-col>
      <v-select
        v-model="type"
        :items="types"
        label="Question Type"
        density="compact"
        variant="outlined"
      />
    </v-col>
    <v-col>
      <v-file-input
        v-model="file"
        accept="image/*"
        label="Question Attachment"
        density="compact"
        variant="outlined"
        :error="v$.file.$error"
        :error-messages="errors.file"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { useValidationErrors } from "@/services/handlers";
const types = ref<string[]>(["multiple selection", "word problem"]);

import VQuestion from "@/helpers/validations/v_questions";
import rules from "@/helpers/rules/rules_questions";

const props = defineProps<{
  content: string;
  type: string;
  file: File[];
}>();

const emit = defineEmits([
  "update:content",
  "update:type",
  "update:file",
  "remove",
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

const file = computed({
  get: () => v$.value.file.$model,
  set: (value: File[]) => {
    emit("update:file", value);
  },
});

const check = async () => {
  return await v$.value.$validate();
};

defineExpose({
  check,
});
</script>
