import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Entypo } from "@expo/vector-icons";
import SearchBar from "./components/SearchBar";
import Filters from "./components/FIlters";
import MealCard from "./components/MealCard";
import data from "./data";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Entypo name="location" size={24} color="black" />
        <Text style={styles.address}>Home - Shubham Vihar</Text>
      </View>
      <SearchBar />
      <Filters />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MealCard
            name={item.item.name}
            rating={item.item.rating}
            category={item.item.category}
            price={item.item.price}
            image={item.item.image}
          />
        )}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 40,
    padding: 20,
  },
  location: {
    flexDirection: "row",
  },
  address: {
    // top: 1,
    left: 10,
    fontSize: 22,
    //bord,
    borderWidth: 1,
    borderStyle: "dotted",
    borderRadius: 1,
    borderBottomColor: "black",
    borderRightColor: "white",
    borderLeftColor: "white",
    borderTopColor: "white",
  },
});
