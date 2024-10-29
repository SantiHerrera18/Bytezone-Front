import { ICategoriesParams } from "@/interfaces/params";
import CategoriesView from "@/views/Categories/CategoriesView";

const Categories: React.FC<{ params: ICategoriesParams }> = ({ params }) => {
  return (
    <>
      <CategoriesView category={params.category} />
    </>
  );
};

export default Categories;
