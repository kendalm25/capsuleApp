import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks';
import { CabinetList, CreateCabinet } from '@/components';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  list: {
    marginVertical: 10,
  },
  createContainer: {
    marginVertical: 24,
    transform: [
      {
        translateX: -8,
      },
    ],
  },
});

const Cabinet = () => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[Layout.fill, Layout.fullWidth, styles.container]}>
      <Text style={Fonts.titleSmall}>Your Cabinets</Text>
      <ScrollView style={[Layout.fill, Layout.fullWidth]}>
        <View style={styles.list}>
          <CabinetList />
        </View>
      </ScrollView>
      <View style={styles.createContainer}>
        <CreateCabinet />
      </View>
    </View>
  );
};

export default Cabinet;
