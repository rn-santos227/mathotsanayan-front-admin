<template>
  <v-card class="mb-4 outlined-border-options" variant="outlined">
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
        <v-text-field
          v-model="content"
          label="Option Content"
          density="compact"
          variant="outlined"
        />
      </v-row>
      <v-row>
        <v-file-input
          v-model="file"
          accept="image/*"
          label="Option Attachment"
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
  content: string;
  file: File[];
  index: number;
  check: boolean;
}>();

const emit = defineEmits(["update:content", "update:file", "remove"]);

const content = computed({
  get: () => props.content,
  set: (value: string) => {
    emit("update:content", value);
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
.outlined-border-options {
  border: 2px solid #0288d1;
}
</style>
