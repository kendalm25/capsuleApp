import { Colors, FlairColors } from '@/theme/Variables';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

type Props = {
  type: keyof typeof FlairColors | string;
  style?: any;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'flex-start',
    lineHeight: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
});

const FlairTag = ({ type = '', style }: Props) => {
  const vars = FlairColors[type as keyof typeof FlairColors];
  return (
    <View
      style={[
        styles.container,
        vars || {
          backgroundColor: Colors.primary,
        },
        ...(Array.isArray(style) ? style : [style]),
      ]}
    >
      <Text
        style={{
          color: vars?.color || Colors.text,
        }}
      >
        {type}
      </Text>
    </View>
  );
};

FlairTag.defaultProps = {
  style: undefined,
};

export default FlairTag;
