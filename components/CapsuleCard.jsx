import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import Colors from "@/constants/Colors";
import { TagsBadges } from "@/components/Badge";
import { Ionicons } from "@expo/vector-icons";

export const CapsuleCard = ({ capsule }) => {
  return (
    <Link
      href={{ pathname: "/(modal)/Capsule", params: { id: capsule.id } }}
      key={capsule.id}
      asChild
    >
      <TouchableOpacity>
        <View style={cardStyle.root}>
          <View style={cardStyle.text}>
            <Text numberOfLines={3} style={cardStyle.question}>
              {capsule.question}
            </Text>
            <Text numberOfLines={2} style={cardStyle.answer}>
              {capsule.answer}
            </Text>
          </View>
          <View style={cardStyle.badgeList}>
            <TagsBadges tags={capsule.tags} />
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};


const cardStyle = StyleSheet.create({
  root: {
    width: 250,
    height: 175,
    padding: 12,
    flexDirection: "column",
    alignItems: "flex-start",
    rowGap: 6,
    columnGap: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.base300,
    backgroundColor: Colors.base,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    marginEnd: 10,
  },
  addCapsule: {
    width: 250,
    height: 175,
    padding: 12,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 6,
    columnGap: 6,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.base300,
    backgroundColor: Colors.base,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    marginEnd: 10,
  },
  question: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
  },
  answer: {
    alignSelf: "stretch",
    overflow: "hidden",
    fontSize: 16,
    color: Colors.base700,
    marginTop: 4,
  },
  badgeList: {
    flexDirection: "row",
    alignItems: "flex-start",
    alignContent: "flex-start",
    rowGap: 6,
    columnGap: 6,
    flexWrap: "wrap",
  },
});
