import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

function AddCategoryItem({ CreateNewCategoryHandler }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.addCategoryContainer,
        pressed && styles.pressed,
      ]}
      onPress={CreateNewCategoryHandler}
    >
      <View style={styles.iconContainer}>
        <FontAwesome6 name="folder-plus" size={24} color="lightgray" />
      </View>
      <Text style={styles.text}>Add Category</Text>
    </Pressable>
  );
}

export default AddCategoryItem;

const styles = StyleSheet.create({
  addCategoryContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#30302f",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 4,
    borderWidth: 2,
    borderColor: "#30302f",
    borderStyle: "dashed",
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 8,
  },
  pressed: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderColor: "transparent",
  },
});
