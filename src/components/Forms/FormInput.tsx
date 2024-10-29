import { capitalizeFirstLetter } from "@/helpers/validations";
import { Field, ErrorMessage } from "formik";

const FormInput: React.FC<{ text: string; type: string }> = ({
  text,
  type,
}) => {
  return (
    <div className="flex flex-col m-2">
      <label htmlFor={text} className="inline-block text-lg mb-1">
        {text === "confirmPassword"
          ? "Confirm Password"
          : capitalizeFirstLetter(text)}
      </label>
      <Field
        id={text}
        name={text}
        type={type}
        className="rounded-lg px-2 py-1 outline outline-1 focus:outline-2 focus:outline-purple-700 outline-slate-400"
      />
      <ErrorMessage
        name={text}
        component="div"
        className="text-red-600 text-xs"
      />
    </div>
  );
};

export default FormInput;
