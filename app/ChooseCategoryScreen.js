import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useContext, useState } from "react";
import { ChosenCategoryContext } from "../contexts/ChosenCategoryContext";
import SaveCancelBar from "../components/UI/SaveCancelBar";
import Title from "../components/UI/Title";
import ChooseCategoryList from "../components/ChooseCategoryList/ChooseCategoryList";

function ChooseCategoryScreen() {
  const { chosenCategory, setChosenCategory } = useContext(
    ChosenCategoryContext
  );

  const [newCategory, setNewCategory] = useState(chosenCategory);

  const router = useRouter();
  function onSaveHandler() {
    setChosenCategory(newCategory);
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
      <ChooseCategoryList newCategory={newCategory} onSelect={setNewCategory} />
    </View>
  );
}

export default ChooseCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
