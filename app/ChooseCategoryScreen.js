import { View, Text, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ChosenCategoryContext } from "../contexts/ChosenCategoryContext";
import SaveCancelBar from "../components/Buttons/SaveCancelBar";
import Title from "../components/Title";
import ChooseCategoryItem from "../components/ChooseCategoryList/ChooseCategoryItem";
import ChooseCategoryList from "../components/ChooseCategoryList/ChooseCategoryList";

function ChooseCategoryScreen() {
  const { chosenCategory, setChosenCategory } = useContext(
    ChosenCategoryContext
  );
  const router = useRouter();
  function onSaveHandler() {
    router.back();
  }

  function onCancelHandler() {
    router.back();
  }
  return (
    <View style={styles.rootContainer}>
      <SaveCancelBar
        onCancelHandler={onCancelHandler}
        onSaveHandler={onSaveHandler}
      />
      <Title>Choose Category</Title>
      <ChooseCategoryList
        renderItem={({ item }) => <ChooseCategoryItem category={item} />}
      />
    </View>
  );
}

export default ChooseCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
