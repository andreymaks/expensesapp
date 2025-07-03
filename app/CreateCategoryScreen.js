import { Text, TextInput, View, StyleSheet, Keyboard } from "react-native";
import { useState, useContext } from "react";
import { useRouter } from "expo-router";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import SaveCancelBar from "../components/UI/SaveCancelBar";
import IconList from "../components/IconList/IconList";
import Title from "../components/UI/Title";
import { CategoriesContext } from "../contexts/CategoriesContext";

const tapOutside = Gesture.Tap()
  .maxDuration(250)
  .onEnd(() => Keyboard.dismiss());

function CreateCategoryScreen() {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [name, setName] = useState("");
  const canSave = name.trim() !== "" && selectedIcon !== null;

  const categoriesCtx = useContext(CategoriesContext);

  const router = useRouter();

  function onSaveHandler() {
    categoriesCtx.addCategory(name, selectedIcon);
    setName("");
    setSelectedIcon(null);
    router.back();
  }

  function onCancelHandler() {
    setName("");
    setSelectedIcon(null);
    router.back();
  }

  return (
    <GestureDetector gesture={tapOutside}>
      <View style={styles.rootContainer}>
        <SaveCancelBar
          canSave={canSave}
          onCancelHandler={onCancelHandler}
          onSaveHandler={onSaveHandler}
        />
        <Title>Create Category</Title>
        <TextInput
          style={styles.textInput}
          keyboardAppearance="dark"
          placeholder="Name of the Category"
          placeholderTextColor="#979899"
          onChangeText={setName}
          value={name}
        />
        <Text style={styles.subtitle}>Icon</Text>
        <IconList
          selectedIcon={selectedIcon}
          setSelectedIcon={setSelectedIcon}
        />
      </View>
    </GestureDetector>
  );
}

export default CreateCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  subtitle: {
    color: "white",
    fontSize: 32,
    marginLeft: 20,
    marginVertical: 24,
  },
  textInput: {
    backgroundColor: "#212224",
    marginVertical: 12,
    marginHorizontal: 20,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: "white",
    fontSize: 20,
  },
});
