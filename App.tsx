import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Form from "./components/Form";
import BarcodeScanner from "./components/BarcodeScanner";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HELOŁ</Text>
      <Form />
      <BarcodeScanner />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
