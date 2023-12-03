import React from "react";
import { Text, ScrollView, StyleSheet, Dimensions } from "react-native";
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useAvailableCapsule, useTheme } from "../../hooks";
import { Button } from "@/components";
import { useDispatch } from "react-redux";
import { createCapsule, makeRandomAvailable } from "@/store/capsule";
import { useNavigation } from "@react-navigation/native";
import { IconLight } from "@/icons";
import { Colors } from "@/theme/Variables";

const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  capsuleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },

  capsuleAvailable: {
    width: windowWidth * 0.8,
    backgroundColor: "#D9D9D9",
    height: 135,
    marginBottom: 24,
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
    fontSize: 20,
    fontWeight: "700",
  },
});

const User = () => {
  const navigation = useNavigation<any>();
  const { Layout } = useTheme();
  const dispatch = useDispatch();

  const { capsule } = useAvailableCapsule();

  return (
    <ScrollView style={Layout.fill}>
      <Text>User Screen</Text>
      <Button
        title="WriteCapsule"
        onPress={() => {
          navigation.navigate("WriteCapsule");
        }}
      />
      <Button
        title="CreateCapsule"
        onPress={() => {
          dispatch(createCapsule({ capsule: {} }));
        }}
      />
      <Button
        title="CreateYesterdayOrEarlierCapsule"
        onPress={() => {
          dispatch(
            createCapsule({
              capsule: {
                date:
                  Date.now() -
                  1000 * 60 * 60 * Math.round(Math.random() * 30 + 24),
              },
            })
          );
        }}
      />
      <Button
        title="MakeRandomAvailable"
        onPress={() => {
          dispatch(makeRandomAvailable());
        }}
      />

      {/* <Button
        title="MakeRandomAvailableAndPushNotification"
        onPress={() => {
          dispatch(makeRandomAvailable());

          setTimeout(() => {
            const id = capsule?.id;

            if (!id) {
              return;
            }

            Alert.alert("Not ready in expo");

            // PushNotificationIOS.requestPermissions().then(() => {
            //   PushNotificationIOS.addNotificationRequest({
            //     id: 'capsule',
            //     title: 'Capsule',
            //     subtitle: 'A new prompt is available.',
            //     fireDate: new Date(Date.now() + 10 * 1000),
            //     userInfo: {
            //       id,
            //     },
            //   });

            //   Alert.alert(
            //     'You need to shut down the process within ten seconds because the app cannot receive push notifications when it is in the foreground.',
            //   );
            // });
          });
        }}
      /> */}

      {/* <Button
        title="ResetAll"
        onPress={() => {
          Alert.prompt("reset", 'type "ok" to conform', (text) => {
            if (text === "ok") {
              dispatch(resetCapsuleStore());
            }
          });
        }}
      /> */}

      {/* old home screen*/}
      {/* {capsule ? (
        <View style={[styles.capsuleContainer]}>
          <View
            style={[
              Layout.row,
              Layout.alignItemsCenter,
              styles.capsuleAvailable,
            ]}
          >
            <Text style={[styles.capsuleAvailableText]}>
              New Capsule Available!
            </Text>
            <IconLight />
          </View>

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
      )} */}
    </ScrollView>
  );
};

export default User;
