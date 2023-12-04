import React from 'react';
import { View, DimensionValue, StyleSheet, Image } from 'react-native';
import { useTheme } from '@/hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const BrandText = ({ width, height }: Props) => {
  const { Images } = useTheme();

  return (
    <View style={[styles.container, { width, height }]}>
      <Image
        style={{ width, height }}
        source={Images.capsule.text}
        resizeMode={'contain'}
      />
    </View>
  );
};

BrandText.defaultProps = {
  width: '100%',
  height: 100,
};

export default BrandText;
