import { required } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    content: { required },
  };
});

export default rules;
