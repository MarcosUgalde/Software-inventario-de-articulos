export const login = {
  email: {
    validation: {
      required: true,
    },
  },
  username: {
    validation: {
      required: true,
    },
  },
  password: {
    validation: {
      required: true,
      minLength: 8,
    },
  },
  errors: {
    required: "This field is mandatory",
    minLength: "8 length at least is required",
  },
};
