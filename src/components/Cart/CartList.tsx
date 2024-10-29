"use client";

import { IProductCart } from "@/interfaces/product";
import { useEffect, useState } from "react";
import CartProductCart from "./CartProductCart";
import { getTotal } from "@/helpers/cartProducts";
import dispatchOrder from "@/helpers/dispatchOrder";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { confirmOrder } from "@/helpers/alert";
import Link from "next/link";

const Cart: React.FC<{ token: string }> = ({ token }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  const handlePay = async () => {
    confirmOrder().then(async (result) => {
      if (!result.isConfirmed) {
        setTimeout(() => {
          router.push("/");
        }, 800);
      } else {
        const productsId = cartProducts?.map(
          (product: IProductCart) => product.id
        );
        await dispatchOrder(token, productsId);
        localStorage.removeItem("cartProducts");
        setTotalPrice(0);
        setCartProducts([]);
        Swal.fire({
          title: "Order received!",
          text: "Your order will be processed.",
          icon: "success",
        });
        setTimeout(() => {
          router.refresh();
          router.push("dashboard/orders");
          router.refresh();
        }, 1500);
      }
    });
  };

  const removeProduct = (id: number) => {
    const updatedCart = cartProducts.filter(
      (product: IProductCart) => product.id !== id
    );
    setCartProducts(updatedCart);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    const total = getTotal(updatedCart);
    setTotalPrice(total);
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    if (cart) {
      setCartProducts(cart);
      const total = getTotal(cart);
      setTotalPrice(total);
    }
  }, []);

  return (
    <div className="flex flex-wrap items-center gap-9 sm:flex-wrap lg:flex-nowrap md:flex-nowrap min-h-fit w-2/3 p-5 rounded-lg m-auto h-96 justify-center mt-9 mb-32">
      <div className="flex flex-col px-4 justify-center gap-2 items-center h-full w-3/4 min-w-fit pt-16 shadow-xl overflow-y-auto">
        {cartProducts.length ? (
          cartProducts.map((product: IProductCart, key: number) => {
            return (
              <CartProductCart
                key={key}
                {...product}
                removeProduct={removeProduct}
              />
            );
          })
        ) : (
          <p className="self-center  text-lg font-semibold h-full flex flex-col justify-center">
            No items in your cart
          </p>
        )}
      </div>
      <div className="w-1/3 min-w-48 flex flex-col pb-4 px-2 bg-white h-2/3 rounded-xl shadow-2xl justify-center items-center text-nowrap">
        <div className="flex-col flex justify-between py-2 pt-4 items-center flex-shrink h-full">
          <h1 className=" inline-block font-semibold text-lg w-full ">
            Order Summary
          </h1>
          <h1 className="font-semibold">
            TOTAL: <span className="font-medium">$ {totalPrice}</span>
          </h1>
        </div>
        <button
          disabled={!cartProducts.length}
          onClick={handlePay}
          className="w-4/5 min-w-fit p-2 bg-purple-700  rounded-xl text-white disabled:bg-slate-300"
        >
          Procced to pay
        </button>
        <span className="my-1">or</span>
        <Link href="/" className="text-sm text-purple-500">
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
