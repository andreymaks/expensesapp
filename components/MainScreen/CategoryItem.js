import { View, Text, StyleSheet } from "react-native";
import CategoryIcon from "../CategoryIcon";

function CategoryItem({ category }) {
  return (
    <View style={styles.categoryContainer}>
      <CategoryIcon iconName={category.icon} />
      <Text
        style={[styles.text, styles.name]}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {category.name}
      </Text>
      <Text style={[styles.text, styles.amount]}>${category.spent}</Text>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#30302f",
    borderWidth: 2,
    borderColor: "#30302f",
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
    width: "90%",
    alignItems: "center",
    marginVertical: 4,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  amount: {
    marginLeft: "auto",
    marginRight: 4,
  },
  name: {
    flexShrink: 1,
    marginHorizontal: 8,
  },
});
