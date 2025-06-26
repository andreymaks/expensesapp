import { View, Text, Pressable, StyleSheet } from "react-native";

function CustomButton({ onPress, children }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
  innerContainer: {
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
