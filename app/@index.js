import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const WelcomePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcome}>
        <Text style={styles.welcomeText}>Welcome to CAPSULE!</Text>
        <View style={styles.createAccountContainer}>
          <Link href={"/basicInfo"} style={styles.createAccountBtn} asChild>
            <Pressable>
              <Text style={styles.createAccountText}>Create Account</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    alignItems: "center",
    marginTop: windowHeight * 0.1,
  },

  welcomeText: {
    fontSize: 30,
    textAlign: "center",
  },

  createAccountContainer: {
    marginTop: windowHeight * 0.1,
    justifyContent: "center",
    alignItems: "center",
  },

  createAccountBtn: {
    padding: 15,
    backgroundColor: "lightblue",
  },

  createAccountText: {
    fontSize: 25,
    // color: "white",
    textAlign: "center",
  },
});
