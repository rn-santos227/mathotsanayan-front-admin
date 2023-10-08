import { required, maxLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    content: { required, maxLength: maxLength(200) },
    type: { required },
    file: { required },
  };
});

export default rules;
