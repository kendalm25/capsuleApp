import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text, TextInput } from 'react-native';
import { FlairSelect } from '@/components';
import { useTheme } from '../../hooks';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  header: {
    marginVertical: 12,
    height: 32,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  submit: {
    height: 28,
  },
  title: {
    marginBottom: 12,
  },
  editor: {
    flex: 1,
    maxHeight: '50%',
    padding: 12,
    marginTop: 12,
    borderRadius: 10,
    borderColor: '#D4D4D8',
    borderWidth: 1,
    borderStyle: 'solid',
    marginBottom: 48,
    fontSize: 18,
  },
});

const PreviewCapsule = () => {
  const { Layout, Fonts } = useTheme();
  const [flair, setFlair] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');

  return (
    <ScrollView
      style={Layout.fill}
      contentContainerStyle={[Layout.fullSize, Layout.fill, Layout.colCenter]}
    >
      <View
        style={[
          Layout.fill,
          Layout.fullWidth,
          Layout.alignItemsCenter,
          styles.container,
        ]}
      >
        <View style={[Layout.fullWidth, styles.header]}>
          <Text style={[styles.submit]}>submit</Text>
        </View>
        <View style={[Layout.fullWidth, styles.title]}>
          <Text style={[Fonts.textLarge]}>
            Which cabinet would you like to store it in?
          </Text>
        </View>
        <FlairSelect value={flair} onChange={setFlair} />
        <View style={[Layout.fullWidth, styles.editor]}>
          <TextInput
            editable
            multiline
            numberOfLines={10}
            onChangeText={setContent}
            value={content}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default PreviewCapsule;
