import { View, Text, StyleSheet } from "react-native";
import { useState, useContext } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TotalExpenses from "../components/TotalExpenses";
import CustomButton from "../components/Buttons/CustomButton";
import { CategoriesContext } from "../contexts/CategoriesContext";

function MainScreen() {
  const router = useRouter();
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  function CreateNewCategoryHandler() {
    router.push("/CreateCategoryScreen");
  }

  if (categories.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <TotalExpenses />
        <View style={styles.iconContainer}>
          <FontAwesome6 name="ghost" size={192} color="lightgray" />
        </View>
        <Text style={styles.text}>No categories yet</Text>
        <CustomButton onPress={CreateNewCategoryHandler}>
          Add Category
        </CustomButton>
      </View>
    );
  }

  return (
    <View style={styles.rootContainer}>
      <TotalExpenses />
      <View>
        <Text style={styles.text}>{categories[0].name}</Text>
      </View>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 64,
    marginBottom: 16,
  },
  text: {
    color: "white",
    fontSize: 28,
  },
});
