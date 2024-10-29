import { IParams } from "@/interfaces/params";
import ProductDetailView from "@/views/productDetail/ProducDetailView";

const Product: React.FC<{ params: IParams }> = ({ params }) => {
  return (
    <div>
      <ProductDetailView params={params} />
    </div>
  );
};

export default Product;
