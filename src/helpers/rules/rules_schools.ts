import { required, maxLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    name: { required, maxLength: maxLength(200) },
    contact_number: { required, minLength: maxLength(50) },
  };
});

export default rules;
