import { View, Text, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TotalExpenses from "../components/TotalExpenses";
import CustomButton from "../components/CustomButton";

function MainScreen() {
  const router = useRouter();
  function CreateNewCategoryHandler() {
    router.push("/CreateCategoryScreen");
  }

  return (
    <View style={styles.rootContainer}>
      <TotalExpenses />
      <View style={styles.iconContainer}>
        <FontAwesome6 name="ghost" size={192} color="lightgray" />
      </View>
      <Text style={styles.text}>No categories yet</Text>
      <CustomButton onPress={CreateNewCategoryHandler}>
        Add Category
      </CustomButton>
    </View>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
  },
  iconContainer: {
    marginTop: 64,
    marginBottom: 16,
  },
  text: {
    color: "white",
    fontSize: 28,
  },
});
