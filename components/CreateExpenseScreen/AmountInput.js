import { View, Text, TextInput, StyleSheet } from "react-native";

function AmountInput({ setIsFocused, isFocused }) {
  return (
    <View style={styles.amountInputContainer}>
      <Text style={styles.currencyText}>$</Text>
      <TextInput
        style={styles.amountInput}
        keyboardAppearance="dark"
        placeholder={isFocused === "amount" ? "" : "0"}
        placeholderTextColor="white"
        keyboardType="decimal-pad"
        onFocus={() => setIsFocused("amount")}
        onBlur={() => setIsFocused(null)}
      />
    </View>
  );
}

export default AmountInput;

const styles = StyleSheet.create({
  amountInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  currencyText: {
    fontSize: 50,
    color: "white",
  },
  amountInput: {
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    color: "white",
    fontSize: 50,
  },
});
