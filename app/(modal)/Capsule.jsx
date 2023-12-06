import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useCapsuleStore } from "@/store/capsuleStore";
import MapView, { Circle } from "react-native-maps";
import Colors from "@/constants/Colors";
import { TagsBadges } from "@/components/Badge";

const Capsule = () => {
  console.log("here");
  const { id } = useLocalSearchParams();
  const { capsules } = useCapsuleStore();
  const capsule = capsules.find((capsule) => capsule.id === id);

  console.log("id", id, "capsule", capsule);

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{capsule.question}</Text>
      <Text style={styles.answer}>{capsule.answer}</Text>
      <TagsBadges tags={capsule.tags} />
      <Text style={styles.date}>
        {new Date(capsule.dateTime).toDateString()}
      </Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: capsule.location.lat,
          longitude: capsule.location.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Circle
          center={{
            latitude: capsule.location.lat,
            longitude: capsule.location.long,
          }}
          radius={3000}
          title={capsule.location.name}
          fillColor="rgba(255, 0, 0, 0.2)"
          strokeColor="rgba(255, 0, 0, 1)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.base,
  },
  question: {
    fontSize: 24,
    fontWeight: "bold",
  },
  answer: {
    fontSize: 20,
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    marginTop: 6,
    color: Colors.base700,
  },
  map: {
    width: "100%",
    height: 200,
    marginTop: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
});

export default Capsule;
