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
        :height="props.height"
        :width="props.width"
        class="d-flex align-center justify-center"
      >
        <v-img cover :src="checkImage(url)" />
      </v-card>
    </div>
  </v-sheet>
</template>

<script setup lang="ts">
import { useImageModule } from "@/store";
import { onMounted, ref, watch } from "vue";

const imageModule = useImageModule();
const props = defineProps<{
  trigger: boolean | undefined;
  id: number | undefined;
  file: string | File | null;
  height: number;
  width: number;
}>();
const url = ref<string>("");

const emit = defineEmits(["update:trigger"]);

watch(
  () => props.trigger,
  async (_url) => {
    if (_url) {
      if (typeof props.file === "string") {
        await imageModule.image(props.file).then((response) => {
          url.value = response;
          emit("update:trigger", false);
        });
      }
    }
  }
);

watch(
  () => props.id,
  async () => {
    if (typeof props.file === "string") {
      await imageModule.image(props.file).then((response) => {
        url.value = response;
        emit("update:trigger", false);
      });
    }
  }
);

onMounted(async () => {
  if (typeof props.file === "string") {
    await imageModule.image(props.file).then((response) => {
      url.value = response;
    });
  }
});

const checkImage = (url: string) => {
  if (url) return url;
  else return require("@/assets/images/ui/no-file-available.png");
};
</script>
