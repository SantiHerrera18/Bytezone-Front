import CategoriesCardHolder from "@/components/Categories/CategoriesCardHolder";

const CategoriesView: React.FC<{ category: string }> = ({ category }) => {
  return (
    <div>
      <CategoriesCardHolder category={category} />
    </div>
  );
};

export default CategoriesView;
