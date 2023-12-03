import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Capsule } from "@/store/capsule";
import CapsuleItem from "../CapsuleItem/CapsuleItem";

type Props = {
  title: string;
  capsules: Capsule[];
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 18,
    margin: 12,
  },
  list: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

const CapsuleList = ({ title, capsules }: Props) => {
  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      )}
      <View style={styles.list}>
        {capsules.map((item) => (
          <CapsuleItem key={item.id} capsule={item} />
        ))}
      </View>
    </View>
  );
};

CapsuleList.defaultProps = {};

export default CapsuleList;
