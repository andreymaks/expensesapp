import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { useRouter } from "expo-router";
import EmptyScreen from "../components/MainScreen/EmptyScreen";
import TotalExpenses from "../components/MainScreen/TotalExpenses";
import CategoryList from "../components/MainScreen/CategoryList";
import AddCategoryItem from "../components/MainScreen/AddCategoryItem";
import { CategoriesContext } from "../contexts/CategoriesContext";

function MainScreen() {
  const router = useRouter();
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  function CreateNewCategoryHandler() {
    router.push("/CreateCategoryScreen");
  }

  if (categories.length === 0) {
    return <EmptyScreen CreateNewCategoryHandler={CreateNewCategoryHandler} />;
  }

  return (
    <View style={styles.rootContainer}>
      <TotalExpenses />
      <AddCategoryItem CreateNewCategoryHandler={CreateNewCategoryHandler} />
      <CategoryList />
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
});
