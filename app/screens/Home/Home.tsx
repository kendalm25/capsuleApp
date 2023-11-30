import React from "react";
import { View, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Brand, BrandText, Button } from "@/components";
import { useAvailableCapsule, useTheme } from "@/hooks";
import { Colors } from "@/theme/Variables";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  brandTextContainer: {
    paddingTop: 28,
    paddingBottom: 28,
  },

  capsuleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  capsuleAvailable: {
    width: windowWidth * 0.8,
    backgroundColor: "#f2f2f2",
    height: 150,
    marginBottom: 10,
    justifyContent: "center",
    borderRadius: 50,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
  },

  capsuleAvailableText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});

const Home = () => {
  const navigation = useNavigation<any>();
  const { Layout } = useTheme();
  const { capsule } = useAvailableCapsule();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      <View
        style={[
          Layout.fill,
          Layout.fullWidth,
          Layout.justifyContentAround,
          Layout.alignItemsCenter,
        ]}
      >
        <View
          style={[
            Layout.fullWidth,
            Layout.justifyContentAround,
            Layout.alignItemsCenter,
          ]}
        >
          <View
            style={[
              Layout.fullWidth,
              Layout.justifyContentAround,
              Layout.alignItemsCenter,
              styles.brandTextContainer,
            ]}
          >
            <BrandText />
          </View>
          <Brand height={160} />
        </View>
        {capsule ? (
          <View style={[styles.capsuleContainer]}>
            <View style={[styles.capsuleAvailable]}>
              <Text style={[styles.capsuleAvailableText]}>
                New Capsule Available To View!
              </Text>
            </View>

            {/* <Text>Task.7</Text> */}
            <Button
              width={222}
              title="View Capsule"
              onPress={() => {
                navigation.navigate("PreviewCapsule", {
                  id: capsule.id,
                });
              }}
            />
          </View>
        ) : (
          <View>
            <Text>A New Prompt Will Be Available Soon :)</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
