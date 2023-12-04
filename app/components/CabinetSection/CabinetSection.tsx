import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Capsule } from '@/store/capsule';

import CapsuleCard from '../CapsuleCard/CapsuleCard';

type Props = {
  cabinet: string;
  capsules: Capsule[];
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 154,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#09090B',
  },
  capsule: {
    marginVertical: 18,
    marginRight: 12,
  },
});

const CapsuleSection = ({ cabinet, capsules }: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.title]}>
        <Text style={[styles.title]}>{cabinet}</Text>
      </View>
      <ScrollView horizontal={true}>
        {capsules.map(capsule => (
          <View style={[styles.capsule]} key={capsule.id}>
            <CapsuleCard capsule={capsule} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

CapsuleSection.defaultProps = {};

export default CapsuleSection;
