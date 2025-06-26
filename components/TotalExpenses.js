import { View, Text, StyleSheet } from "react-native";

function TotalExpenses() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.monthText}>June Total</Text>
      <View style={styles.sumContainer}>
        <Text style={styles.sumText}>$10,000</Text>
      </View>
    </View>
  );
}

export default TotalExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    marginTop: 48,
  },
  monthText: {
    color: "#A39B9B",
    fontSize: 24,
  },
  sumContainer: {
    paddingVertical: 12,
  },
  sumText: {
    color: "white",
    fontSize: 60,
  },
});
