import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Route, useNavigation, useRoute } from '@react-navigation/native';
import { useCapsule, useTheme } from '../../hooks';
import { Button, CapsuleCard } from '@/components';
import { useDispatch } from 'react-redux';
import { deleteCapsule } from '@/store/capsule';

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    paddingHorizontal: 44,
  },
  buttonGap: {
    height: 14,
  },
  title: {
    marginVertical: 48,
    alignItems: 'center',
  },
  tip: {
    marginVertical: 12,
  },
  capsule: {
    marginBottom: 48,
  },
});

const DeleteCapsule = () => {
  const route = useRoute<Route<'DeleteCapsule', { id: string }>>();

  const { Layout, Fonts } = useTheme();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const { capsule } = useCapsule(route.params?.id);

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[
        Layout.fullSize,
        Layout.fill,
        Layout.colCenter,
        Layout.justifyContentAround,
        Layout.scrollSpaceBetween,
      ]}
    >
      {capsule ? (
        <View
          style={[
            Layout.fill,
            Layout.fullWidth,
            Layout.alignItemsCenter,
            styles.container,
          ]}
        >
          <View style={[Layout.fullWidth, styles.title]}>
            <Text style={[Fonts.textLarge, Fonts.textBold]}>
              Are you sure you want to delete this capsule?
            </Text>
            <Text style={[styles.tip]}>(This action cannot be undone)</Text>
          </View>
          <View style={[Layout.fullWidth, styles.capsule]}>
            <CapsuleCard capsule={capsule} />
          </View>
          <View>
            <Button
              width={205}
              title="Yes, Delete Capsule"
              onPress={() => {
                dispatch(deleteCapsule(capsule.id));
              }}
            />
            <View style={styles.buttonGap} />
            <Button
              width={205}
              title="No, Go Back"
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </View>
      ) : (
        <View
          style={[
            Layout.fill,
            Layout.fullWidth,
            Layout.justifyContentAround,
            Layout.alignItemsCenter,
            styles.container,
          ]}
        >
          <View style={[Layout.fullWidth, styles.title]}>
            <Text style={[Fonts.textLarge, Fonts.textBold]}>
              The Capsule has been successfully deleted.
            </Text>
          </View>
          <View>
            <Button
              width={205}
              title="Go to Cabinets"
              onPress={() => {
                navigation.navigate('Cabinet');
              }}
            />
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DeleteCapsule;
