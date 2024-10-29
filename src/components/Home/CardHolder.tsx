import Card from "@/components/Home/Card";
import { getProducts } from "@/helpers/productHelpers";
import { IProduct } from "@/interfaces/product";

const CardHolder = async () => {
  const products: IProduct[] = await getProducts();
  return (
    <div className="grid lg:grid-cols-3 gap-4 flex-wrap p-10 justify-center w-4/5 lg:w-2/3 sm:grid-cols-2 md:grid-cols-3 m-auto">
      {products &&
        products.map((product: IProduct, key: number) => {
          return <Card key={key} {...product} />;
        })}
    </div>
  );
};

export default CardHolder;
