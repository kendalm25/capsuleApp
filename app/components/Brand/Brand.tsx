import React, { useEffect, useState } from "react";
import { View, DimensionValue, Animated, StyleSheet } from "react-native";
import { useTheme } from "@/hooks";

type Props = {
  height?: DimensionValue;
  width?: DimensionValue;
  animation?: boolean;
  revert?: boolean;
  onAnimationEnd?: () => void;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
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

const Brand = ({ height, width, animation, revert, onAnimationEnd }: Props) => {
  const { Images } = useTheme();

  const [from, to] = revert ? [-14, -36] : [36, 14];

  const [end, setEnd] = useState(false);
  const topTranslateY = new Animated.Value(from);
  const bottomTranslateY = new Animated.Value(-from);

  useEffect(() => {
    if (!animation) {
      return;
    }

    Animated.timing(topTranslateY, {
      toValue: -to,
      duration: 1200,
      useNativeDriver: true,
    }).start(() => {
      onAnimationEnd?.();
      setEnd(true);
    });
    Animated.timing(bottomTranslateY, {
      toValue: to,
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
                translateY: end ? -to : topTranslateY,
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
                translateY: end ? to : bottomTranslateY,
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
  revert: false,
  onAnimationEnd: undefined,
};

export default Brand;
