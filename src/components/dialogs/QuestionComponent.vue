<template>
  <v-dialog v-model="open" width="auto">
    <v-card class="ma-auto" width="40%">
      <v-card class="rounded-0 rounded-t mb-6" color="purple-darken-3" flat>
        <v-card-text>
          <span class="text-subtitle-1 font-weight-bold">
            <v-icon class="mr-2" icon="mdi-help-circle-outline"></v-icon>
            Confirmation Message
          </span>
        </v-card-text>
        <v-card-text>
          {{ props.message }}
        </v-card-text>
      </v-card>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const open = ref<boolean>(false);
</script>
