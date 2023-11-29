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
import { useLocalSearchParams, Link } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const viewPromptPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Link href="/screens" style={styles.backBtn} asChild>
          <Pressable>
            <Ionicons
              name="arrow-back-circle-outline"
              size={35}
              color="black"
            />
          </Pressable>
        </Link>
        <Link href="/screens/prompt/submitted" style={styles.submitBtn} asChild>
          <Pressable>
            <Text style={styles.submitBtnText}> SUBMIT</Text>
          </Pressable>
        </Link>
      </View>
      <View style={styles.promptBubbleContainer}>
        <View style={styles.promptBubble}>
          <Text style={styles.promptText}>
            What's your favorite place on campus to eat?
          </Text>
        </View>
      </View>
      <View style={styles.flairContainer}>
        <Pressable style={styles.flairBtn}>
          <Text style={styles.flairBtnText}> Add Flairs</Text>
          <AntDesign
            name="plus"
            size={20}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </Pressable>
      </View>
      <View style={styles.responseContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type Response to Prompt..."
          multiline={true}
          textAlignVertical="top"
        ></TextInput>
      </View>
    </SafeAreaView>
  );
};

export default viewPromptPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
    marginHorizontal: 10,
  },

  backBtn: {
    alignItems: "flex-start",
  },

  submitBtn: {
    backgroundColor: "green",
    textAlign: "center",
    justifyContent: "center",
    borderRadius: 5,
    padding: 7,
  },

  submitBtnText: {
    color: "white",
  },

  promptBubbleContainer: {
    alignItems: "center",
    marginTop: windowHeight * 0.03,
    // borderWidth: 2,
    // borderColor: "red",
  },
  promptBubble: {
    width: windowWidth * 0.9,
    minHeight: windowHeight * 0.1,
    backgroundColor: "#f2f2f2",

    padding: 15,
  },

  promptText: {
    fontSize: 25,
  },

  flairContainer: {
    marginTop: 10,
    justifyContent: "left",
    alignItems: "left",
  },

  flairBtn: {
    borderWidth: 0.5,
    borderColor: "black",
    padding: 5,
    flexDirection: "row",
    marginLeft: windowWidth * 0.05,
  },
  flairBtnText: {
    fontSize: 15,
  },

  plusIcon: {
    margin: 5,
    borderWidth: 2,
    borderColor: "green",
  },

  responseContainer: {
    alignItems: "center",
  },

  input: {
    marginTop: 10,
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "dashed",
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
});
