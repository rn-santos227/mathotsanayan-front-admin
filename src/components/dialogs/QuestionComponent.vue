<template>
  <v-dialog v-model="dialog">
    <v-card class="ma-auto" width="25%">
      <v-card class="rounded-0 rounded-t mb-2" color="purple-darken-3" flat>
        <v-card-text>
          <span class="text-subtitle-1 font-weight-bold">
            <v-icon class="mr-2" icon="mdi-information-outline"></v-icon>
            Confirmation Message
          </span>
        </v-card-text>
      </v-card>
      <v-card-text class="mx-auto my-2">
        <v-icon></v-icon>
      </v-card-text>
      <v-card-text class="mx-auto">
        {{ text }}
      </v-card-text>
      <v-divider class="my-2" />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="cancel">Cancel</v-btn>
        <v-btn @click="confirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<boolean>(false);
const text = ref<string>("");

const emit = defineEmits(["confirm", "cancel"]);

const confirm = () => {
  dialog.value = false;
  emit("confirm");
};

const cancel = () => {
  dialog.value = false;
  emit("cancel");
};

const show = (message: string) => {
  text.value = message;
  dialog.value = true;
};

defineExpose({
  show,
});
</script>
