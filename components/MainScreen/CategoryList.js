import { FlatList } from "react-native";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import CategoryItem from "./CategoryItem";

function CategoryList() {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CategoryItem category={item} />}
      contentContainerStyle={{ alignItems: "center" }}
      style={{ width: "100%" }}
    />
  );
}

export default CategoryList;
