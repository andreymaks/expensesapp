import { View, Text, Pressable, StyleSheet } from "react-native";

function TabButton({ onPress, children }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default TabButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  text: {
    fontSize: 20,
    color: "dodgerblue",
  },
});
