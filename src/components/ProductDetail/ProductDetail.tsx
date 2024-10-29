/* eslint-disable @next/next/no-img-element */
import { getCookiesServer } from "@/helpers/cookies";
import { IProduct } from "@/interfaces/product";
import AddToCartButton from "./AddButton";

const ProductDetail: React.FC<IProduct> = ({
  id,
  name,
  description,
  price,
  stock,
  image,
}) => {
  const { token } = getCookiesServer();
  return (
    <div className=" p-10 ">
      <div className="m-auto p-6  px-10 rounded-xl flex gap-10 justify-center bg-white w-fit items-center">
        <div className="h-full bg-white">
          <img src={image} alt={name} className="w-96" />
        </div>
        <div className="w-60 flex flex-col">
          <h2 className="font-semibold text-5xl pb-3 border-b-2 border-black w-full mb-3">
            {name}
          </h2>
          <p className="text-justify mb-3 text-gray-600 text-sm">
            {description}
          </p>
          <span className="inline-block w-fit">
            Stock:{" "}
            <h2 className="text-xl font-semibold w-fit inline-block">
              {stock}
            </h2>
          </span>
          <h2 className="text-2xl font-semibold mb-4 self-end mr-2">{`$ ${price}`}</h2>
          <AddToCartButton
            token={token}
            id={id}
            name={name}
            image={image}
            price={price}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
