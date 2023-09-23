import { required, maxLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    name: { required, maxLength: maxLength(200) },
    step: { required },
    subject: { required },
  };
});

export default rules;
