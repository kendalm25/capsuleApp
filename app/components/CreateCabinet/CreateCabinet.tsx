import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { IconPlusCircle } from '@/icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  text: {
    fontSize: 18,
    color: '#09090B',
    marginLeft: 3,
  },
});

const CreateCabinet = () => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('CreateCabinet');
      }}
    >
      <View style={[styles.container]}>
        <IconPlusCircle />
        <Text style={[styles.text]}>Create New Cabinet</Text>
      </View>
    </Pressable>
  );
};

CreateCabinet.defaultProps = {};

export default CreateCabinet;
