import { required, email, minLength } from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  };
});

export default rules;
