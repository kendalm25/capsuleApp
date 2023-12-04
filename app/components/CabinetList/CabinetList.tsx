import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useCabinetList } from '@/hooks';

import CapsuleSection from '../CabinetSection/CabinetSection';

type Props = {};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
  },
});

const CabinetList = ({}: Props) => {
  const { cabinetList } = useCabinetList();

  return (
    <View style={[styles.container]}>
      {cabinetList.map((item, index) => (
        <CapsuleSection
          key={index}
          cabinet={item.cabinet}
          capsules={item.capsules}
        />
      ))}
    </View>
  );
};

CabinetList.defaultProps = {};

export default CabinetList;
