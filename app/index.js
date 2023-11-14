import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Tabs, Link } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> CAPSULE </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 50,
  },
});
