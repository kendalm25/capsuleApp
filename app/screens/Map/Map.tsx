import React, { Fragment, useMemo, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { useCapsules, useReceivedCapsules } from "../../hooks";
import { CapsuleItem, CapsuleList } from "@/components";

import MapView, { Marker, LatLng, Region } from "react-native-maps";
import { IconLogo } from "@/icons";
import { Colors } from "@/theme/Variables";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    position: "absolute",
    top: 12,
    minHeight: 120,
    left: "10%",
    width: "80%",
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 12,
    shadowRadius: 4,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: Colors.black,
  },
  callout: {
    position: "absolute",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
  },
  calloutText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState<string | null>(null);
  const [markerPosition, setMarkerPosition] = useState<LatLng | null>(null);
  const [pressed, setPressed] = useState<boolean>(false);
  const { today, yesterday, earlier } = useReceivedCapsules();

  const handleMarkerPress = () => {
    if (selectedMarker) {
      setSelectedMarker(null);
    } else {
      setSelectedMarker("Marker Pressed");
    }
  };

  const [mapRegion] = useState({
    latitude: 37.42823,
    longitude: -122.168861,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [target, setTarget] = useState<number>();

  const capsules = useCapsules();

  // const selectedCapsules = useMemo(() => {
  //   const targetRegion =
  //     typeof target === "number" ? capsules.capsules[target] : undefined;
  //   return capsules.capsules.filter(
  //     (item) =>
  //       item.region?.latitude === targetRegion?.region?.latitude &&
  //       item.region?.longitude === targetRegion?.region?.longitude
  //   );
  // }, [capsules.capsules, target]);

  // const selectedCapsules = useMemo(() => {
  //   if (typeof target === "number" && capsules.capsules[target]?.region) {
  //     const selectedCapsule = capsules.capsules[target];
  //     return [selectedCapsule];
  //   }
  //   return [];
  // }, [capsules.capsules, target]);

  //

  // return (
  //   <View style={styles.container}>
  //     <MapView
  //       style={{ flex: 1 }}
  //       region={mapRegion}
  //     >
  //       {capsules.map((item, index) => (
  //         <Marker
  //           key={index}
  //           coordinate={item.region}
  //         />
  //       ))}
  //     </MapView>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <MapView style={{ flex: 1 }} region={mapRegion}>
        <Marker
          coordinate={{ latitude: 37.42823, longitude: -122.16 }}
          pinColor="red"
          onPress={() => handleMarkerPress()}
        />

        <Marker
          coordinate={{ latitude: 37.423, longitude: -122.168861 }}
          pinColor="green"
          onPress={() => handleMarkerPress()}
        />

        <Marker
          coordinate={{ latitude: 37.429, longitude: -122.176 }}
          pinColor="blue"
          onPress={() => handleMarkerPress()}
        />
      </MapView>

      {selectedMarker && (
        <View
          style={[
            styles.callout,
            {
              top: 200,
              left: 100,
            },
          ]}
        >
          <Text style={styles.calloutText}>Capsules Collected From Here</Text>
          <CapsuleList title="" capsules={earlier} />
          {/* <CapsuleItem key={item.id} capsule={item} />
          <CapsuleItem key={item.id} capsule={item} />
          <CapsuleItem key={item.id} capsule={item} /> */}
        </View>
      )}
    </View>
  );
};

export default Map;
