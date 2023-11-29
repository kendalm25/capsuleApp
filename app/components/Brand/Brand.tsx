import React, { useEffect } from 'react';
import { View, DimensionValue, Animated, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks';

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  animation?: boolean;
  onAnimationEnd?: () => void;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  edge: {
    width: 69,
    height: 72,
  },
  center: {
    width: 71,
    height: 87,
    transform: [{ translateX: -1 }],
  },
});

const Brand = ({ height, width, animation, onAnimationEnd }: Props) => {
  const { Images } = useTheme();

  const topTranslateY = new Animated.Value(36);
  const bottomTranslateY = new Animated.Value(-36);

  useEffect(() => {
    if (!animation) {
      return;
    }

    Animated.timing(topTranslateY, {
      toValue: -14,
      duration: 1200,
      useNativeDriver: true,
    }).start(onAnimationEnd);
    Animated.timing(bottomTranslateY, {
      toValue: 14,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [animation]);

  return (
    <View style={[styles.container, { height, width }]}>
      <Animated.Image
        style={[
          styles.edge,
          {
            transform: [
              {
                translateY: topTranslateY,
              },
            ],
          },
        ]}
        source={Images.capsule.top}
      />
      <Animated.Image style={styles.center} source={Images.capsule.mid} />
      <Animated.Image
        style={[
          styles.edge,
          {
            transform: [
              {
                translateY: bottomTranslateY,
              },
            ],
          },
        ]}
        source={Images.capsule.bottom}
      />
    </View>
  );
};

Brand.defaultProps = {
  width: 71,
  height: 360,
  animation: false,
  onAnimationEnd: undefined,
};

export default Brand;
