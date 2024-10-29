import { IProduct } from "./product";

export interface IOrders {
  id: number;
  status: string;
  date: Date;
  products: IProduct[];
}
