import { View, StyleSheet, ActivityIndicator } from "react-native";
import SaveCancelBar from "./SaveCancelBar";

function LoadingScreen({ onCancel, onSave }) {
  return (
    <View style={styles.spinnerContainer}>
      <SaveCancelBar onCancelHandler={onCancel} onSaveHandler={onSave} />
      <ActivityIndicator style={styles.spinner} size="large" color="#ffffff" />
    </View>
  );
}

export default LoadingScreen;

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
  },
  spinner: {
    justifyContent: "center",
    flex: 1,
  },
});
