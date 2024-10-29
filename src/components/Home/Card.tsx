/* eslint-disable @next/next/no-img-element */
import { IProduct } from "@/interfaces/product";
import Link from "next/link";

const Card: React.FC<IProduct> = ({ id, name, price, image }) => {
  return (
    <Link
      href={`/product/${id}`}
      className="shadow-lg border gap-x-0 bg-white max-w-full flex flex-col relative items-center justify-center w-52 rounded-lg group hover:w-56 m-auto ease-in-out duration-300"
    >
      <div className="min-h-36 h-60 p-2 w-full flex justify-center items-center">
        <img src={image} alt={name} className="w-25 max-h-full" />
      </div>
      <div className="bg-gradient-to-tr from-purple-800 to-purple-400 w-full text-center rounded-b-lg p-1 pb-2 group-hover:text-purple-50 ease-in-out duration-300">
        <h2 className="font-bold">{name}</h2>
        <h2 className="font-sans text-xl">
          <span className="">$</span> {price}.00
        </h2>
      </div>
    </Link>
  );
};

export default Card;
