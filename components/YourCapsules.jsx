import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";
import { useCapsuleStore } from "@/store/capsuleStore";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export const YourCapsules = () => {
  const { capsulePrompts } = useCapsuleStore();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        padding: 16,
      }}
    >
      {capsulePrompts.map((capsulePrompt, index) => {
        // (index, capsulePrompt);
        const date = new Date(capsulePrompt.releaseDate).toLocaleDateString();

        return (
          <View style={styles.categoryCard} key={index}>
            <View style={{ flexDirection: "col" }}>
              <Ionicons
                style={{ alignSelf: "flex-end" }}
                name={CapsuleStatus(capsulePrompt.status)}
                size={16}
              />
              <Ionicons
                style={{ alignSelf: "center" }}
                name={CapsuleIcon(capsulePrompt.category)}
                size={40}
              />

              <Text style={styles.categoryText}>{date}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};


const CapsuleStatus = (capsuleStatus) => {
  // ("capsuleStatus", capsuleStatus);
  switch (capsuleStatus) {
    case "locked":
      return "lock-closed";
    case "answered":
      return "checkmark-circle-outline";
    case "unanswered":
      return "lock-open";
    case "expired":
      return "ios-close-circle-outline";
    default:
      return "lock-closed";
  }
};

const CapsuleIcon = (capsuleCategory) => {
  switch (capsuleCategory) {
    case "food":
      return "fast-food";
    case "study":
      return "book";
    case "hangout":
      return "people";
    case "travel":
      return "airplane";
    case "music":
      return "musical-notes";
    case "movie":
      return "film";
    case "book":
      return "book";
    case "game":
      return "game-controller";
    case "event":
      return "calendar";
    case "other":
      return "ellipsis-horizontal";
    default:
      return "ellipsis-horizontal";
  }
};

const styles = StyleSheet.create({
  categoryCard: {
    flexDirection: "column",
    width: 100,
    height: 100,
    padding: 6,
    alignItems: "center",
    backgroundColor: Colors.base,
    marginEnd: 10,
    elevation: 2,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    // borderRadius: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.base300,
  },
  categoryText: {
    padding: 6,
    fontSize: 12,
    fontWeight: "600",
  },
});
