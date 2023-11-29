import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { AboutCapsuleCard, Brand, Button } from '@/components';
import { useCapsule, useTheme } from '../../hooks';

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

const PreviewCapsule = () => {
  const route = useRoute<Route<'PreviewCapsule', { id: string }>>();

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
          <View>
            <Brand height={160} />
          </View>
          <View>
            <Button
              width={222}
              title="Open Capsule"
              onPress={() => {
                navigation.navigate('Capsule', { id: capsule.id });
              }}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default PreviewCapsule;
