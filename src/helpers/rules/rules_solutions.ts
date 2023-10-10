import { required } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    solutions: { required },
    file: { required },
  };
});

export default rules;
