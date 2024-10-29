import { Form } from "formik";

import Link from "next/link";
import FormInput from "../FormInput";

const FormikRegisterForm = () => {
  return (
    <Form className="p-5 border flex flex-col gap-3 rounded-2xl shadow-lg  bg-purple-200 mt-6">
      <h1 className="text-2xl font-extrabold self-center inline-block w-fit">
        REGISTER
      </h1>
      <div className="flex gap-2">
        <div>
          <FormInput text="name" type="text" />
          <FormInput text="phone" type="number" />
          <FormInput text="address" type="text" />
        </div>
        <div>
          <FormInput text="email" type="email" />
          <FormInput text="password" type="password" />
          <FormInput text="confirmPassword" type="password" />
        </div>
      </div>

      <button
        type="submit"
        className="text-xl justify-self-center self-center m-2 bg-purple-600 px-3 py-2 rounded-lg text-white w-1/3"
      >
        Register
      </button>
      <p className="m-auto text-xs">
        Do you have an account?{"  "}
        <Link href="/login" className="text-blue-500 text-sm">
          Login
        </Link>
      </p>
    </Form>
  );
};

export default FormikRegisterForm;
