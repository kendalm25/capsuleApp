import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const params = useLocalSearchParams();
  const [signedUp, setSignedUp] = useState(false);
  const [promptAvailable, setPromptAvailable] = useState(true);
  const makeHeader = () => (
    <View style={styles.container}>
      <Text style={styles.title}> CAPSULE </Text>
      <Text style={styles.welcomeName}> Welcome{params.id} </Text>
      <Image
        style={styles.icon}
        source={require("../../assets/Images/capsule-logo.png")}
      />
    </View>
  );

  if (promptAvailable) {
    return (
      <SafeAreaView style={styles.container}>
        {makeHeader()}
        <View style={styles.capsuleStat}>
          <View style={styles.capsuleAvailArea}>
            <Text style={styles.capsuleAvailText}>New Prompt Available!</Text>
            <FontAwesome5 name="lightbulb" size={24} color="white" />
          </View>
          <View style={styles.viewPrompt}>
            <Link
              href={{
                pathname: "/prompts/index",
              }}
              asChild
            >
              <Pressable style={styles.viewPromptBtn}>
                <Text style={styles.viewPromptText}>View Prompt</Text>
              </Pressable>
            </Link>
          </View>
        </View>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {makeHeader()}
        <View style={styles.capsuleStat}>
          <View style={styles.capsuleAvailArea}>
            <Text style={styles.capsuleAvailText}>
              {" "}
              A New Prompt Will Be Available Soon
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  title: {
    fontSize: 70,
    fontWeight: "700",
    color: "black",
    marginTop: windowHeight * 0.1,
  },

  welcomeName: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "400",
    marginBottom: windowHeight * 0.03,
  },

  icon: {
    margin: 0,
  },

  capsuleStat: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    flexDirection: "column",
    marginBottom: windowHeight * 0.05,
  },

  capsuleAvailArea: {
    flexDirection: "row",
    marginBottom: 10,
  },

  capsuleAvailText: {
    fontSize: 25,
    color: "white",
    fontWeight: "700",
    marginRight: 8,
  },

  viewPromptBtn: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: "15%",
  },

  viewPromptText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
