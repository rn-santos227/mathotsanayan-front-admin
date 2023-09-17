import {
  required,
  email,
  maxLength,
  minLength,
  sameAs,
} from "@vuelidate/validators";
import { computed } from "vue";

const rules = computed(() => {
  return {
    first_name: {
      required,
      maxLength: maxLength(50),
    },
    middle_name: { maxLength: maxLength(50) },
    last_name: {
      required,
      maxLength: maxLength(50),
    },
    suffix: { maxLength: maxLength(5) },
    password: {
      required,
      maxLength: maxLength(50),
      minLength: minLength(6),
    },
    password_confirm: {
      sameAsPassword: sameAs("password"),
    },
    email: {
      required,
      email,
      maxLength: maxLength(50),
    },
    contact_number: {
      required,
      maxLength: maxLength(50),
    },
    school: {
      required,
    },
  };
});

export default rules;
