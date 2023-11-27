// import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const basicInfoPage = () => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [initialPassword, setInitialPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.capsuleHeaderText}> CAPSULE</Text>
        <Text style={styles.headerText}> Account Signup</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputName}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFirstName}
            value={firstName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputName}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={setLastName}
            value={lastName}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputName}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View style={styles.textInputContainer}>
          <Text style={styles.inputName}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setInitialPassword}
            value={initialPassword}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Text style={styles.inputName}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
        </View>
      </View>
      <Link
        href={{
          pathname: "/screens",
          params: { id: firstName },
        }}
        asChild
      >
        <Pressable>
          <Text style={styles.nextBtn}>Create Account</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
};

export default basicInfoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // borderWidth: 2,
    // borderColor: "blue",
  },

  header: {
    marginTop: 20,
    // borderWidth: 2,
    // borderColor: "green",
  },

  capsuleHeaderText: {
    fontSize: 27,
    textAlign: "center",
    fontWeight: "600",
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
  },

  formContainer: {
    width: windowWidth * 0.8,
    // borderWidth: 2,
    // borderColor: "red",
  },

  textInputContainer: {
    flexDirection: "column",
    marginVertical: windowWidth * 0.05,
  },

  inputName: {
    fontSize: 15,
    color: "grey",
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  nextBtn: {
    padding: 10,
    backgroundColor: "blue",
    color: "white",
    width: windowWidth * 0.3,
    textAlign: "center",
    alignItems: "center",
  },
});
