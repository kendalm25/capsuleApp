import React, { Fragment, useEffect, useRef } from 'react';
import {
  AppState,
  AppStateStatus,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
// import { useFlipper } from '@react-navigation/devtools';
import { Colors } from '@/theme/Variables';
import {
  Cabinet,
  CreateCabinet,
  DeleteCapsule,
  Home as _Home,
  Map,
  SelectCabinet,
  StoreCapsule,
  PreviewCapsule,
  Capsule,
  WriteCapsule,
} from '@/screens';
import { NavBack } from '@/components';
import { useTheme } from '@/hooks';
import { IconCabinet, IconHome, IconMap, IconUser } from '@/icons';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

const tabIcons = {
  Home: IconHome,
  Cabinet: IconCabinet,
  Map: IconMap,
  User: IconUser,
};

const Home = () => {
  return (
    <HomeStack.Navigator initialRouteName="_Home">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="_Home"
        component={_Home}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="PreviewCapsule"
        component={PreviewCapsule}
      />
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="Capsule"
        component={Capsule}
      />
      <HomeStack.Screen
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerLeft: NavBack.times,
        }}
        name="WriteCapsule"
        component={WriteCapsule}
      />
    </HomeStack.Navigator>
  );
};

const Main = () => {
  return (
    // <BottomSheetModalProvider>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: () => {
            const Icon =
              tabIcons[route.name as keyof typeof tabIcons] || Fragment;
            return <Icon />;
          },
          headerShown: false,
          tabBarInactiveBackgroundColor: Colors.tabBackground,
          tabBarActiveBackgroundColor: Colors.tabActiveBackground,
          tabBarLabelStyle: {
            display: 'none',
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cabinet" component={Cabinet} />
        <Tab.Screen name="Map" component={Map} />
        {/* Task.9 */}
        <Tab.Screen name="User" component={Map} />
      </Tab.Navigator>
    // </BottomSheetModalProvider>
  );
};

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();

  const navigationRef = useNavigationContainerRef();

  // useFlipper(navigationRef);

  return (
    <SafeAreaView style={[Layout.fill]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef} independent={true}>
        <InitNotification />
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Main"
            component={Main}
          />
          <Stack.Screen
            options={{
              headerTitle: '',
              headerTransparent: true,
              headerLeft: NavBack.normal,
            }}
            name="CreateCabinet"
            component={CreateCabinet}
          />
          <Stack.Screen
            options={{
              headerTitle: '',
              headerTransparent: true,
              headerLeft: NavBack.normal,
            }}
            name="StoreCapsule"
            component={StoreCapsule}
          />
          {/* Task.6 */}
          <Stack.Screen
            options={{
              headerTitle: '',
              headerTransparent: true,
              headerLeft: NavBack.normal,
            }}
            name="DeleteCapsule"
            component={DeleteCapsule}
          />
          <Stack.Screen
            options={{
              headerTitle: '',
              headerTransparent: true,
              headerLeft: NavBack.normal,
            }}
            name="SelectCabinet"
            component={SelectCabinet}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default ApplicationNavigator;

function InitNotification() {
  const initRef = useRef(false);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const initFn = (state: AppStateStatus) => {
      if (initRef.current) {
        return;
      }

      initRef.current = true;

      // PushNotificationIOS.getInitialNotification().then(notification => {
      //   if (state === 'active') {
      //     const id = notification?.getData().id;

      //     if (id) {
      //       navigation.navigate('PreviewCapsule', {
      //         id,
      //       });
      //     }
      //   }
      // });
    };

    const sub = AppState.addEventListener('change', initFn);

    return () => {
      sub.remove();
    };
  }, []);

  return null;
}
