/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRegisterFormValues } from "@/interfaces/users";
import { Toast } from "./alert";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

const registerUser = async (userData: IRegisterFormValues) => {
  try {
    const res = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (res.ok) {
      Toast.fire({
        icon: "success",
        title: "User registered successfully",
      });
    } else {
      const errorData = await res.json();

      Toast.fire({
        icon: "error",
        title: errorData.message || "User cannot be registered",
      });
    }
  } catch (error: any) {
    // Manejo del error de fetch o cualquier otro error
    console.error("Fetch error:", error);

    Toast.fire({
      icon: "error",
      title: error.message || "Something went wrong",
    });
  }
};

export default registerUser;
