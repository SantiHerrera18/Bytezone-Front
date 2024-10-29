import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from "@/helpers/productHelpers";
import { IParams } from "@/interfaces/params";
import { IProduct } from "@/interfaces/product";

const ProductDetailView: React.FC<{ params: IParams }> = async ({ params }) => {
  const product: IProduct = await getProductById(params.productId);
  return (
    <>
      <ProductDetail {...product} />
    </>
  );
};

export default ProductDetailView;
