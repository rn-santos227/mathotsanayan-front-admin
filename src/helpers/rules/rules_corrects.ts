import { required } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    content: { required },
    solution: { required },
    file: { required },
  };
});

export default rules;