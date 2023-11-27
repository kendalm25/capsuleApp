import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Profile() {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
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
