<template>
  <v-sheet :height="150" :width="150">
    <div v-if="imageModule.isLoading"></div>
    <div v-else></div>
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
</script>
