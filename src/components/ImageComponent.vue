<template>
  <v-sheet height="150" width="150" class="my-6">
    <div v-if="imageModule.isLoading">
      <v-card height="150" width="150" class="ma-auto text-center pa-4">
        <v-progress-circular
          width="16"
          size="120"
          color="purple-darken-3"
          indeterminate
        >
          Loading
        </v-progress-circular>
      </v-card>
    </div>
    <div v-else>
      <v-card
        height="150"
        width="150"
        class="d-flex align-center justify-center"
      >
        <v-img cover :src="checkImage(url)" />
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useImageModule } from "@/store";
import { onMounted, ref } from "vue";

const imageModule = useImageModule();
const props = defineProps({
  file: {
    type: String,
  },
});
const url = ref<string>("");

onMounted(async () => {
  if (props.file) {
    imageModule.image(props.file).then((response) => {
      url.value = response;
    });
    console.log(props.file);
  }
});

const checkImage = (url: string) => {
  if (url) return url;
  else return require("@/assets/images/ui/no-file-available.png");
};
</script>
