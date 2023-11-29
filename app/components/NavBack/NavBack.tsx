import { IconBack, IconTimes } from '@/icons';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  icon?: FC;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

const NavBack = ({ icon: Icon = IconBack }: Props) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack}>
        <Icon />
      </Pressable>
    </View>
  );
};

NavBack.defaultProps = {
  icon: IconBack,
};

NavBack.normal = () => <NavBack />;
NavBack.times = () => <NavBack icon={IconTimes} />;

export default NavBack;
