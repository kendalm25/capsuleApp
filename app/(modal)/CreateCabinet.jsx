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
import * as Haptics from "expo-haptics";
import { SUBSET_TAGS, useCapsuleStore } from "@/store/capsuleStore";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";
import { cardStyle } from "@/components/CapsuleCard";
import { TagsBadges } from "@/components/Badge";

/**
 * CreateCabinet
 *
 * screen used for creating a new cabinet or editing an existing cabinet
 */
export default function CreateCabinet() {
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

  function toggleTag(tag) {
    if (cabinetTags.includes(tag)) {
      setCabinetTags(cabinetTags.filter((t) => t !== tag));
    } else {
      setCabinetTags([...cabinetTags, tag]);
    }
  }

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
      <View style={styles.innerContainer}>
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
          <View style={styles.tagContainer}>
            {SUBSET_TAGS.map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[
                  styles.tagButton,
                  {
                    backgroundColor: cabinetTags.includes(tag)
                      ? Colors.primary
                      : Colors.base300,
                  },
                ]}
                onPress={() => toggleTag(tag)}
              >
                <Text
                  style={[
                    styles.tagText,
                    {
                      fontWeight: cabinetTags.includes(tag) ? "bold" : "normal",
                      color: cabinetTags.includes(tag)
                        ? Colors.base
                        : Colors.base950,
                    },
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Add Recent Capsules */}
        <View style={styles.recentCapsulesContainer}>
          <View style={[styles.header, styles.recentCapsulesHeader]}>
            <Text style={{ ...styles.title, paddingHorizontal: 20 }}>
              Add Recent Capsules
            </Text>
            {/* Optionally show alert icon if there is an error set for a field */}
            {error.capsules && (
              <Ionicons style={styles.icon} name="alert-circle" size={30} />
            )}
          </View>

          {/* for all the capsules in all CreateCabinetCapsuleCard */}
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}
          >
            {capsules.map((capsule) => (
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.base,
  },
  innerContainer: {
    marginTop: 20,
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
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: Colors.base300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  tagButton: {
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    // color: Colors.base950,
    fontSize: 16,
  },
  recentCapsulesContainer: {
    // paddingHorizontal: 20,
  },
  recentCapsulesHeader: {
    paddingHorizontal: 0,
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
    // paddingTop: 20,
    paddingBottom: 40,
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
});
