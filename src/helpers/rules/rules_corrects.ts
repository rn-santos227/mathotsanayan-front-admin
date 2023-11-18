import { required } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    content: { required },
    solution: { required },
  };
});

export default rules;
