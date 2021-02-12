import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const FIlters = () => {
  return (
    <View style={styles.filters}>
      <Text style={styles.options}>
        <AntDesign name="filter" size={15} color="black" /> Filters
      </Text>
      <Text style={styles.options}>Rating: 4.0+</Text>
      <Text style={styles.options}>Takeaway</Text>
      <Text style={styles.options}>Fastest Delivery</Text>
    </View>
  );
};

export default FIlters;

const styles = StyleSheet.create({
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  options: {
    borderRadius: 11,
    borderWidth: 1,
    padding: 6,
    borderColor: "#dfe4ea",
    backgroundColor: "white",
  },
});
