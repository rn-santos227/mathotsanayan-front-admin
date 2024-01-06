<template>
  <div>
    <div class="d-flex flex-row">
      <ImageComponent
        class="ma-4 flex-1-0"
        v-bind:id="state.id"
        v-bind:file="state.file"
        v-bind:height="350"
        v-bind:width="350"
        v-model:trigger="trigger"
      />
      <OptionComponent
        class="flex-1-1-100"
        v-model:content="state.content"
        v-model:file="state.file"
        v-bind:title="'Update Option'"
        :index="index"
        :check="checkCount()"
        @remove="remove"
        ref="validate"
      />
    </div>

    <v-divider class="mb-2"></v-divider>
    <v-btn color="light-blue-darken-2" block @click.prevent="submit">
      Submit Update Option
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, reactive } from "vue";
import { useModuleModule } from "@/store";
import { useOptionModule } from "@/store";

import ImageComponent from "@/components/ImageComponent.vue";
import OptionComponent from "@/components/questions/OptionComponent.vue";

import Question from "@/types/Question";
import Option from "@/types/Option";

const trigger = ref<boolean>(false);
const validate = ref({
  validate: (): boolean => {
    return false;
  },
  reset: () => {
    return null;
  },
});

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

const emit = defineEmits(["close"]);

const props = defineProps<{
  question: Question;
  option: Option;
  index: number;
}>();

const state = reactive<Option>({ ...props.option });

const checkCount = (): boolean => {
  return props.question.options.length > 1;
};

const submit = async () => {
  let errors = false;
  if (validate.value.validate()) errors = true;
  if (errors) return;

  try {
    await useOptionModule()
      .update(state)
      .then((response) => {
        if (response.length > 0) {
          useModuleModule().setQuestionsModule(props.index, response);
          success.value.show("Option has been successfully updated.");
          emit("close");
        } else {
          error.value.show("The server has not able to process the request.");
        }
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};

const remove = async () => {
  try {
    await useOptionModule()
      .delete(state)
      .then((response) => {
        if (response.length > 0) {
          useModuleModule().setQuestionsModule(props.index, response);
          success.value.show("Option has been successfully removed.");
          emit("close");
        } else {
          error.value.show("The server has not able to process the request.");
        }
      });
  } catch (e) {
    error.value.show("The server has not able to process the request.");
  }
};
</script>
