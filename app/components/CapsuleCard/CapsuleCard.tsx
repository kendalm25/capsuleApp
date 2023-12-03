import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Capsule } from "@/store/capsule";
import { useTheme } from "@/hooks";
import FlairTag from "../FlairTag/FlairTag";
import { useNavigation } from "@react-navigation/native";
import { IconLogo } from "@/icons";

type Props = {
  capsule: Capsule;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: 258,
    height: 84,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    overflow: "hidden",
  },
  icon: {
    width: 38,
    height: 38,
    backgroundColor: "#ccc",
    marginRight: 10,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    paddingRight: 38,
  },
  date: {
    transform: [
      {
        scale: 0.8,
      },
    ],
  },
  flair: {
    marginTop: 2,
  },
});

const CapsuleCard = ({ capsule }: Props) => {
  const navigation = useNavigation<any>();
  const { Layout, Fonts } = useTheme();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate("StoreCapsule", { id: capsule.id });
      }}
    >
      <View style={[styles.container]}>
        <View style={[styles.icon]}>
          <IconLogo />
        </View>
        <View style={[styles.content]}>
          <View style={[Layout.alignItemsEnd, styles.date]}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[Fonts.textTiny]}
            >
              {formatDate(capsule.date)}
            </Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode="tail" style={[Fonts.textBold]}>
            {capsule.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {capsule.content}
          </Text>

          <View style={[styles.flair, Layout.row]}>
            {capsule.flairs?.map((flair) => (
              <FlairTag key={flair} type={flair} />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

CapsuleCard.defaultProps = {};

export default CapsuleCard;

function formatDate(timestamp: number) {
  let date = new Date(timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let formattedDate = month + "/" + day + "/" + year;

  return formattedDate;
}
