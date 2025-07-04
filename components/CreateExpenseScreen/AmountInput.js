import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState, useRef } from "react";

function AmountInput({ setIsFocused, isFocused, amount, setAmount }) {
  const inputRef = useRef(null);

  function onChangeAmount(text) {
    const dotText = text.replace(",", ".");
    const regex = /^\d*(\.)?\d{0,2}$/;
    if (regex.test(dotText)) {
      setAmount(dotText);
    }
  }

  return (
    <Pressable
      onPress={() => inputRef.current?.focus()}
      style={styles.amountInputContainer}
    >
      <Text style={styles.currencyText}>$</Text>
      <Text style={styles.currencyText}>
        {amount || (isFocused === "amount" ? "" : "00.00")}
      </Text>
      <TextInput
        ref={inputRef}
        style={styles.amountHiddenInput}
        keyboardAppearance="dark"
        keyboardType="decimal-pad"
        onFocus={() => setIsFocused("amount")}
        onBlur={() => setIsFocused(null)}
        onChangeText={onChangeAmount}
        value={amount}
        caretHidden
      />
    </Pressable>
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
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  amountHiddenInput: {
    ...StyleSheet.absoluteFillObject,
    color: "transparent",
    backgroundColor: "transparent",
  },
});
