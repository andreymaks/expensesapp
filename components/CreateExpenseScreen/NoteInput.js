import { View, Text, TextInput, StyleSheet } from "react-native";

function NoteInput({ setIsFocused }) {
  return (
    <View style={styles.noteInputContainer}>
      <TextInput
        multiline
        style={styles.noteInput}
        placeholder="Note (optional)"
        keyboardAppearance="dark"
        placeholderTextColor="#979899"
        onFocus={() => setIsFocused("note")}
        onBlur={() => setIsFocused(null)}
      />
    </View>
  );
}

export default NoteInput;

const styles = StyleSheet.create({
  noteInputContainer: {
    alignItems: "center",
    flex: 1,
  },
  noteInput: {
    width: "90%",
    height: "20%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    marginVertical: 12,
    backgroundColor: "#212224",
    borderRadius: 12,
    color: "white",
    textAlign: "left",
    fontSize: 16,
  },
});
