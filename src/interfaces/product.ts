export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image: string;
  categoryId?: number;
}

export interface IProductCart {
  token?: string;
  id: number;
  name: string;
  description?: string;
  price: number;
  stock?: number;
  image: string;
  categoryId?: number;
}
