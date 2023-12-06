import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import { useCapsuleStore } from "@/store/capsuleStore";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import { TAGS } from "@/store/capsuleStore";

/**
 * CreateCabinet
 *
 * screen used for creating a new cabinet or editing an existing cabinet
 */
const CreateCabinet = () => {
  const { createCabinet, capsules, getCabinet, editCabinet } =
    useCapsuleStore();

  const router = useRouter();
  const { cabinet_id } = useLocalSearchParams();
  const cabinet = getCabinet(cabinet_id);

  const [cabinetName, setCabinetName] = useState(cabinet ? cabinet.name : "");
  const [cabinetTags, setCabinetTags] = useState(cabinet ? cabinet.tags : []);
  const [capsuleIds, setCapsuleIds] = useState(
    cabinet ? cabinet.capsule_ids : []
  );
  const [error, setError] = useState({
    name: false,
    tags: false,
    capsules: false,
  });

  const handleCabinetAction = () => {
    if (cabinet) {
      handleUpdateCabinet();
    } else {
      handleCreateCabinet();
    }
  };

  const handleUpdateCabinet = () => {
    if (!cabinetName) {
      setError({ ...error, name: true });
      return;
    }

    editCabinet(cabinet_id, {
      ...cabinet,
      name: cabinetName,
      tags: cabinetTags,
      capsule_ids: capsuleIds,
    });

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.back();
  };

  const handleCreateCabinet = () => {
    if (!cabinetName) {
      setError({ ...error, name: true });
      return;
    }

    createCabinet({
      id: uuid.v4(),
      name: cabinetName,
      tags: cabinetTags,
      createdAt: new Date(),
      capsule_ids: capsuleIds,
    });
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 20 }}>
        {/* Type a name */}
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>Cabinet Name</Text>
            {/* Optionally show alert icon if there is an error set for a field */}
            {error.name && (
              <Ionicons style={styles.icon} name="alert-circle" size={30} />
            )}
          </View>
          <TextInput
            style={styles.input}
            placeholder="Enter a name for your cabinet"
            onChangeText={setCabinetName}
            value={cabinetName}
          />
        </View>

        {/* Select different tags for the cabinet */}
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>Tags</Text>
            {/* Optionally show alert icon if there is an error set for a field */}
            {error.tags && (
              <Ionicons style={styles.icon} name="alert-circle" size={30} />
            )}
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {TAGS.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={{
                  backgroundColor: cabinetTags.includes(tag)
                    ? Colors.primary
                    : Colors.base300,

                  padding: 8,
                  borderRadius: 8,
                  marginRight: 8,
                  marginBottom: 8,
                }}
                onPress={() => {
                  if (cabinetTags.includes(tag)) {
                    setCabinetTags(cabinetTags.filter((t) => t !== tag));
                  } else {
                    setCabinetTags([...cabinetTags, tag]);
                  }
                }}
              >
                <Text
                  style={{
                    color: cabinetTags.includes(tag)
                      ? Colors.base
                      : Colors.base950,
                    fontSize: 16,
                    fontWeight: cabinetTags.includes(tag) ? "bold" : "normal",
                  }}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Add Recent Capsules */}
        <View>
          <View style={{ ...styles.header, paddingHorizontal: 20 }}>
            <Text style={styles.title}>Add Recent Capsules</Text>
            {/* Optionally show alert icon if there is an error set for a field */}
            {error.capsules && (
              <Ionicons style={styles.icon} name="alert-circle" size={30} />
            )}
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingVertical: 6,
            }}
          >
            {capsules.map((capsule, index) => (
              <TouchableOpacity
                key={capsule.id}
                style={{
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
                  borderColor: capsuleIds.includes(capsule.id)
                    ? Colors.primary
                    : Colors.base300,
                }}
                onPress={() => {
                  if (capsuleIds.includes(capsule.id)) {
                    setCapsuleIds(capsuleIds.filter((id) => id !== capsule.id));
                  } else {
                    setCapsuleIds([...capsuleIds, capsule.id]);
                  }
                }}
              >
                <View
                  style={{
                    alignSelf: "stretch",
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  <Text numberOfLines={3} style={styles.question}>
                    {capsule.question}
                  </Text>
                  <Text numberOfLines={2} style={styles.answer}>
                    {capsule.answer}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={handleCabinetAction}
        >
          <Text style={styles.footerText}>Create New Cabinet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base,
  },
  image: {
    width: "100%",
    height: 300,
  },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  recentCapsules: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  icon: {
    color: Colors.error,
    marginLeft: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  section: {
    // marginTop: 20,
    // marginBottom: 12,
    paddingHorizontal: 20,
  },
  dishInfo: {
    fontSize: 16,
    color: Colors.mediumDark,
  },
  footer: {
    position: "absolute",
    backgroundColor: Colors.base,
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: Colors.base950,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  footerText: {
    color: Colors.base,
    fontWeight: "bold",
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: Colors.base300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
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

export default CreateCabinet;
