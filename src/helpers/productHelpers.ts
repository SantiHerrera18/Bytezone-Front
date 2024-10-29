/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/interfaces/product";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${APIURL}/products`, {
      next: { revalidate: 1500 },
    });
    const products = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductById = async (id: string): Promise<IProduct> => {
  try {
    const products = await getProducts();
    const newProduct = products.find(
      (product) => product.id?.toString() === id
    );
    if (!newProduct) throw new Error("Cannot find prodcut");
    return newProduct;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductsByCategory = async (
  category: string
): Promise<IProduct[]> => {
  try {
    const products = await getProducts();

    let filteredProducts = products.filter(
      (product) => product.categoryId?.toString() === category
    );
    if (!filteredProducts.length) {
      filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(category.toLowerCase());
      });

      // throw new Error("Cannot find product");
    }

    return filteredProducts;
  } catch (error: any) {
    throw new Error(error);
  }
};
