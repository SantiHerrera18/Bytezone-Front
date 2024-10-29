"use client";

import { ILoginFormValues } from "@/interfaces/users";
import { Formik } from "formik";
import { LoginValidationSchema } from "@/helpers/validations";
import LoginFormikForm from "./LoginFormik";
import loginUser from "@/helpers/loginUser";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LoginForm = () => {
  const router = useRouter();
  const initialValues: ILoginFormValues = {
    email: "",
    password: "",
  };
  return (
    <div className="w-80 min-w-56">
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const { token, user } = await loginUser(values);
          Cookies.set("userData", JSON.stringify({ token, user }), {
            expires: 1,
          });
          resetForm();
          setTimeout(() => {
            router.push("/");
          }, 1000);
        }}
      >
        <LoginFormikForm />
      </Formik>
    </div>
  );
};

export default LoginForm;
