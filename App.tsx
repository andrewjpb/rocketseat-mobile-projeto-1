import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/home";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#0D0D0D", flex: 1 }}>
      <StatusBar style="light" />
      <Home />
    </SafeAreaView>
  );
}
