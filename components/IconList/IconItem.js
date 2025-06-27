import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function IconItem({ iconName, itemSize, marginSize, onPress, isSelected }) {
  return (
    <Pressable onPress={() => onPress(iconName)}>
      <View
        style={[
          styles.iconContainer,
          {
            width: itemSize,
            height: itemSize,
            margin: marginSize,
            backgroundColor: isSelected ? "#3e91de" : "rgb(43 42 42)",
            // opacity: isSelected ? 0.95 : 1,
          },
        ]}
      >
        <Ionicons name={iconName} size={28} color="white" />
      </View>
    </Pressable>
  );
}

export default IconItem;

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
