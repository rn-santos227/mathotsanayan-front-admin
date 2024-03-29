<template>
  <v-list-item @click.prevent>
    <v-list-item-title class="text-button">
      <v-icon icon="mdi-delete-circle-outline"></v-icon> Delete
      <v-dialog activator="parent" v-model="dialog">
        <v-sheet
          class="ma-auto text-center mx-auto"
          elevation="12"
          max-width="550"
          rounded="lg"
          width="100%"
        >
          <v-card
            class="rounded-0 rounded-t mb-2"
            color="orange-darken-3"
            variant="flat"
          >
            <v-card-text class="text-left">
              <span class="text-subtitle-1 font-weight-bold">
                <v-icon class="mr-2" icon="mdi-information-outline"></v-icon>
                System Message
              </span>
            </v-card-text>
          </v-card>
          <v-icon
            class="my-5"
            color="orange-darken-3"
            icon="mdi-alert-circle"
            size="112"
          ></v-icon>
          <h2 class="text-h4 mb-6 text-orange-darken-3">WARNING</h2>
          <span class="mx-auto">
            Are you sure you want to delete this Subject?
          </span>
          <v-divider class="mb-2 mt-6" />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              variant="flat"
              width="100"
              color="error"
              dark
              @click="cancel"
            >
              Cancel
            </v-btn>
            <v-btn
              variant="flat"
              width="100"
              color="success"
              dark
              @click="confirm"
            >
              Confirm
            </v-btn>
          </v-card-actions>
        </v-sheet>
      </v-dialog>
    </v-list-item-title>
  </v-list-item>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import { useSubjectsModule } from "@/store";

import Subject from "@/types/Subject";

const props = defineProps<{
  subject: Subject;
}>();

const dialog = ref<boolean>(false);
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

const confirm = async () => {
  const response = await useSubjectsModule().delete(props.subject);
  if (response) {
    success.value.show("Subject has been successfully deleted.");
    dialog.value = false;
  } else {
    error.value.show("The server has not able to process the request.");
  }
};

const cancel = async () => {
  dialog.value = false;
};
</script>
