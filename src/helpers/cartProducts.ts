"use client";

import { IProduct, IProductCart } from "@/interfaces/product";
import { Toast } from "./alert";

export const addProduct = async (
  id: number,
  name: string,
  image: string,
  price: number
) => {
  const newProduct: IProductCart = {
    id,
    name,
    image,
    price,
  };
  const cartProducts: IProduct[] = JSON.parse(
    localStorage.getItem("cartProducts") || "[]"
  );
  const validateId = cartProducts.some((product) => {
    if (product.id === id) return true;
    return false;
  });
  if (!validateId) {
    cartProducts.push(newProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    Toast.fire({
      icon: "success",
      title: "Item added to cart",
    });
  } else {
    Toast.fire({
      icon: "warning",
      title: "Item already exists in your cart",
    });
  }
};

export const getTotal = (cart: IProductCart[]) => {
  const prices: number[] = cart.map((product: IProductCart) => product.price);
  const total = prices.reduce((a, b) => a + b, 0);
  return total;
};
