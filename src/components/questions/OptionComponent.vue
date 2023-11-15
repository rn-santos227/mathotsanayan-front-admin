<template>
  <v-card height="400" class="mb-4 outlined-border-options" variant="outlined">
    <v-card
      class="rounded-0 rounded-t mb-6 py-2"
      color="light-blue-darken-2"
      flat
    >
      <v-card-title>
        <v-row>
          <v-col>
            <span class="text-h6"> Option # {{ index + 1 }} </span>
          </v-col>
          <v-col class="d-flex">
            <v-spacer />
            <v-btn
              v-if="check"
              density="comfortable"
              variant="outlined"
              icon="mdi-delete-circle-outline"
              @click.prevent="remove"
            >
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
    <v-card-text class="ma-4">
      <v-row>
        <v-textarea
          rows="5"
          v-model="content"
          label="Option Content"
          density="compact"
          variant="outlined"
          :error="v$.content.$error"
          :error-messages="errors.content"
        />
      </v-row>
      <v-row>
        <v-file-input
          v-model="input_file"
          accept="image/*"
          label="Option Attachment"
          density="compact"
          variant="outlined"
          :error="v$.file.$error"
          :error-messages="errors.file"
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

import VOption from "@/helpers/validations/v_options";
import rules from "@/helpers/rules/rules_options";

const input_file = ref<File[]>([]);
const props = defineProps<{
  content: string;
  file: File | null;
  index: number;
  check: boolean;
}>();

const emit = defineEmits(["update:content", "update:file", "remove"]);

const v$ = useVuelidate(rules, props);
const errors = computed(() => useValidationErrors<VOption>(v$.value.$errors));

const content = computed({
  get: () => v$.value.content.$model,
  set: (value: string) => {
    emit("update:content", value);
  },
});

const changeFile = () => {
  emit("update:file", input_file.value[0]);
};

const remove = () => {
  emit("remove");
};

const validate = async () => {
  return await v$.value.$validate();
};

defineExpose({
  validate,
});
</script>

<style scoped>
.outlined-border-options {
  border: 2px solid #0288d1;
}
</style>
