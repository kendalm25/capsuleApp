import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { useCapsule, useTheme } from '../../hooks';
import { AboutCapsuleCard, Button } from '@/components';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 44,
  },
  about: {
    marginBottom: 14,
  },
  buttonGap: {
    height: 14,
  },
  content: {
    minHeight: 80,
    padding: 12,
    marginVertical: 14,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
});

const StoreCapsule = () => {
  const route = useRoute<Route<'StoreCapsule', { id: string }>>();

  const { Layout, Fonts } = useTheme();
  const navigation = useNavigation<any>();
  const { capsule } = useCapsule(route.params?.id);

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
            Layout.justifyContentAround,
            Layout.alignItemsCenter,
            styles.container,
          ]}
        >
          <View>
            <Text style={[Fonts.textRegular, Fonts.textBold, styles.about]}>
              About This Capsule:
            </Text>
            <AboutCapsuleCard capsule={capsule} />
          </View>
          <View style={[Layout.fullWidth]}>
            <Text style={[Fonts.textLarge]}>{capsule.title}</Text>
            <View style={[styles.content, Layout.fullWidth]}>
              <Text style={[Fonts.textRegular]}>{capsule.content}</Text>
            </View>
          </View>
          <View>
            {/* Task.4 */}
            <Button
              width={205}
              title="Store In A Cabinet"
              onPress={() => {
                navigation.navigate('SelectCabinet', { id: capsule.id });
              }}
            />
            <View style={styles.buttonGap} />
            <Button
              width={114}
              title="Delete"
              onPress={() => {
                navigation.navigate('DeleteCapsule', { id: capsule.id });
              }}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default StoreCapsule;
