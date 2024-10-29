"use client";

import { addProduct } from "@/helpers/cartProducts";
import { IProductCart } from "@/interfaces/product";
import { useRouter } from "next/navigation";

const AddToCartButton: React.FC<IProductCart> = ({
  id,
  token,
  name,
  image,
  price,
}) => {
  const router = useRouter();
  const handleClick = () => {
    addProduct(id, name, image, price);
    setTimeout(() => {
      router.push("/cart");
    }, 1500);
  };

  return (
    <button
      onClick={handleClick}
      disabled={!token}
      className={`self-center bg-purple-600 py-3 text-white font-semibold px-5 w-full rounded-lg ${
        !token ? "hover:bg-gray-300" : " hover:bg-purple-500"
      } ease-in-out duration-150`}
    >
      {!token ? <span>You must be logged to add items</span> : "ADD TO CART"}
    </button>
  );
};

export default AddToCartButton;
