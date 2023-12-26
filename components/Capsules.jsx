import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import Colors from "@/constants/Colors";
import { TagsBadges } from "@/components/Badge";
import { Link } from "expo-router";

export default function Capsules({ capsules }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {capsules.map((capsule) => (
        <Link
          href={{ pathname: "/(modal)/Capsule", params: { id: capsule.id } }}
          key={capsule.id}
          asChild
        >
          <TouchableOpacity key={capsule.id} style={styles.root}>
            <View style={styles.text}>
              <Text numberOfLines={3} style={styles.question}>
                {capsule.question}
              </Text>
              <Text numberOfLines={2} style={styles.answer}>
                {capsule.answer}
              </Text>
            </View>
            <View style={styles.badgeList}>
              <TagsBadges tags={capsule.tags} />
            </View>
          </TouchableOpacity>
        </Link>
      ))}
      {/* if there are no capsules, say something */}
      {capsules.length === 0 && (
        <View style={{ padding: 16 }}>
          <Text>
            No capsules found. Try searching for something else or removing some
            filters.
          </Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.base,
  },
  root: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomColor: Colors.base300,
    borderBottomWidth: 1,
  },
  question: {
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
    color: Colors.text,
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
    flexWrap: "wrap",
    marginTop: 8,
  },
});
