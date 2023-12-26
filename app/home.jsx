import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import React from "react";
import { YourCapsules } from "@/components/YourCapsules";
import { CabinetHorizontalList } from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/capsuleStore";
import { Link } from "expo-router";
import logo from "../assets/Images/capsule-logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  const {
    cabinets,
    capsules,
    justViewedCapsules,
    promptAnswered: { openedCapsule, responded },
  } = useCapsuleStore();

  //  join all the cabinets and capsules
  const cabinetsWithCapsules = cabinets.map((cabinet) => {
    const cabinetCapsules = cabinet.capsule_ids.map((capsuleId) => {
      return capsules.find((capsule) => capsule.id === capsuleId);
    });
    return { ...cabinet, capsules: cabinetCapsules };
  });

  if (!cabinetsWithCapsules) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const recentCapsules = capsules.sort((a, b) => {
    if (a.viewedAt > b.viewedAt) {
      return -1;
    } else if (a.viewedAt < b.viewedAt) {
      return 1;
    }
    return 0;
  });

  const recentCapsulesCabinet = {
    id: "recent",
    name: "Recently Viewed",
    capsules: recentCapsules,
  };

  const allCapsulesCabinet = {
    id: "all",
    name: "All Capsules",
    capsules: capsules,
  };

  console.log(openedCapsule, responded);
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 40, backgroundColor: "white" }}
    >
      <View style={styles.layout}>
        <Text style={styles.capsuleText}>CAPSULE</Text>
        <Image style={styles.capsuleLogo} source={logo} />
        {!responded ? (
          <Link
            href={{
              pathname: "/(modal)/AnswerPrompt",
            }}
            asChild
          >
            <TouchableOpacity style={styles.newPromptButton}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.newPromptButtonText}>
                  New Prompt is Available
                </Text>
                <MaterialCommunityIcons
                  name="lightbulb-on-outline"
                  size={24}
                  color="black"
                  style={styles.newPromptButtonIcon}
                />
              </View>
              <View>
                <Text
                  numberOfLines={3}
                  style={styles.newPromptButtonQuestionText}
                >
                  What's one thing that made you smile today?
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ) : !openedCapsule ? (
          <Link
            style={{ marginTop: 10 }}
            href={{ pathname: "/(modal)/NewCapsule" }}
            asChild
          >
            <TouchableOpacity style={styles.newCapsuleButton}>
              <View style={{ flexDirection: "col", alignItems: "center" }}>
                <Text style={styles.newCapsuleButtonText}>
                  Capsule Received
                </Text>
                <Text style={styles.newPromptButtonQuestionText}>
                  Click to open!
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        ) : (
          <TouchableOpacity style={styles.newPromptButton}>
            <View>
              <Text numberOfLines={3} style={styles.noNewPrompt}>
                A new prompt will be available soon.
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      <CabinetHorizontalList cabinet={recentCapsulesCabinet} />
      <CabinetHorizontalList cabinet={allCapsulesCabinet} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    // backgroundColor: Colors.base,
    alignItems: "center",
    justifyContent: "center",
  },
  capsuleText: {
    fontSize: 50,
    fontWeight: "900",

    marginTop: 50,
  },
  capsuleLogo: {
    marginTop: 20,
    height: 150,
    resizeMode: "contain",
  },

  newPromptButton: {
    backgroundColor: Colors.base,
    borderRadius: 10,
    padding: 20,
    width: windowWidth - 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.base300,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    minHeight: windowHeight * 0.15,
  },
  newPromptButtonText: {
    color: Colors.base950,
    fontSize: 20,
    fontWeight: "bold",
  },
  newPromptButtonIcon: {
    marginLeft: 10,
  },
  newPromptButtonQuestionText: {
    color: Colors.base950,
    fontSize: 20,
    marginTop: 10,
  },
  noNewPrompt: {
    color: Colors.base950,
    fontSize: 20,
  },
  newCapsuleButton: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 20,
    width: windowWidth - 40,
    alignItems: "center",
    borderColor: Colors.base300,
    borderWidth: 1,
  },
  newCapsuleButtonText: {
    color: Colors.base950,
    fontSize: 32,
    fontWeight: "bold",
  },
});
