import { FlairColors } from '@/theme/Variables';
import React, { useCallback, useMemo, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
// TODO
// import { BottomSheetModal } from '@gorhom/bottom-sheet';
import FlairTag from '../FlairTag/FlairTag';
import { IconCheckBox, IconCheckBoxFill, IconPlus, IconTimes } from '@/icons';
import { useFlairs, useTheme } from '@/hooks';

type Props = {
  value: (keyof typeof FlairColors | string)[];
  onChange: (value: (keyof typeof FlairColors | string)[]) => void;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'flex-start',
    lineHeight: 16,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  flair: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginLeft: -20,
  },
  flairItem: {
    height: 28,
    justifyContent: 'center',
    marginLeft: 12,
    marginBottom: 6,
  },
  add: {
    height: 28,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderRadius: 10,
    borderColor: '#D4D4D8',
    borderWidth: 1,
    borderStyle: 'solid',
    marginLeft: 12,
  },
  addIcon: {
    marginTop: 7,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: 16,
  },
  title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    marginTop: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemTag: {
    lineHeight: 24,
    paddingVertical: 4,
    marginLeft: 24,
  },
});

const FlairSelect = ({ value, onChange }: Props) => {
  const { Fonts } = useTheme();
  const { flairs } = useFlairs();

  // TODO
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const bottomSheetModalRef = useRef<any>(null);

  const snapPoints = useMemo(() => ['50%', '80%', '100%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const renderBackground = ({
    style,
    ...rest
  }: {
    style?: StyleProp<ViewStyle>;
  }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          bottomSheetModalRef.current?.close();
        }}
      >
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={[style, { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)' }]}
          {...rest}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={[styles.container]}>
      <Pressable
        onPress={() => {
          bottomSheetModalRef.current?.present();
        }}
      >
        <View style={[styles.flair]}>
          {value.map(flair => (
            <FlairTag key={flair} style={[styles.flairItem]} type={flair} />
          ))}
          <View style={[styles.add]}>
            <Text>Add Flairs </Text>
            <IconPlus style={[styles.addIcon]} />
          </View>
        </View>
      </Pressable>
      {/* <BottomSheetModal
        ref={bottomSheetModalRef}
        backdropComponent={renderBackground}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        handleComponent={null}
      >
        <View style={styles.contentContainer}>
          <View style={styles.title}>
            <Text style={[Fonts.textBold, Fonts.textRegular]}>Add flair</Text>
            <Pressable onPress={() => bottomSheetModalRef.current?.close()}>
              <IconTimes />
            </Pressable>
          </View>
          <View style={[styles.content]}>
            {flairs.map((flair, index) => {
              const checked = value.includes(flair);
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    onChange(
                      checked
                        ? value.filter(item => item !== flair)
                        : [...value, flair],
                    );
                  }}
                >
                  <View style={[styles.item]}>
                    {checked ? <IconCheckBoxFill /> : <IconCheckBox />}
                    <FlairTag style={[styles.itemTag]} type={flair} />
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </BottomSheetModal> */}
    </View>
  );
};

FlairSelect.defaultProps = {};

export default FlairSelect;
