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
  if (capsule === undefined) {
    return <></>;
  }
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

export const CapsuleCardHorizontalList = ({ cabinet }) => {
  const { capsules, id } = cabinet;

  // if capsules is empty, return nothing
  if (capsules.length === 0) {
    return <></>;
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 16,
        paddingBottom: 16,
      }}
    >
      {capsules.map((capsule, index) => (
        <CapsuleCard capsule={capsule} key={index} />
      ))}

      {id !== "all" && (
        <Link
          href={{
            pathname: "/CreateCabinet",
            params: { cabinet_id: cabinet.id },
          }}
          asChild
        >
          <TouchableOpacity>
            <View style={cardStyle.addCapsule}>
              <Ionicons name="add-circle-outline" size={50} />
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Add Capsule
              </Text>
            </View>
          </TouchableOpacity>
        </Link>
      )}
    </ScrollView>
  );
};

export const CabinetHorizontalList = ({ cabinet }) => {
  // only show cabinets with capsules
  return (
    <View key={cabinet.id}>
      <View style={cabinetStyle.cabinet}>
        <Text style={cabinetStyle.cabinetName}>{cabinet.name}</Text>
        <Ionicons
          style={cabinetStyle.icon}
          name="ios-chevron-forward"
          size={20}
        />
      </View>
      {/* {cabinet.capsules >= 0 && (
        <CapsuleCardHorizontalList cabinet={cabinet} />
      )} */}
      {cabinet.capsules.length > 0 && (
        <CapsuleCardHorizontalList cabinet={cabinet} />
      )}
    </View>
  );
};

const cabinetStyle = StyleSheet.create({
  capsuleTitle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "800",
    color: Colors.base950,
    marginVertical: 20,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    color: Colors.base950,
  },

  cabinet: {
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },

  cabinetName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.base950,
  },
});

export const cardStyle = StyleSheet.create({
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
