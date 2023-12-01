<template>
  <editor-content :editor="editor" />
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted, watch } from "vue";
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits(["update:modelValue"]);
let editor: Editor | undefined = undefined;

watch(
  () => props.modelValue,
  (value: string) => {
    const isSame = editor?.getHTML() === value;

    if (!isSame) {
      editor?.commands.setContent(value, false);
    }
  }
);

onMounted(() => {
  editor = new Editor({
    extensions: [StarterKit],
    content: props.modelValue,
    onUpdate: () => {
      emit("update:modelValue", editor?.getHTML());
    },
  });
});

onBeforeMount(() => {
  editor?.destroy();
});
</script>
