<template>
  <v-sheet :height="props.height" :width="props.width">
    <div v-if="loading">
      <v-card
        :height="props.height"
        :width="props.width"
        class="d-flex align-center justify-center"
      >
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
import { onMounted, ref, watch } from "vue";
import { useImageModule } from "@/store";

const imageModule = useImageModule();
const props = defineProps<{
  trigger: boolean | undefined;
  id: number | undefined;
  file: string | File | null;
  height: number;
  width: number;
}>();

const url = ref<string>("");

const id = ref<number | undefined>(props.id);
const trigger = ref<boolean>(props.trigger);
const loading = ref<boolean>(false);

const emit = defineEmits(["update:trigger"]);

watch(
  () => trigger.value,
  async () => {
    getImage();
  }
);

watch(
  () => id.value,
  async () => {
    getImage();
  }
);

onMounted(async () => {
  loading.value = true;
  if (typeof props.file === "string") {
    await imageModule.image(props.file).then((response) => {
      loading.value = false;
      url.value = response;
    });
  } else {
    loading.value = false;
  }
});

const getImage = async () => {
  loading.value = true;
  if (typeof props.file === "string") {
    await imageModule.image(props.file).then((response) => {
      loading.value = false;
      url.value = response;
      emit("update:trigger", false);
    });
  } else {
    loading.value = false;
  }
};

const checkImage = (url: string) => {
  if (url) return url;
  else return require("@/assets/images/ui/no-file-available.png");
};
</script>
