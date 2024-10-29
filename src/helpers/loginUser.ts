/* eslint-disable @typescript-eslint/no-explicit-any */
import { ILoginFormValues } from "@/interfaces/users";
import { Toast } from "./alert";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

const loginUser = async (userData: ILoginFormValues) => {
  try {
    const res = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      Toast.fire({
        icon: "success",
        title: "Logged sucessfully",
      });
      return res.json();
    } else {
      const errorData = await res.json();
      Toast.fire({
        icon: "error",
        title: errorData.message,
      });
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export default loginUser;
