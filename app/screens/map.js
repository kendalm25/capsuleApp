import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Tabs, Link } from "expo-router";

export default function Saved() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Maps</Text>
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
});
