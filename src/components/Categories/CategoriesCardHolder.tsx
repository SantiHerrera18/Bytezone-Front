import { IProduct } from "@/interfaces/product";
import Card from "../Home/Card";
import { getProductsByCategory } from "@/helpers/productHelpers";

const CategoriesCardHolder: React.FC<{ category: string }> = async ({
  category,
}) => {
  const products: IProduct[] = await getProductsByCategory(category);

  return (
    <div className="flex  flex-wrap p-10 justify-center w-fit gap-4 m-auto">
      {products?.length ? (
        products.map((product: IProduct, key: number) => {
          return <Card key={key} {...product} />;
        })
      ) : (
        <h2>No products found</h2>
      )}
    </div>
  );
};

export default CategoriesCardHolder;
