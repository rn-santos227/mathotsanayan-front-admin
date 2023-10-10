<template>
  <v-card class="mb-4 outlined-border-solutions" variant="outlined">
    <v-card class="rounded-0 rounded-t mb-6 py-2" color="cyan-darken-2" flat>
      <v-card-title>
        <v-row>
          <v-col>
            <span class="text-h6"> Solution # {{ index + 1 }} </span>
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
        <v-text-field
          v-model="solution"
          label="Solution Content"
          density="compact"
          variant="outlined"
        />
      </v-row>
      <v-row>
        <v-file-input
          v-model="file"
          accept="image/*"
          label="Solution Attachment"
          density="compact"
          variant="outlined"
        />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  solution: string;
  file: File[];
  index: number;
  check: boolean;
}>();

const emit = defineEmits(["update:solution", "update:file", "remove"]);

const solution = computed({
  get: () => props.solution,
  set: (value: string) => {
    emit("update:solution", value);
  },
});

const file = computed({
  get: () => props.file,
  set: (value: File[]) => {
    emit("update:file", value);
  },
});

const remove = () => {
  emit("remove");
};
</script>

<style scoped>
.outlined-border-solutions {
  border: 2px solid #0097a7;
}
</style>
