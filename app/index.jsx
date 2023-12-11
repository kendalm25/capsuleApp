import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import Home from "@/app/home";
import Profile from "@/app/profile";
import TripleView from "@/app/tripleView";
import CreateCabinet from "@/app/(modal)/CreateCabinet";
import Capsule from "@/app/(modal)/Capsule";
import AnswerPrompt from "@/app/(modal)/AnswerPrompt";
import NewCapsule from "@/app/(modal)/NewCapsule";

// import logo from "../assets/Images/capsule-logo.png";
import logo from "@/assets/Images/logo.png";
import logoOutline from "@/assets/Images/logo-outline.png";
import { useState, useEffect } from "react";

import { supabase } from "../app/lib/supabase";
import Auth from "../components/Auth";
import Account from "../components/Account";

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const index = () => {
  const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [session, setSession] = useState(null);

  // useEffect(() => {
  //   const checkLoggedInStatus = async () => {
  //     const userSession = await supabase.auth.session();
  //     if (userSession) {
  //       setSession(userSession);
  //       console.log("user session: ", userSession);
  //       setLoggedIn(true);
  //     }
  //   };

  //   checkLoggedInStatus();

  //   const authListener = supabase.auth.onAuthStateChange(
  //     (_event, userSession) => {
  //       if (userSession) {
  //         setSession(userSession);
  //         console.log("user session: ", userSession);
  //         setLoggedIn(true);
  //       } else {
  //         setSession(null);
  //         console.log("user session: ", userSession);
  //         setLoggedIn(false);
  //       }
  //     }
  //   );

  //   return () => {
  //     authListener.unsubscribe();
  //   };
  // }, []);

  // const handleAuthSuccess = (userSession) => {
  //   setSession(userSession);
  //   setLoggedIn(true);
  // };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log("session: ", session);
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log("session: ", session);
      setSession(session);
    });
  }, []);

  if (!loggedIn) {
    return (
      <View>
        <View>
          {session && session.user ? (
            <Account key={session.user.id} session={session} />
          ) : (
            <Auth />
          )}
        </View>
      </View>
    );
  } else {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
              animation: "none",
            }}
            component={Home}
          />

          <Stack.Screen
            name="Profile"
            options={{
              headerShown: false,
              animation: "none",
            }}
            component={Profile}
          />

          <Stack.Screen
            name="Capsules"
            options={{
              headerShown: false,
              animation: "none",
            }}
            component={TripleView}
          />

          <Stack.Screen
            name="(modal)/CreateCabinet"
            options={{
              presentation: "modal",
              headerTitle: "Create Cabinet",

              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 6,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
            component={CreateCabinet}
          />

          <Stack.Screen
            name="(modal)/AnswerPrompt"
            options={{
              presentation: "modal",
              headerTitle: "Answer Prompt",

              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 6,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="close-outline"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
            component={AnswerPrompt}
          />

          <Stack.Screen
            name="(modal)/Capsule"
            options={{
              presentation: "modal",
              headerTitle: "Capsule",

              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 6,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="chevron-back"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
            component={Capsule}
          />
          <Stack.Screen
            name="(modal)/NewCapsule"
            options={{
              presentation: "modal",
              headerTitle: "Received Capsule",

              headerLeft: () => (
                <TouchableOpacity
                  style={{
                    borderRadius: 20,
                    padding: 6,
                  }}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="chevron-back"
                    size={28}
                    color={Colors.primary}
                  />
                </TouchableOpacity>
              ),
            }}
            component={NewCapsule}
          />
        </Stack.Navigator>

        <NavBar />
      </>
    );
  }
};

export default index;

const NavBar = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const activeTab = getFocusedRouteNameFromRoute(route) ?? "Home";

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Capsules")}
      >
        <Ionicons
          name={activeTab === "Capsules" ? "cube" : "cube-outline"}
          size={28}
          color="black"
        />
        <Text>Capsules</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          source={activeTab === "Home" ? logo : logoOutline}
          style={styles.logo}
        />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons
          name={activeTab === "Profile" ? "person" : "person-outline"}
          size={28}
          color="black"
        />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.base300,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  navItem: {
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: Colors.white,
  },

  logo: {
    height: 30,
    resizeMode: "contain",
    backgroundColor: Colors.white,
  },
});
