import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const confirmationPage = () => {
  return (
    <SafeAreaView>
      <Text>Prompt will be shown here</Text>
    </SafeAreaView>
  );
};

export default confirmationPage;
