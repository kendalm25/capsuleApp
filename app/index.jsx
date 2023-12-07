import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";

import Home from "@/app/home";
import Profile from "@/app/profile";
import Capsules from "@/app/capsules";
import CreateCabinet from "@/app/(modal)/CreateCabinet";
import Capsule from "@/app/(modal)/Capsule";
import logo from "../assets/Images/capsule-logo.png";

const Stack = createNativeStackNavigator(); // Stack contains Screen & Navigator properties

const index = () => {
  const navigation = useNavigation();

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}
          component={Home}
        />

        <Stack.Screen
          name="Profile"
          options={{
            headerShown: false,
          }}
          component={Profile}
        />

        <Stack.Screen
          name="Capsules"
          options={{
            headerTitle: "Capsules",
          }}
          component={Capsules}
        />

        <Stack.Screen
          name="(modal)/CreateCabinet"
          options={{
            presentation: "modal",
            headerTitle: "Create Cabinet",

            headerLeft: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
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
          name="(modal)/Capsule"
          options={{
            presentation: "modal",
            headerTitle: "Capsule",

            headerLeft: () => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
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
      </Stack.Navigator>

      <NavBar />
    </>
  );
};

export default index;

const NavBar = () => {
  const navigation = useNavigation();
  const activeTab = useRoute().name; // TODO fix this... broken

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Capsules")}
      >
        <Ionicons
          name={activeTab === "capsules" ? "cube" : "cube-outline"}
          size={28}
          color="black"
        />
        <Text>Capsules</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Home")}
      >
        {/* <Ionicons
          name={activeTab === "index" ? "home" : "home-outline"}
          size={28}
          color={Colors.primary}
        /> */}
        <Image source={logo} style={styles.logo} />

        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons
          name={activeTab === "profile" ? "person" : "person-outline"}
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
    justifyContent: "space-around",
    backgroundColor: Colors.base,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
  },

  logo: {
    height: 30,
    resizeMode: "contain",
  },
});
