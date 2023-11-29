import { Colors } from '@/theme/Variables';
import React from 'react';
import {
  View,
  StyleSheet,
  Button as RNButton,
  DimensionValue,
} from 'react-native';

type Props = {
  width?: DimensionValue;
  title?: string;
  onPress?: () => void;
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    color: Colors.text,
    backgroundColor: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 8,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
  },
});

const Button = ({ width = '100%', title = '', onPress }: Props) => {
  return (
    <View style={[styles.container, { width }]}>
      <RNButton color={Colors.text} title={title} onPress={onPress} />
    </View>
  );
};

Button.defaultProps = {
  width: undefined,
  title: undefined,
  onPress: undefined,
};

export default Button;
