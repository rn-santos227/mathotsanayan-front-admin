<template>
  <v-card class="mx-4 mb-4 outlined-border-options" variant="outlined">
    <v-card
      class="rounded-0 rounded-t mb-6 py-2"
      color="light-blue-darken-2"
      flat
    >
      <v-card-title>
        <v-row>
          <v-col> </v-col>
          <v-col class="d-flex">
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-delete-circle-outline"
            >
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
    <v-card-text class="ma-4">
      <v-row>
        <v-text-field
          v-model="state.content"
          label="Option Content"
          density="compact"
          variant="outlined"
        />
      </v-row>
      <v-row>
        <v-text-field
          v-model="state.type"
          label="Option Type"
          density="compact"
          variant="outlined"
        />
      </v-row>
      <v-row>
        <v-file-input
          v-model="state.file"
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
import { reactive } from "vue";
import Option from "@/types/Option";

const state = reactive<Option>({
  content: "",
  type: "",
  file: [],
});
</script>
