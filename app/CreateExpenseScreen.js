import { View, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import { useContext, useState } from "react";
import { useRouter } from "expo-router";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { FontAwesome6 } from "@expo/vector-icons";
import SaveCancelBar from "../components/Buttons/SaveCancelBar";
import CategoryIcon from "../components/CategoryIcon";
import Title from "../components/Title";

const tapOutside = Gesture.Tap()
  .maxDuration(250)
  .onEnd(() => Keyboard.dismiss());

function CreateExpenseScreen() {
  const categoriesCtx = useContext(CategoriesContext);
  const categories = categoriesCtx.categories;
  const category = categories[0];
  const [isFocused, setFocus] = useState(false);
  const router = useRouter();

  function onSaveHandler() {
    router.back();
  }

  function onCancelHandler() {
    router.back();
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
            placeholder={isFocused ? "" : "0"}
            placeholderTextColor="white"
            keyboardType="decimal-pad"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </View>

        <View style={styles.categoryOuterContainer}>
          <View style={styles.categoryContainer}>
            <CategoryIcon iconName={category.icon} />
            <Text
              style={styles.categoryName}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {category.name}
            </Text>
            <FontAwesome6
              style={styles.chevronIcon}
              name="chevron-right"
              size={24}
              color="#737373"
            />
          </View>
        </View>

        <View style={styles.noteInputContainer}>
          <TextInput
            multiline
            style={styles.noteInput}
            placeholder="Note (optional)"
            keyboardAppearance="dark"
            placeholderTextColor="#979899"
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
