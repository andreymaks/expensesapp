import { FlatList } from "react-native";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ChooseCategoryItem from "./ChooseCategoryItem";

function ChooseCategoryList() {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChooseCategoryItem category={item} />}
      contentContainerStyle={{ alignItems: "center" }}
      style={{ width: "100%" }}
    />
  );
}

export default ChooseCategoryList;
