"use client";

import { Formik } from "formik";
import { RegisterValidationSchema } from "@/helpers/validations";
import { IRegisterFormValues } from "@/interfaces/users";
import FormikRegisterForm from "./FormikRegister";
import registerUser from "@/helpers/registerUser";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const initialValues: IRegisterFormValues = {
    name: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterValidationSchema}
      onSubmit={async (values, { resetForm }) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { confirmPassword, ...newValues } = values;
        await registerUser(newValues);
        resetForm();
        router.push("/login");
      }}
    >
      <FormikRegisterForm />
    </Formik>
  );
};

export default RegisterForm;
