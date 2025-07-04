import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CategoriesContextProvider from "../contexts/CategoriesContext";
import ChosenCategoryContextProvider from "../contexts/ChosenCategoryContext";
import ExpensesContextProvider from "../contexts/ExpensesContext";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <CategoriesContextProvider>
          <ExpensesContextProvider>
            <ChosenCategoryContextProvider>
              <SafeAreaView style={styles.container} edges={["top"]}>
                <Stack
                  screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: "black" },
                    gestureEnabled: false,
                  }}
                />
              </SafeAreaView>
            </ChosenCategoryContextProvider>
          </ExpensesContextProvider>
        </CategoriesContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
