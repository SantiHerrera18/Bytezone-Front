/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Toast } from "./alert";
const APIURL = process.env.NEXT_PUBLIC_API_URL;

const dispatchOrder = async (token: string, products: number[]) => {
  try {
    const res = await fetch(`${APIURL}/orders`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create order");
    }

    Toast.fire({
      icon: "success",
      title: "Order created successfully",
    });

    return await res.json();
  } catch (error: any) {
    Toast.fire({
      icon: "error",
      title: "An error occurred while creating the order",
    });
  }
};

export default dispatchOrder;
