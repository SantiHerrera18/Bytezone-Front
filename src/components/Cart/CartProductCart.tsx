"use client";

/* eslint-disable @next/next/no-img-element */
import { IProductCart } from "@/interfaces/product";
import { usePathname } from "next/navigation";

const CartProductCart: React.FC<
  IProductCart & { removeProduct: ((id: number) => void) | undefined }
> = ({ id, name, price, image, removeProduct }) => {
  const handleRemove = () => {
    if (removeProduct) {
      removeProduct(id);
    }
  };

  const currentPath = usePathname();

  return (
    <div className="flex min-w-fit bg-white border shadow-lg border-gray-200 p-4 group gap-3 items-center w-full min-h-24 rounded-lg">
      <img src={image} alt={`${name} image`} className="min-w-16 w-16" />
      <div className="min-w-fit">
        <h2 className="text-nowrap font-medium  text-xl group-hover:ml-4 group-hover:text-purple-500 ease-in-out duration-200 ">
          {name}
        </h2>
        <button
          onClick={handleRemove}
          className="text-sm text-red-400 hover:underline orderButton"
          disabled={currentPath === "/dashboard/orders"}
        >
          Remove
        </button>
      </div>
      <h2 className="flex-shrink w-full min-w-fit text-end pr-5 font-bold">{`$ ${price}`}</h2>
    </div>
  );
};

export default CartProductCart;
