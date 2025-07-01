import { Text, StyleSheet, Pressable } from "react-native";
import CategoryIcon from "../CategoryIcon";

function ChooseCategoryItem({ category }) {
  return (
    <Pressable style={styles.categoryContainer}>
      <CategoryIcon iconName={category.icon} />
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {category.name}
      </Text>
    </Pressable>
  );
}

export default ChooseCategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    width: "90%",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#262626",
    marginVertical: 8,
    paddingVertical: 4,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: "auto",
    marginLeft: 4,
  },
});
