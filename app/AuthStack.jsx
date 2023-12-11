import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Button, StyleSheet } from "react-native";

export function LoginScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text> This is the Detaile Page</Text>
      <StatusBar style="auto">
        <Button title="Next Page" onPress={() => console.log("next page")} />
        <Button
          title="Create Account"
          onPress={() => console.log("next page")}
        />
      </StatusBar>
    </View>
  );
}
