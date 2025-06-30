import { View, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import CustomButton from "../Buttons/CustomButton";

function EmptyScreen({ CreateNewCategoryHandler }) {
  return (
    <View style={styles.rootContainer}>
      <View>
        <FontAwesome6 name="ghost" size={192} color="lightgray" />
      </View>
      <Text style={styles.text}>No categories yet</Text>
      <CustomButton onPress={CreateNewCategoryHandler}>
        Add Category
      </CustomButton>
    </View>
  );
}

export default EmptyScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 28,
  },
});
