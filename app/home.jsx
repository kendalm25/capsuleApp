import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { YourCapsules } from "@/components/YourCapsules";
import { CapsuleCardHorizontalList } from "@/components/CapsuleCard";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useCapsuleStore } from "@/store/capsuleStore";
import { Link } from "expo-router";

const Home = () => {
  const { cabinets, capsules } = useCapsuleStore();

  //  join all the cabinets and capsules
  const cabinetsWithCapsules = cabinets.map((cabinet) => {
    const cabinetCapsules = cabinet.capsule_ids.map((capsuleId) => {
      return capsules.find((capsule) => capsule.id === capsuleId);
    });
    return { ...cabinet, capsules: cabinetCapsules };
  });

  const allCapsulesCabinet = {
    id: "all",
    name: "All Capsules",
    capsules: capsules,
  };

  if (!cabinetsWithCapsules) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.headerIcon}>
        <Text style={styles.header}>Capsule Timeline</Text>
        <Ionicons style={styles.icon} name="ios-chevron-forward" size={20} />
      </View>
      <YourCapsules />

      {/* Different cabinets */}
      {cabinetsWithCapsules.map((cabinet) => (
        <View key={cabinet.id}>
          <View style={styles.headerIcon}>
            <Text style={styles.header}>{cabinet.name}</Text>
            <Ionicons
              style={styles.icon}
              name="ios-chevron-forward"
              size={20}
            />
          </View>
          <CapsuleCardHorizontalList cabinet={cabinet} />
        </View>
      ))}

      {/* All capsules */}
      <View>
        <View style={styles.headerIcon}>
          <Text style={styles.header}>All Capsules</Text>
          <Ionicons style={styles.icon} name="ios-chevron-forward" size={20} />
        </View>
        <CapsuleCardHorizontalList cabinet={allCapsulesCabinet} />
      </View>

      {/* Create new cabinets */}
      <Link href={{ pathname: "/(modal)/CreateCabinet" }} asChild>
        <TouchableOpacity>
          <View style={styles.headerIcon}>
            <Text style={styles.header}>Create New Cabinet</Text>
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
};

const styles = StyleSheet.create({
  headerIcon: {
    marginTop: 20,
    marginBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    color: Colors.base950,
  },
  container: {
    flex: 1,
    top: 0,
    backgroundColor: Colors.base,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.base950,
  },
});

export default Home;
