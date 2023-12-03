import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { BrandText, CapsuleList } from "@/components";
import { useReceivedCapsules, useTheme } from "@/hooks";

const styles = StyleSheet.create({
  container: {
    paddingBottom: 32,
  },
  brandTextContainer: {
    paddingTop: 28,
  },
});

const Home = () => {
  const { Layout } = useTheme();
  const { today, yesterday, earlier } = useReceivedCapsules();

  return (
    <ScrollView style={[Layout.fullSize, Layout.fill, styles.container]}>
      <View style={[]}>
        <View
          style={[
            styles.brandTextContainer,
            Layout.fullWidth,
            Layout.alignItemsCenter,
          ]}
        >
          <BrandText />
        </View>
        <CapsuleList title="Received Today" capsules={today} />
        {yesterday.length > 0 && (
          <CapsuleList title="Received Yesterday" capsules={yesterday} />
        )}
        {earlier.length > 0 && (
          <CapsuleList title="Earlier" capsules={earlier} />
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
