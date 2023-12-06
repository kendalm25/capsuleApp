import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { YourCapsules } from "@/components/YourCapsules";
import { CapsuleCardHorizontalList } from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/capsuleStore";
import { Link } from "expo-router";
import profilePic from "../assets/Images/profile-pic-1.jpeg";
import { useSafeAreaFrame } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("window").width;

/**
 * Profile
 *
 * screen used for displayisng user profile
 * KENDAL TODO: implement this screen
 */
const Profile = () => {
  const { sentCapsules } = useCapsuleStore();

  const allCapsulesCabinet = {
    id: "all",
    name: "sent-capsules",
    capsules: sentCapsules,
  };

  return (
    <View style={styles.container}>
      {/* profile pic + information */}
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.picture}>
            <Image style={styles.profilePic} source={profilePic} />
          </View>
          <View style={styles.information}>
            <Text style={styles.name}> Jane Smith </Text>

            <Text style={styles.info}> (she/her) </Text>

            <View style={styles.infoWithIcon}>
              <MaterialCommunityIcons
                style={styles.infoIcon}
                name="lightbulb-outline"
                size={24}
                color="black"
              />
              <Text style={styles.info}> 27 years old </Text>
            </View>

            <View style={styles.infoWithIcon}>
              <FontAwesome
                style={styles.infoIcon}
                name="location-arrow"
                size={24}
              />
              <Text style={styles.info}> Bay Area </Text>
            </View>

            <View style={styles.infoWithIcon}>
              <Ionicons
                style={styles.icon}
                name="ios-calendar-sharp"
                size={24}
                color="black"
              />
              <Text style={styles.info}> Joined December 2023 </Text>
            </View>
          </View>
        </View>

        {/* capsules */}
        <View style={styles.capsules}>
          <View style={styles.responseHeader}>
            <Text style={styles.responseText}>Your Responses</Text>
            <Ionicons
              style={styles.icon}
              name="ios-chevron-forward"
              size={20}
            />
          </View>

          <CapsuleCardHorizontalList cabinet={allCapsulesCabinet} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  header: {
    flexDirection: "row",
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  titleText: {
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 20,
  },

  title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  setting: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },

  profileContainer: {
    backgroundColor: "white",
  },

  profileHeader: {
    margin: 30,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  picture: {
    marginRight: 20,
  },

  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "black",
    backgroundColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  information: {
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

  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  infoWithIcon: {
    flexDirection: "row",
    marginVertical: 4,
  },

  info: {
    fontSize: 15,
    paddingTop: 5,
    textAlign: "center",
  },

  infoIcon: {},

  viewContainer: {
    justifyContent: "center",
    marginVertical: 50,
  },

  viewCount: {},

  viewText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  responseText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.base950,
  },

  responseHeader: {
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },

  capsules: {
    // flex: 1,
  },
});
