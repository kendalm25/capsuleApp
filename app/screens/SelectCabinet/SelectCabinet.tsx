import React from 'react';
import { Text, ScrollView, View, StyleSheet, Pressable } from 'react-native';
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { useCabinets, useCapsule, useTheme } from '../../hooks';
import { CreateCabinet, CapsuleCard } from '@/components';
import { useDispatch } from 'react-redux';
import { storeToCabinet } from '@/store/capsule';
import { Colors } from '@/theme/Variables';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
  },
  capsule: {
    marginVertical: 48,
  },
  cabinet: {
    width: '100%',
    height: 48,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
    marginVertical: 10,
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  create: {
    marginVertical: 24,
  },
  selectedCabinet: {
    borderColor: Colors.primary,
  },
});

const SelectCabinet = () => {
  const route = useRoute<Route<'SelectCabinet', { id: string }>>();

  const { Layout, Fonts } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { capsule } = useCapsule(route.params?.id);
  const { cabinets } = useCabinets();

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.scrollSpaceBetween,
      ]}
    >
      {capsule && (
        <View
          style={[
            Layout.fill,
            Layout.fullWidth,
            Layout.alignItemsCenter,
            styles.container,
          ]}
        >
          <View style={[styles.capsule]}>
            <CapsuleCard capsule={capsule} />
          </View>
          <View style={[Layout.fullWidth]}>
            <Text style={[Fonts.textLarge, Fonts.textBold]}>
              Which cabinet would you like to store it in?
            </Text>
          </View>
          <ScrollView style={[Layout.fullWidth]}>
            {cabinets.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  dispatch(
                    storeToCabinet({ capsule: capsule.id, cabinet: item }),
                  );
                  navigation.goBack();
                }}
              >
                <View
                  style={[
                    Layout.center,
                    styles.cabinet,
                    item === capsule.cabinet ? styles.selectedCabinet : {},
                  ]}
                >
                  <Text style={[Fonts.textRegular]}>{item}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
          <View style={[styles.create]}>
            <CreateCabinet />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default SelectCabinet;
