import React from 'react';
import { Text, ScrollView, Alert } from 'react-native';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useAvailableCapsule, useTheme } from '../../hooks';
import { Button } from '@/components';
import { useDispatch } from 'react-redux';
import {
  createUnSavedMockCapsule,
  makeRandomAvailable,
  resetCapsuleStore,
} from '@/store/capsule';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const navigation = useNavigation<any>();
  const { Layout } = useTheme();
  const dispatch = useDispatch();

  const { capsule } = useAvailableCapsule();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceAround,
      ]}
    >
      <Text>Map</Text>
      <Button
        title="WriteCapsule"
        onPress={() => {
          navigation.navigate('WriteCapsule');
        }}
      />
      <Button
        title="CreateUnSavedMockCapsule"
        onPress={() => {
          dispatch(createUnSavedMockCapsule());
        }}
      />
      <Button
        title="MakeRandomAvailable"
        onPress={() => {
          dispatch(makeRandomAvailable());
        }}
      />

      <Button
        title="MakeRandomAvailableAndPushNotification"
        onPress={() => {
          dispatch(makeRandomAvailable());

          setTimeout(() => {
            const id = capsule?.id;

            if (!id) {
              return;
            }

            Alert.alert('Not ready in expo')

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
      />

      <Button
        title="ResetAll"
        onPress={() => {
          Alert.prompt('reset', 'type "ok" to conform', text => {
            if (text === 'ok') {
              dispatch(resetCapsuleStore());
            }
          });
        }}
      />
    </ScrollView>
  );
};

export default Map;
