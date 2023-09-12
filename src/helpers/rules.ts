const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RULES = {
  REQUIRED: (value: string) => !!value || "Required.",
  MIN: (value: string) => value.length >= 6 || "Min of six characters.",
  EMAIL: (value: string) => emailRegex.test(value) || "Email is Invalid.",
};

export default RULES;
