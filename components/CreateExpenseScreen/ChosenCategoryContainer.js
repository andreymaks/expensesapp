import { View, Pressable, Text, StyleSheet } from "react-native";
import CategoryIcon from "../UI/CategoryIcon";
import { FontAwesome6 } from "@expo/vector-icons";

function ChosenCategoryContainer({
  isFocused,
  chooseCategoryHandler,
  chosenCategory,
}) {
  return (
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
  );
}

export default ChosenCategoryContainer;

const styles = StyleSheet.create({
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
