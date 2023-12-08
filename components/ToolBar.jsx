import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Toolbar = ({ currentScreen, setCurrentScreen, search, setSearch }) => {
  const options = [
    "T-shirts",
    "Jackets",
    "Shirts",
    "Hoodies",
    "Sweatshirts",
    "Jumpers",
  ];
  const [selectedFilter, setSelectedFilter] = useState("Shirts"); // Default selected filter
  //   const [searchQuery, setSearchQuery] = useState("");

  return (
    <View>
      <View style={styles.toolbar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearch}
          value={search}
          placeholder="Search"
        />
        <Dropdown options={options} onSelect={setSelectedFilter} />
      </View>
      <NavigationTabs
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      />
    </View>
  );
};

const NavigationTabs = ({ currentScreen, setCurrentScreen }) => {
  return (
    <View style={navStyles.NavigationTabs}>
      <TouchableOpacity
        style={[
          navStyles.navItem,
          currentScreen === "Cabinets" && navStyles.navItemSelected,
        ]}
        onPress={() => setCurrentScreen("Cabinets")}
      >
        <Ionicons
          name={currentScreen === "Cabinets" ? "cube" : "cube-outline"}
          size={28}
          color="black"
        />
        <Text>Cabinets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          navStyles.navItem,
          currentScreen === "Capsules" && navStyles.navItemSelected,
        ]}
        onPress={() => setCurrentScreen("Capsules")}
      >
        <Ionicons
          name={currentScreen === "Capsules" ? "cube" : "cube-outline"}
          size={28}
          color="black"
        />
        <Text>Capsules</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          navStyles.navItem,
          currentScreen === "Map" && navStyles.navItemSelected,
        ]}
        onPress={() => setCurrentScreen("Map")}
      >
        <Ionicons
          name={currentScreen === "Map" ? "map" : "map-outline"}
          size={28}
          color="black"
        />
        <Text>Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setIsOpen(!isOpen)}
      >
        {/* <Text style={styles.dropdownHeaderText}>{selected || "Filter"}</Text> */}
        {/* Put a filter icon here */}
        <Ionicons name="filter" size={24} color="black" />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownOverlay}>
          <ScrollView style={styles.dropdownList}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownItem}
                onPress={() => handleSelect(option)}
              >
                <Text style={styles.dropdownItemText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1000,
  },
  toolbar: {
    flexDirection: "row",
    alignItems: "center",
    // padding: 10,
    backgroundColor: Colors.white,
  },
  searchInput: {
    flex: 1,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    borderColor: Colors.base300,
    backgroundColor: "#fff",
  },
  dropdownHeader: {
    padding: 10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.base300,
    borderRadius: 4,
  },
  dropdownHeaderText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownOverlay: {
    position: "absolute",
    top: 50, // Adjust as needed to position the dropdown below the header
    left: 0,
    right: 0,
  },
  dropdownList: {
    maxHeight: 200,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: Colors.base300,
    borderRadius: 4,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    fontSize: 16,
    color: "#333",
  },
});

const navStyles = StyleSheet.create({
  NavigationTabs: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.base300,
    // paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    paddingVertical: 10,
  },
  navItemSelected: {
    borderBottomColor: Colors.base950,
    borderBottomWidth: 3,
  },
  logo: {
    height: 30,
    resizeMode: "contain",
  },
});

export default Toolbar;
