import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import { TagsBadges } from "@/components/Badge";
import { TAGS } from "@/store/capsuleStore";

const windowWidth = Dimensions.get("window").width;

const Prompt = () => {
  const [response, setResponse] = React.useState("");
  const navigation = useNavigation();
  const [chosenTags, setChosenTags] = React.useState([]);

  const handleTagPress = (tag) => {
    // if (chosenTags.length < 5) {
    if (chosenTags.includes(tag)) {
      setChosenTags(chosenTags.filter((chosenTag) => chosenTag !== tag));
    } else {
      setChosenTags([...chosenTags, tag]);
    }
    // }
    // if (chosenTags.includes(tag)) {
    //   setChosenTags(chosenTags.filter((chosenTag) => chosenTag !== tag));
    // }
  };

  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const isoDateTime = currentDate.toISOString().slice(0, 16); // Get the date and time in "YYYY-MM-DDTHH:mm" format
    return isoDateTime;
  };

  const capsule = {
    id: "1",
    question: "What's one thing that made you smile today",
    category: "fun",
    answer: { response },
    dateTime: getCurrentDateTime(),
    location: {
      name: "Stanford Campus",
      lat: 37.43358803600001,
      long: -122.18041604630488,
    },
    tags: { chosenTags },
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.base,
              borderRadius: 20,
              padding: 6,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons
              name="ios-arrow-back-circle-outline"
              size={35}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <Link
          href={{
            pathname: "/home",
          }}
          asChild
        >
          <TouchableOpacity style={styles.submitBtn}>
            <Text> Submit </Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.promptContainer}>
        <View style={styles.prompt}>
          <Text numberOfLines={3} style={styles.question}>
            What's one thing that made you smile today?
          </Text>
        </View>

        <TextInput
          style={styles.root}
          onChangeText={setResponse}
          value={response}
          placeholder="Type your response to the prompt..."
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.flairContainer}>
        <Text style={styles.chooseTagsText}> Choose Your Tags </Text>
        <View style={styles.chosenTagsContainer}>
          {chosenTags.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={styles.chosenTag}
              onPress={() => handleTagPress(tag)}
            >
              <Text style={styles.chosenTagText}>{tag}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Mapping each tag to TouchableOpacity */}
        <View style={styles.tagsContainer}>
          {TAGS.map((tag) => (
            <TouchableOpacity
              key={tag}
              style={styles.tag}
              onPress={() => handleTagPress(tag)}
            >
              <Text style={styles.tagText}>{tag}</Text>
              {/* <TagsBadges tag={tag} /> */}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Prompt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },

  submitBtn: {
    backgroundColor: Colors.base,
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  root: {
    width: windowWidth * 0.8,
    minHeight: 150,
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
    marginVertical: 20,
    paddingTop: 20,
  },

  promptContainer: {
    alignItems: "center",
    marginTop: 20,
  },

  prompt: {
    width: windowWidth * 0.8,
  },

  question: {
    fontSize: 20,
  },

  flairContainer: {
    alignItems: "center",
  },

  chooseTagsText: {
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    marginTop: 20,
  },

  chosenTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    width: windowWidth * 0.9,
    minHeight: 50,
    borderRadius: 10,
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: Colors.base300,
    backgroundColor: Colors.base,
  },

  chosenTag: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 8,
    margin: 5,
  },

  chosenTagText: {
    color: "white",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
  },

  tag: {
    backgroundColor: "#ddd",
    borderRadius: 20,
    padding: 8,
    margin: 5,
  },

  tagText: {
    color: "black",
  },
});
