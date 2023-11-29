import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Brand, BrandText, Button } from "@/components";
import { useAvailableCapsule, useTheme } from "@/hooks";

const styles = StyleSheet.create({
  brandTextContainer: {
    paddingTop: 28,
    paddingBottom: 28,
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
          <View>
            <Text>Task.7</Text>
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
