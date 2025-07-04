import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { useRouter } from "expo-router";
import EmptyScreen from "../components/MainScreen/EmptyScreen";
import TotalExpenses from "../components/MainScreen/TotalExpenses";
import CategoryList from "../components/MainScreen/CategoryList";
import AddCategoryItem from "../components/MainScreen/AddCategoryItem";
import CustomButton from "../components/Buttons/CustomButton";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { FontAwesome6 } from "@expo/vector-icons";

function MainScreen() {
  const router = useRouter();
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  function CreateCategoryHandler() {
    router.push("/CreateCategoryScreen");
  }

  function CreateExpenseHandler() {
    router.push("/CreateExpenseScreen");
  }

  if (categories.length === 0) {
    return <EmptyScreen CreateCategoryHandler={CreateCategoryHandler} />;
  }

  return (
    <View style={styles.rootContainer}>
      <TotalExpenses />
      <AddCategoryItem CreateNewCategoryHandler={CreateCategoryHandler} />
      <CategoryList />
      <View style={styles.addExpenseButtonContainer}>
        <CustomButton
          style={styles.addExpenseButton}
          pressedStyle={styles.addExpenseButtonPressed}
          onPress={CreateExpenseHandler}
        >
          <FontAwesome6 name="plus" size={40} color="white" />
        </CustomButton>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  addExpenseButtonContainer: {
    position: "absolute",
    bottom: 0,
    marginBottom: 16,
  },
  addExpenseButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    paddingVertical: 0,
    paddingHorizontal: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  addExpenseButtonPressed: {
    // backgroundColor: "rgba(255,255,255,0.75)",
    opacity: 1,
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
