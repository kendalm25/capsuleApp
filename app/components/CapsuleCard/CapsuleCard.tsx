import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Capsule } from '@/store/capsule';
import { useTheme } from '@/hooks';
import FlairTag from '../FlairTag/FlairTag';
import { useNavigation } from '@react-navigation/native';

type Props = {
  capsule: Capsule;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 258,
    height: 84,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    overflow: 'hidden',
  },
  icon: {
    width: 38,
    height: 38,
    backgroundColor: '#ccc',
    marginRight: 10,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: 38,
  },
  flair: {
    marginTop: 10,
  },
});

const CapsuleCard = ({ capsule }: Props) => {
  const navigation = useNavigation<any>();
  const { Fonts } = useTheme();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('StoreCapsule', { id: capsule.id });
      }}
    >
      <View style={[styles.container]}>
        <View style={[styles.icon]}>{/* Task.1 */}</View>
        <View style={[styles.content]}>
          {/* Task.2 */}
          <Text numberOfLines={1} ellipsizeMode="tail" style={[Fonts.textBold]}>
            {capsule.title}
          </Text>
          <Text numberOfLines={1} ellipsizeMode="tail">
            {capsule.content}
          </Text>

          <View style={[styles.flair]}>
            {capsule.flairs?.map(flair => (
              <FlairTag key={flair} type={flair} />
            ))}
          </View>
        </View>
      </View>
    </Pressable>
  );
};

CapsuleCard.defaultProps = {};

export default CapsuleCard;
