<template>
  <v-btn
    variant="outlined"
    color="purple-darken-3"
    prepend-icon="mdi-magnify"
    height="40"
  >
    Filter Search
    <v-dialog
      class="ma-auto"
      persistent
      v-model="dialog"
      activator="parent"
      width="40%"
    >
      <v-card>
        <v-card
          class="rounded-0 rounded-t mb-6 py-2"
          color="purple-darken-3"
          flat
        >
          <v-card-actions class="mx-4">
            <span class="text-h6"> Module Advance Search </span>
            <v-spacer />
            <v-btn
              density="comfortable"
              variant="outlined"
              icon="mdi-close"
              @click="close"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <form>
          <v-card-text>
            <v-row>
              <v-col cols="8">
                <v-text-field
                  v-model.trim="search"
                  label="Search Value"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="4">
                <v-select
                  :items="search_list"
                  item-title="text"
                  item-value="value"
                  v-model.trim="category"
                  label="Search Category"
                  density="compact"
                  variant="outlined"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-divider />
          <v-card-actions class="text-right">
            <v-spacer />
            <v-btn
              @click.prevent="submit"
              variant="elevated"
              width="200"
              dark
              color="purple-darken-3"
              prepend-icon="mdi-magnify"
            >
              Search
            </v-btn>
          </v-card-actions>
        </form>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from "vue";
import search_list from "@/helpers/searches/search_modules";

const dialog = ref<boolean>(false);
const search = ref<string>("");
const category = ref<string>("");

const close = () => {
  dialog.value = !dialog.value;
};

const submit = async () => {
  //
};
</script>
