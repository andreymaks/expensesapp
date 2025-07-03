import { Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import CategoryIcon from "../UI/CategoryIcon";

function ChooseCategoryItem({ category, active, onSelect }) {
  return (
    <Pressable
      onPress={() => onSelect(category)}
      style={({ pressed }) => [
        styles.categoryContainer,
        pressed && styles.pressed,
      ]}
    >
      <CategoryIcon iconName={category.icon} />
      <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
        {category.name}
      </Text>
      {active ? <FontAwesome6 name="check" color="white" size={20} /> : null}
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
    marginVertical: 4,
    paddingVertical: 8,
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: "auto",
    marginLeft: 4,
  },
  pressed: {
    backgroundColor: "rgba(255,255,255,0.25)",
    borderRadius: 8,
  },
});
