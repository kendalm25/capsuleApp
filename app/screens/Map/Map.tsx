import React, { Fragment, useMemo, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useCapsules } from "../../hooks";

import MapView, { Marker } from "react-native-maps";
import { IconLogo } from "@/icons";
import { Colors } from "@/theme/Variables";
import { CapsuleList } from "@/components";

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
});

const Map = () => {
  const [mapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const [target, setTarget] = useState<number>();

  const capsules = useCapsules();

  const selectedCapsules = useMemo(() => {
    const targetRegion =
      typeof target === "number" ? capsules.capsules[target] : undefined;
    return capsules.capsules.filter(
      (item) =>
        item.region?.latitude === targetRegion?.region?.latitude &&
        item.region?.longitude === targetRegion?.region?.longitude
    );
  }, [capsules.capsules, target]);

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
        onPress={() => {
          setTarget(undefined);
        }}
      >
        {capsules.capsules.map((item, index) => {
          if (!item.region) {
            return <Fragment key={index} />;
          }

          return (
            <Marker
              key={index}
              coordinate={item.region}
              onPress={(e) => {
                e.stopPropagation();
                setTarget(index);
              }}
            >
              <IconLogo />
            </Marker>
          );
        })}
      </MapView>
      {typeof target === "number" && (
        <View style={styles.list}>
          <CapsuleList title="" capsules={selectedCapsules} />
        </View>
      )}
    </View>
  );
};

export default Map;
