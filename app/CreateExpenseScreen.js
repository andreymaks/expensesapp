import { View, StyleSheet, Keyboard } from "react-native";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ChosenCategoryContext } from "../contexts/ChosenCategoryContext";
import AmountInput from "../components/CreateExpenseScreen/AmountInput";
import SaveCancelBar from "../components/UI/SaveCancelBar";
import LoadingScreen from "../components/UI/LoadingScreen";
import Title from "../components/UI/Title";
import NoteInput from "../components/CreateExpenseScreen/NoteInput";
import ChosenCategoryContainer from "../components/CreateExpenseScreen/ChosenCategoryContainer";

function CreateExpenseScreen() {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  const [isFocused, setIsFocused] = useState(null);
  const { chosenCategory, setChosenCategory } = useContext(
    ChosenCategoryContext
  );
  const router = useRouter();

  useEffect(() => {
    if (!chosenCategory && categories.length > 0) {
      setChosenCategory(categories[0]);
    }
  }, [categories]);

  const tapOutside = Gesture.Tap()
    .maxDuration(250)
    .enabled(isFocused !== null)
    .onEnd(() => Keyboard.dismiss());

  function onSaveHandler() {
    router.back();
  }

  function onCancelHandler() {
    router.back();
  }

  function chooseCategoryHandler() {
    router.push("/ChooseCategoryScreen");
  }

  if (!chosenCategory) {
    return <LoadingScreen onCancel={onCancelHandler} onSave={onSaveHandler} />;
  }

  return (
    <GestureDetector gesture={tapOutside}>
      <View style={styles.rootContainer}>
        <SaveCancelBar
          onCancelHandler={onCancelHandler}
          onSaveHandler={onSaveHandler}
        />
        <Title>Add Expense</Title>
        <AmountInput setIsFocused={setIsFocused} isFocused={isFocused} />

        <ChosenCategoryContainer
          isFocused={isFocused}
          chooseCategoryHandler={chooseCategoryHandler}
          chosenCategory={chosenCategory}
        />

        <NoteInput setIsFocused={setIsFocused} />
      </View>
    </GestureDetector>
  );
}

export default CreateExpenseScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
