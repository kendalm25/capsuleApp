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

export default function AnswerPrompt() {
  const router = useRouter();
  const { answerPrompt } = useCapsuleStore();
  const [capsuleAnswer, setCapsuleAnswer] = useState("");
  const [cabinetTags, setCabinetTags] = useState([]);
  const [error, setError] = useState({
    name: false,
    tags: false,
    capsules: false,
  });

  function toggleTag(tag) {
    if (cabinetTags.includes(tag)) {
      setCabinetTags(cabinetTags.filter((t) => t !== tag));
    } else {
      setCabinetTags([...cabinetTags, tag]);
    }
  }

  const handleCreateCapsuleResponse = () => {
    answerPrompt(capsuleAnswer);

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.back();
  };

  const capsule = {
    id: "1",
    question: "What's one thing that made you smile today?",
    category: "fun",
    answer: "",
    dateTime: new Date(),
    location: {
      name: "Stanford Campus",
      lat: 37.43358803600001,
      long: -122.18041604630488,
    },
    tags: [],
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Type a name */}
        <View style={styles.section}>
          <View style={styles.header}>
            <Text style={styles.title}>{capsule.question}</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Type your response to the prompt..."
            onChangeText={setCapsuleAnswer}
            value={capsuleAnswer}
            multiline={true}
            textAlignVertical="top"
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
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.fullButton}
          onPress={handleCreateCapsuleResponse}
        >
          <Text style={styles.footerText}>Submit Capsule</Text>
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
    fontSize: 20,
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
    height: 150,
    borderColor: Colors.base300,
    borderWidth: 1,
    paddingTop: 10,
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
