import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Capsule } from '@/store/capsule';
import { Text } from 'react-native';

type Props = {
  capsule: Capsule;
};

const styles = StyleSheet.create({
  container: {},
});

const AboutCapsuleCard = ({}: Props) => {
  return (
    <View style={[styles.container]}>
      <Text>Task.5</Text>
    </View>
  );
};

AboutCapsuleCard.defaultProps = {};

export default AboutCapsuleCard;
