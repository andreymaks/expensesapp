import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Pressable,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ChosenCategoryContext } from "../contexts/ChosenCategoryContext";
import { FontAwesome6 } from "@expo/vector-icons";
import SaveCancelBar from "../components/Buttons/SaveCancelBar";
import CategoryIcon from "../components/CategoryIcon";
import Title from "../components/Title";

function CreateExpenseScreen() {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  const [isFocused, setFocus] = useState(null);
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
    console.log("pressed");
    router.push("/ChooseCategoryScreen");
  }

  return (
    <GestureDetector gesture={tapOutside}>
      <View style={styles.rootContainer}>
        <SaveCancelBar
          onCancelHandler={onCancelHandler}
          onSaveHandler={onSaveHandler}
        />
        <Title>Add Expense</Title>
        <View style={styles.amountInputContainer}>
          <Text style={styles.currencyText}>$</Text>
          <TextInput
            style={styles.amountInput}
            keyboardAppearance="dark"
            placeholder={isFocused === "amount" ? "" : "0"}
            placeholderTextColor="white"
            keyboardType="decimal-pad"
            onFocus={() => setFocus("amount")}
            onBlur={() => setFocus(null)}
          />
        </View>

        <View
          style={styles.categoryOuterContainer}
          pointerEvents={isFocused ? "none" : "auto"}
        >
          <Pressable
            onPress={chooseCategoryHandler}
            style={styles.categoryContainer}
          >
            <CategoryIcon iconName={chosenCategory.icon} />
            <Text
              style={styles.categoryName}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {chosenCategory.name}
            </Text>
            <FontAwesome6
              style={styles.chevronIcon}
              name="chevron-right"
              size={24}
              color="#737373"
            />
          </Pressable>
        </View>

        <View style={styles.noteInputContainer}>
          <TextInput
            multiline
            style={styles.noteInput}
            placeholder="Note (optional)"
            keyboardAppearance="dark"
            placeholderTextColor="#979899"
            onFocus={() => setFocus("note")}
            onBlur={() => setFocus(null)}
          />
        </View>
      </View>
    </GestureDetector>
  );
}

export default CreateExpenseScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  amountInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  currencyText: {
    fontSize: 50,
    color: "white",
  },
  amountInput: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: "white",
    fontSize: 50,
  },
  noteInputContainer: {
    alignItems: "center",
    flex: 1,
  },
  noteInput: {
    width: "90%",
    height: "20%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 12,
    backgroundColor: "#212224",
    borderRadius: 12,
    color: "white",
    textAlign: "left",
    fontSize: 16,
  },

  categoryOuterContainer: {
    alignItems: "center",
    marginVertical: 12,
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#212224",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: "90%",
  },
  categoryName: {
    color: "white",
    fontSize: 20,
    flexShrink: 1,
    marginHorizontal: 8,
  },
  chevronIcon: {
    marginLeft: "auto",
    marginRight: 4,
  },
});
