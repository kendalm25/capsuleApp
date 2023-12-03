import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Route, useNavigation, useRoute } from "@react-navigation/native";
import { Brand, Button } from "@/components";
import { useCapsule, useTheme } from "../../hooks";
import { useDispatch } from "react-redux";
import { viewCapsule } from "@/store/capsule";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
  },
  buttonGap: {
    height: 14,
  },
  content: {
    minHeight: 80,
    padding: 12,
    marginVertical: 14,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },
});

const Capsule = () => {
  const route = useRoute<Route<"Capsule", { id: string }>>();
  const [loaded, setLoaded] = useState(false);

  const { Layout, Fonts } = useTheme();
  const navigation = useNavigation<any>();
  const { capsule } = useCapsule(route.params?.id);
  const dispatch = useDispatch();

  return loaded && capsule ? (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.justifyContentAround,
        Layout.alignItemsCenter,
        styles.container,
      ]}
    >
      <View style={[Layout.fullWidth]}>
        <Text style={[Fonts.textLarge]}>{capsule.title}</Text>
        <View style={[styles.content, Layout.fullWidth]}>
          <Text style={[Fonts.textRegular]}>{capsule.content}</Text>
        </View>
      </View>
      <View>
        <Button
          width={222}
          title="Save Capsule"
          onPress={() => {
            dispatch(viewCapsule(capsule.id));
            navigation.navigate("_Home");
          }}
        />
      </View>
    </View>
  ) : (
    <View
      style={[
        Layout.fill,
        Layout.fullWidth,
        Layout.justifyContentAround,
        Layout.alignItemsCenter,
        styles.container,
      ]}
    >
      <Brand animation onAnimationEnd={() => setLoaded(true)} />
    </View>
  );
};

export default Capsule;
