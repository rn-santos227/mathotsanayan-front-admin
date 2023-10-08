<template>
  <v-card class="mx-4 mb-4 outlined-border-corrects" variant="outlined">
    <v-card class="rounded-0 rounded-t mb-6 py-2" color="teal-darken-2" flat>
      <v-card-title>
        <v-row>
          <v-col>
            <span class="text-h6"> Correct Answer # {{ index + 1 }} </span>
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
        <v-textarea
          rows="4"
          v-model="content"
          label="Correct Answer"
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
  index: number;
  check: boolean;
}>();

const emit = defineEmits(["update:content", "remove"]);

const content = computed({
  get: () => props.content,
  set: (value: string) => {
    emit("update:content", value);
  },
});

const remove = () => {
  emit("remove");
};
</script>

<style scoped>
.outlined-border-corrects {
  border: 2px solid #00796b;
}
</style>
