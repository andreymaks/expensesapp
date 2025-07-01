import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CategoriesContextProvider from "../contexts/CategoriesContext";
import ChosenCategoryProvider from "../contexts/ChosenCategoryContext";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CategoriesContextProvider>
        <ChosenCategoryProvider>
          <SafeAreaView style={styles.container}>
            <Stack
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "black" },
                gestureEnabled: false,
              }}
            />
          </SafeAreaView>
        </ChosenCategoryProvider>
      </CategoriesContextProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
