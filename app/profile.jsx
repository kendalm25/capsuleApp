import React from "react";
import { useState } from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { YourCapsules } from "@/components/YourCapsules";
import { CapsuleCardHorizontalList } from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/sentCapsuleStore";
import { Link } from "expo-router";
import profilePic from "../assets/Images/profile-pic-1.jpeg";
import { useSafeAreaFrame } from "react-native-safe-area-context";

/**
 * Profile
 *
 * screen used for displaying user profile
 * KENDAL TODO: implement this screen
 */
const Profile = () => {
  const { capsules } = useCapsuleStore();
  // const [capsuleCount, setCapsuleCount] = useState(0);

  // const updateCapsuleCount = (count) => {
  //   setCapsuleCount(count);
  // };

  const allCapsulesCabinet = {
    id: "all",
    name: "sent-capsules",
    capsules: capsules,
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={styles.title}>
          {/* empty space */}
          <Text style={styles.titleText}>{""}</Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>PROFILE</Text>
        </View>
        <View style={styles.setting}>
          <Ionicons name="ios-settings-sharp" size={24} color="black" />
        </View>
      </View>

      {/* profile pic + information */}
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.picture}>
            <Image style={styles.profilePic} source={profilePic} />
          </View>
          <View style={styles.information}>
            <Text style={styles.name}> Jane Smith </Text>
            <Text style={styles.info}> she/her </Text>
            <Text style={styles.info}> 27 years old </Text>
            <Text style={styles.info}> Bay Area </Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.viewCount}>
            <Text style={styles.viewText}>You Have Responded To:</Text>
            <Text style={styles.viewText}>10</Text>
            <Text style={styles.viewText}>Prompts</Text>
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

          <CapsuleCardHorizontalList
            cabinet={allCapsulesCabinet}
            // updateCapsuleCount={updateCapsuleCount}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.base300,
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

  container: {
    flex: 1,
  },

  profileContainer: {
    flex: 1,
  },

  profileHeader: {
    marginTop: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },

  picture: {
    marginRight: 20,
  },

  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Colors.base300,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  information: {
    flex: 1,
  },

  name: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  info: {
    fontSize: 15,
    paddingTop: 5,
  },

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
});
