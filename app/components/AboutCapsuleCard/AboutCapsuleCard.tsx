import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Capsule } from "@/store/capsule";
import { Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import FlairTag from "../FlairTag/FlairTag";
import { Colors } from "@/theme/Variables";

const windowHieght = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

type Props = {
  capsule: Capsule;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    width: windowWidth * 0.75,
    height: 131,
    borderRadius: 25,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
  },

  capsuleContent: {
    flexDirection: "column",
    paddingTop: 10,
    paddingRight: 10,
  },

  capsuleInfo: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginVertical: 2,
    alignItems: "center",
  },

  informationText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 6,
  },

  icon: {
    flex: 1,
    alignItems: "center",
  },

  flairs: {
    flexDirection: "row",
    marginLeft: 12,
  },
  flair: {
    margin: 2,
  },
  funFlair: {
    backgroundColor: "orange",
    marginHorizontal: 5,
  },

  learningFlair: {
    backgroundColor: "green",
    marginHorizontal: 5,
  },
});

const AboutCapsuleCard = ({ capsule }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.capsuleContent]}>
        <View style={[styles.capsuleInfo]}>
          <View style={[styles.icon]}>
            <Fontisto name="person" size={18} color="pink" />
          </View>
          <Text style={[styles.informationText]}>Pronouns: she/her</Text>
        </View>
        <View style={[styles.capsuleInfo]}>
          <View style={[styles.icon]}>
            <Fontisto name="persons" size={18} color="gray" />
          </View>
          <Text style={[styles.informationText]}>Age: 20-25</Text>
        </View>
        <View style={[styles.capsuleInfo]}>
          <View style={[styles.icon]}>
            <FontAwesome name="map-pin" size={18} color="red" />
          </View>
          <Text style={[styles.informationText]}>
            Caspule Sent From: 2 miles away
          </Text>
        </View>
        <View style={[styles.capsuleInfo]}>
          <View style={[styles.flairs]}>
            {capsule.flairs?.map((flair) => (
              <FlairTag key={flair} style={[styles.flair]} type={flair} />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

AboutCapsuleCard.defaultProps = {};

export default AboutCapsuleCard;
