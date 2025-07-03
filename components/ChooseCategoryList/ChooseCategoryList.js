import { FlatList } from "react-native";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { ChosenCategoryContext } from "../../contexts/ChosenCategoryContext";
import ChooseCategoryItem from "./ChooseCategoryItem";

function ChooseCategoryList({ newCategory, onSelect }) {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;

  const { chosenCategory } = useContext(ChosenCategoryContext);

  return (
    <FlatList
      data={categories}
      extraData={chosenCategory}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ChooseCategoryItem
          category={item}
          active={newCategory.id === item.id}
          onSelect={() => onSelect(item)}
        />
      )}
      contentContainerStyle={{ alignItems: "center" }}
      style={{ width: "100%" }}
    />
  );
}

export default ChooseCategoryList;
