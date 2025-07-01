import { View, Text, Pressable, StyleSheet } from "react-native";

function BarButton({ onPress, children, isDisabled = false }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        disabled={isDisabled}
        style={({ pressed, disabled }) => (pressed ? styles.pressed : null)}
        onPress={onPress}
      >
        <Text style={[styles.text, isDisabled && styles.disabled]}>
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

export default BarButton;

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
  disabled: {
    color: "grey",
  },
});
