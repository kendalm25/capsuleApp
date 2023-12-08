import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { CabinetHorizontalList } from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/capsuleStore";
import { Link, useRouter } from "expo-router";
import Toolbar from "@/components/ToolBar";
import MapView, { Marker } from "react-native-maps";
import Capsules from "@/components/Capsules";

const windowWidth = Dimensions.get("window").width;

export default function TripleView() {
  const { cabinets, capsules, capsulePrompts, justViewedCapsules } =
    useCapsuleStore();
  const [currentScreen, setCurrentScreen] = useState("Capsules");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});

  const filteredCapsules = capsules.filter((capsule) => {
    const { question, answer } = capsule;
    const searchLower = search.toLowerCase();
    return (
      question.toLowerCase().includes(searchLower) ||
      answer.toLowerCase().includes(searchLower)
    );
  });

  const cabinetsWithCapsules = cabinets
    .map((cabinet) => {
      const cabinetCapsules = cabinet.capsule_ids.map((capsuleId) => {
        return filteredCapsules.find((capsule) => capsule.id === capsuleId);
      });
      return { ...cabinet, capsules: cabinetCapsules };
    })
    .sort((a, b) => {
      if (a.editedAt > b.editedAt) {
        return -1;
      } else if (a.editedAt < b.editedAt) {
        return 1;
      } else {
        return 0;
      }
    });

  const ScreensNavigator = () => {
    if (currentScreen === "Capsules") {
      return <Capsules capsules={filteredCapsules} />;
    } else if (currentScreen === "Map") {
      return <Map capsules={filteredCapsules} />;
    } else if (currentScreen === "Cabinets") {
      return (
        <Cabinets
          cabinetsWithCapsules={cabinetsWithCapsules}
          capsules={capsules}
        />
      );
    }
  };

  if (!cabinetsWithCapsules) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <>
      <Toolbar
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        search={search}
        setSearch={setSearch}
      />
      <ScreensNavigator />
    </>
  );
}

function Cabinets({ cabinetsWithCapsules, capsules }) {
  const allCapsulesCabinet = {
    id: "all",
    name: "All Capsules",
    capsules: capsules,
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 40,
      }}
    >
      {/* Different cabinets */}
      {cabinetsWithCapsules.map((cabinet) => (
        <CabinetHorizontalList key={cabinet.id} cabinet={cabinet} />
      ))}
      <CabinetHorizontalList cabinet={allCapsulesCabinet} />

      {/* Create new cabinets */}
      <Link href={{ pathname: "/(modal)/CreateCabinet" }} asChild>
        <TouchableOpacity>
          <View style={styles.cabinet}>
            <Text style={styles.cabinetName}>Create New Cabinet</Text>
            <Ionicons
              style={(styles.icon, { marginLeft: 8 })}
              name="add-circle-outline"
              size={20}
            />
          </View>
        </TouchableOpacity>
      </Link>
    </ScrollView>
  );
}

function Map({ capsules }) {
  const router = useRouter();
  const initialRegion = capsules.reduce(
    (acc, capsule, index, array) => {
      const { lat, long } = capsule.location;

      acc.latitude += lat;
      acc.longitude += long;

      acc.maxLatitude = Math.max(acc.maxLatitude, lat);
      acc.minLatitude = Math.min(acc.minLatitude, lat);
      acc.maxLongitude = Math.max(acc.maxLongitude, long);
      acc.minLongitude = Math.min(acc.minLongitude, long);

      if (index === array.length - 1) {
        acc.latitude /= array.length;
        acc.longitude /= array.length;

        if (array.length === 1) {
          // min max to make sure the delta is 0.01
          acc.maxLatitude = 0.05;
          acc.minLatitude = 0;
          acc.maxLongitude = 0.05;
          acc.minLongitude = 0;
        }
      }

      return acc;
    },
    {
      latitude: 0,
      longitude: 0,
      maxLatitude: -Infinity,
      minLatitude: Infinity,
      maxLongitude: -Infinity,
      minLongitude: Infinity,
    }
  );

  if (capsules.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <Text>No capsules found</Text>
      </View>
    );
  }

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: initialRegion.latitude,
        longitude: initialRegion.longitude,
        latitudeDelta: initialRegion.maxLatitude - initialRegion.minLatitude,
        longitudeDelta: initialRegion.maxLongitude - initialRegion.minLongitude,
      }}
    >
      {capsules.map((capsule) => (
        <Marker
          key={capsule.id}
          coordinate={{
            latitude: capsule.location.lat,
            longitude: capsule.location.long,
          }}
          title={capsule.question}
          description={capsule.answer}
          onCalloutPress={() => {
            router.push(`/(modal)/Capsule?id=${capsule.id}`);
          }}
        />
      ))}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    backgroundColor: Colors.base,
  },

  header: {
    marginTop: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  navText: {
    fontSize: 25,
    fontWeight: "800",
  },

  logo: {
    height: 100,
    resizeMode: "contain",
  },

  promptContainer: {
    width: windowWidth * 0.9,
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.base300,
    shadowColor: Colors.base950,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 6,
  },

  promptAvailContainer: {
    flexDirection: "row",
  },

  promptAvailText: {
    fontSize: 25,
    fontWeight: "300",
    marginRight: 5,
    marginBottom: 3,
  },

  promptText: {
    textAlign: "center",
  },

  capsuleTitle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "800",
    color: Colors.base950,
    marginVertical: 20,
  },

  icon: {
    flexDirection: "row",
    alignItems: "center",
    color: Colors.base950,
  },

  cabinet: {
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },

  cabinetName: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.base950,
  },
});
