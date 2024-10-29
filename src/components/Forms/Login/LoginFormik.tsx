/* eslint-disable react/no-unescaped-entities */
import { Form } from "formik";

import Link from "next/link";
import FormInput from "../FormInput";

const LoginFormikForm = () => {
  return (
    <Form className="p-5 border flex flex-col rounded-2xl shadow-lg bg-purple-200">
      <h1 className="self-center text-2xl font-extrabold">LOGIN</h1>
      <FormInput text="email" type="text" />
      <FormInput text="password" type="password" />
      <button
        type="submit"
        className="text-xl justify-self-center self-center m-2 mb-3 bg-purple-700 px-3 py-2 rounded-lg text-white w-1/3"
      >
        Login
      </button>
      <p className="m-auto text-xs">
        Don't have an account?{"  "}
        <Link href="/register" className="text-blue-500 text-sm">
          Register
        </Link>
      </p>
    </Form>
  );
};

export default LoginFormikForm;
