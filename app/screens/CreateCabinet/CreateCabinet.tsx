import React, { useState } from "react";
import { Text, ScrollView, View, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks";
import { Button } from "@/components";
import { useDispatch } from "react-redux";
import { createCabinet } from "@/store/capsule";

const styles = StyleSheet.create({
  buttonGap: {
    height: 14,
  },
  inputWrapper: {
    width: "80%",
    justifyContent: "center",
    height: 48,
    borderRadius: 10,
    borderColor: "#D4D4D8",
    borderWidth: 1,

    padding: 12,
    marginTop: 30,
    marginBottom: 110,
  },
  input: {
    lineHeight: 24,
    fontSize: 20,
  },
});

const CreateCabinet = () => {
  const { Layout, Fonts } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");

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
          Layout.justifyContentCenter,
          Layout.alignItemsCenter,
        ]}
      >
        <Text style={[Fonts.titleSmall]}>Name this new cabinet</Text>
        <View style={[Layout.fullWidth, styles.inputWrapper]}>
          <TextInput
            style={styles.input}
            editable
            multiline
            numberOfLines={1}
            maxLength={40}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={{ opacity: Number(Boolean(name.trim().length)) }}>
          <Button
            width={114}
            title="Save"
            onPress={() => {
              if (!name.trim().length) {
                return;
              }

              dispatch(createCabinet(name.trim()));
              navigation.goBack();
            }}
          />
          <View style={styles.buttonGap} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateCabinet;
