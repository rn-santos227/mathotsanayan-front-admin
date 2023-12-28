import {
  required,
  email,
  maxLength,
  minLength,
  sameAs,
} from "@vuelidate/validators";
import { computed, ref } from "vue";

const rules_password = ref("");
const rules = computed(() => {
  return {
    name: {
      required,
      maxLength: maxLength(200),
    },
    email: {
      required,
      email,
      maxLength: maxLength(100),
    },
    contact_number: {
      required,
      maxLength: maxLength(50),
    },
    password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(6),
    },
    password_confirm: {
      sameAsPassword: sameAs(rules_password),
    },
  };
});

export { rules, rules_password };
