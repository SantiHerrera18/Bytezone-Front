import * as Yup from "yup";

export const capitalizeFirstLetter = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1);
};

export const LoginValidationSchema = Yup.object({
  email: Yup.string().email().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

export const RegisterValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email().required("Eamil is required"),
  phone: Yup.number().required("Phone number is required"),
  password: Yup.string()
    .min(5, "Must be at least 5 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords don't match")
    .required("Confirm password is required"),
  address: Yup.string().required("Adress is required"),
});
