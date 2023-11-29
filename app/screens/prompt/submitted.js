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

const submittedPage = () => {
  return (
    <SafeAreaView>
      <Text style={{ marginTop: 20 }}>
        Your Capsule has been submitted. Animation goes here.
      </Text>
    </SafeAreaView>
  );
};

export default submittedPage;
