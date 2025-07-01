import { Text, StyleSheet } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    marginVertical: 12,
  },
});
