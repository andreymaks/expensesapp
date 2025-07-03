import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function CategoryIcon({ iconName }) {
  return (
    <View style={styles.iconContainer}>
      <Ionicons name={iconName} size={24} color="white" />
    </View>
  );
}

export default CategoryIcon;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 4,
  },
});
