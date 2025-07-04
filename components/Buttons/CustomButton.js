import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ onPress, children, style, pressedStyle }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        style,
        pressed ? [styles.pressed, pressedStyle] : null,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
    backgroundColor: "royalblue",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 48,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    fontSize: 32,
    color: "white",
  },
});
