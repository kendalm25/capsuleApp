import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Capsule } from "@/store/capsule";
import { useNavigation } from "@react-navigation/native";
import { IconCapsule } from "@/icons";
import { Colors, FlairColors } from "@/theme/Variables";

type Props = {
  capsule: Capsule;
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 58,
    paddingVertical: 5,
    borderRadius: 12,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 48,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  icon: {
    marginTop: 2,
  },
});

const CapsuleItem = ({ capsule }: Props) => {
  const navigation = useNavigation<any>();

  const flair = capsule.flairs?.[0] as keyof typeof FlairColors;

  return (
    <View
      style={[
        styles.root,
        {
          ...(capsule.available
            ? {
                backgroundColor: flair && FlairColors[flair].backgroundColor,
              }
            : {}),
        },
      ]}
    >
      <Pressable
        onPress={() => {
          if (capsule.available) {
            navigation.navigate("PreviewCapsule", {
              id: capsule.id,
            });
          } else {
            navigation.navigate("StoreCapsule", { id: capsule.id });
          }
        }}
      >
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                !capsule.available && flair
                  ? FlairColors[flair].backgroundColor
                  : Colors.white,
            },
          ]}
        >
          <View style={[styles.icon]}>
            <IconCapsule />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

CapsuleItem.defaultProps = {};

export default CapsuleItem;
