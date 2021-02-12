import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <EvilIcons
        name="search"
        size={24}
        style={{ padding: 8 }}
        color="#b33939"
      />
      <Text style={styles.placeholder}>
        Restaurant name, cuisine, or a dish
      </Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  background: {
    top: 20,
    borderWidth: 1,
    //borderStyle: "dashed",
    borderRadius: 23,
    borderColor: "#d1ccc0",
    backgroundColor: "white",
    flexDirection: "row",
    height: 45,
    shadowColor: "#d1ccc0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    alignItems: "center",
  },
  placeholder: {
    fontSize: 15,
    color: "#d1ccc0",
  },
});
