import { Text, TextInput, View, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

function CreateCategoryScreen() {
  return (
    <>
      <Text style={styles.text}>Create New Category</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Name of the Category"
        placeholderTextColor="#979899"
      />
      <View style={styles.buttonsContainer}>
        <CustomButton>Cancel</CustomButton>
        <CustomButton>Save</CustomButton>
      </View>
    </>
  );
}

export default CreateCategoryScreen;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  textInput: {
    backgroundColor: "#212224",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
