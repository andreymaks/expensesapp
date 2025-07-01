import { View, StyleSheet } from "react-native";
import BarButton from "./BarButton";

function SaveCancelBar({ canSave = true, onCancelHandler, onSaveHandler }) {
  return (
    <View style={styles.buttonsContainer}>
      <BarButton onPress={onCancelHandler}>Cancel</BarButton>
      <BarButton onPress={onSaveHandler} isDisabled={!canSave}>
        Save
      </BarButton>
    </View>
  );
}

export default SaveCancelBar;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
});
