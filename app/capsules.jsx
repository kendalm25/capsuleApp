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
import {
  CapsuleCard,
  CapsuleCardHorizontalList,
} from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/capsuleStore";
import { Link } from "expo-router";
import logo from "../assets/Images/capsule-logo.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

/**
 * Capsules
 *
 * screen used for displaying ALL capsules
 * 3 main sections:
 * - capsules you've received in their cabinets
 * - all capsules you've seen in full view in a vertical scroll layout
 * - map of capsules
 *
 * TRISTAN TODO: implement this screen
 */
const Capsules = () => {
  const { cabinets, capsules, capsulePrompts, justViewedCapsules } =
    useCapsuleStore();

  //  join all the cabinets and capsules
  const cabinetsWithCapsules = cabinets.map((cabinet) => {
    const cabinetCapsules = cabinet.capsule_ids.map((capsuleId) => {
      return capsules.find((capsule) => capsule.id === capsuleId);
    });
    return { ...cabinet, capsules: cabinetCapsules };
  });

  const allCapsulesCabinet = {
    id: "all",
    name: "All Capsules",
    capsules: capsules,
  };

  const prompt = {
    id: "1",
    name: "prompt",
    capsules: capsulePrompts,
  };

  const viewed = {
    id: "all",
    name: "Just Viewed",
    capsules: justViewedCapsules,
  };

  if (!cabinetsWithCapsules) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 40, backgroundColor: "white" }}
    >
      <View style={styles.header}>
        <Text style={styles.navText}>YOUR CAPSULES</Text>
      </View>
      {/* Different cabinets */}
      {cabinetsWithCapsules.map((cabinet) => (
        <View key={cabinet.id}>
          <View style={styles.cabinet}>
            <Text style={styles.cabinetName}>{cabinet.name}</Text>
            <Ionicons
              style={styles.icon}
              name="ios-chevron-forward"
              size={20}
            />
          </View>
          <CapsuleCardHorizontalList cabinet={cabinet} />
        </View>
      ))}

      {/* Recently Viewed Capsules */}
      {/* <View>
        <View style={styles.cabinet}>
          <Text style={styles.cabinetName}>Recently Viewed</Text>
          <Ionicons style={styles.icon} name="ios-chevron-forward" size={20} />
        </View>
        <CapsuleCardHorizontalList cabinet={viewed} />
      </View> */}

      {/* Create new cabinets */}
      <Link href={{ pathname: "/(modal)/CreateCabinet" }} asChild>
        <TouchableOpacity>
          <View style={styles.cabinet}>
            <Text style={styles.cabinetName}>Create New Cabinet</Text>
            <Ionicons
              style={(styles.icon, { marginLeft: 8 })}
              name="add-circle-outline"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
};

export default Capsules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: Colors.base,
  },

  header: {
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  navText: {
    fontSize: 25,
    fontWeight: "800",
  },

  logo: {
    height: 100,
    resizeMode: "contain",
  },

  promptContainer: {
    width: windowWidth * 0.9,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.base300,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  promptAvailContainer: {
    flexDirection: "row",
  },

  promptAvailText: {
    fontSize: 25,
    fontWeight: "300",
    marginRight: 5,
    marginBottom: 3,
  },

  promptText: {
    textAlign: "center",
  },

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

const cardStyle = StyleSheet.create({
  root: {
    // width: windowWidth * 0.7,
    maxWidth: windowWidth * 0.8,
    height: 150,
    padding: 18,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    rowGap: 6,
    columnGap: 6,
    borderRadius: 10,
    borderWidth: 3,
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
    marginVertical: 20,
    // marginEnd: 10,
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

  text: {
    // justifyContent: "center",
  },

  question: {
    // textAlign: "center",
    alignSelf: "stretch",
    fontSize: 18,
    fontWeight: "600",
    justifyContent: "center",
  },

  answer: {
    alignSelf: "stretch",
    overflow: "hidden",
    fontSize: 16,
    color: Colors.base700,
    marginTop: 4,
  },
});
