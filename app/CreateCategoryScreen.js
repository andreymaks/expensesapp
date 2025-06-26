import { Text, TextInput, View, StyleSheet, Keyboard } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import TabButton from "../components/Buttons/TabButton";
import IconList from "../components/IconList/IconList";

const tapOutside = Gesture.Tap()
  .maxDuration(250)
  .onEnd(() => Keyboard.dismiss());

function CreateCategoryScreen() {
  return (
    <GestureDetector gesture={tapOutside}>
      <View style={styles.rootContainer}>
        <View style={styles.buttonsContainer}>
          <TabButton>Cancel</TabButton>
          <TabButton>Save</TabButton>
        </View>
        <Text style={styles.title}>Create Category</Text>
        <TextInput
          style={styles.textInput}
          keyboardAppearance="dark"
          placeholder="Name of the Category"
          placeholderTextColor="#979899"
        />
        <Text style={styles.subtitle}>Icon</Text>
        <IconList />
      </View>
    </GestureDetector>
  );
}

export default CreateCategoryScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    marginVertical: 12,
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
});
