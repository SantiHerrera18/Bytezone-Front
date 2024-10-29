/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from "./alert";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

const getOrders = async (token: string) => {
  try {
    const res = await fetch(`${APIURL}/users/orders`, {
      headers: {
        "Content-Type": "application/json",
        cache: "no-store",
        Authorization: token,
      },
    });
    if (res.ok) {
      return res.json();
    }
  } catch (error: any) {
    Toast.fire({
      icon: "error",
      title: "Failed to get orders",
    });
    throw new Error(error);
  }
};

export default getOrders;
