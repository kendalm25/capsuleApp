import React, { useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { Brand, FlairSelect } from "@/components";
import { useTheme } from "../../hooks";
import { Colors } from "@/theme/Variables";
import { useDispatch } from "react-redux";
import { createCapsule } from "@/store/capsule";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 12,
    height: 32,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  submitContainer: {
    top: 14,
    justifyContent: "center",
    alignItems: "center",
    width: 64,
    height: 28,
    backgroundColor: "#059669",
    borderRadius: 8,
  },
  submit: {
    color: Colors.white,
  },
  title: {
    marginTop: 12,
    marginBottom: 12,
  },
  editor: {
    flex: 1,
    maxHeight: "50%",
    padding: 12,
    marginTop: 12,
    borderRadius: 10,
    borderColor: "#D4D4D8",
    borderWidth: 1,
    borderStyle: "solid",
    marginBottom: 48,
    fontSize: 18,
  },
  input: {
    height: "100%",
  },
});

const PreviewCapsule = () => {
  const { Layout, Fonts } = useTheme();
  const [flairs, setFlair] = useState<string[]>([]);
  const [title, setTitle] = useState<string>(
    "Which cabinet would you like to store it in?"
  );
  const [content, setContent] = useState<string>("");
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState<number>(0);

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fullSize, Layout.fill, Layout.colCenter]}
    >
      {!submitted ? (
        <View
          style={[
            Layout.fill,
            Layout.fullWidth,
            Layout.alignItemsCenter,
            styles.container,
          ]}
        >
          <View style={[Layout.fullWidth, styles.header]}>
            <Pressable
              onPress={() => {
                dispatch(
                  createCapsule({
                    capsule: {
                      title,
                      content,
                      flairs,
                    },
                  })
                );

                setSubmitted(1);
              }}
            >
              <View style={[styles.submitContainer]}>
                <Text style={[styles.submit]}>submit</Text>
              </View>
            </Pressable>
          </View>
          <View style={[Layout.fullWidth, styles.title]}>
            <TextInput
              style={[Fonts.textLarge]}
              editable
              multiline
              value={title}
              onChangeText={setTitle}
            />
          </View>
          <FlairSelect value={flairs} onChange={setFlair} />
          <View style={[Layout.fullWidth, styles.editor]}>
            <TextInput
              style={[styles.input]}
              editable
              multiline
              numberOfLines={10}
              value={content}
              onChangeText={setContent}
            />
          </View>
        </View>
      ) : (
        <View>
          <Brand
            animation
            revert={true}
            onAnimationEnd={() => setSubmitted(2)}
          />

          {
            <Text
              style={{
                opacity: Number(submitted === 2),
              }}
            >
              Submitted.
            </Text>
          }
        </View>
      )}
    </ScrollView>
  );
};

export default PreviewCapsule;
