import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconItem({ iconName, itemSize, marginSize }) {
  return (
    <View
      style={[
        styles.iconContainer,
        { width: itemSize, height: itemSize, margin: marginSize },
      ]}
    >
      <Ionicons name={iconName} size={28} color="white" />
    </View>
  );
}

export default IconItem;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 12,
    padding: 12,
    backgroundColor: "rgb(43 42 42)",
  },
});
