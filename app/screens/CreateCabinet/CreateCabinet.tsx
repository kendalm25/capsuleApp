import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../../hooks';
import { Button } from '@/components';
import { useDispatch } from 'react-redux';
import { createCabinet } from '@/store/capsule';

const styles = StyleSheet.create({
  buttonGap: {
    height: 14,
  },
});

const CreateCabinet = () => {
  const { Layout } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

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
        <Text>Task.3</Text>
        <View>
          <Button
            width={114}
            title="Save"
            onPress={() => {
              dispatch(createCabinet(`Task.3 ${Date.now()}`));
              navigation.goBack();
            }}
          />
          <View style={styles.buttonGap} />
          <Button
            width={114}
            title="Go Back"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateCabinet;
