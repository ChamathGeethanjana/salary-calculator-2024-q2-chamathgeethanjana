import * as Yup from "yup";

export const VALIDATION = {
  earningValidation: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    amount: Yup.number()
      .required("Amount is required")
      .min(1, "Amount must be greater than 0"),
  }),
};
