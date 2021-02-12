import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const MealCard = ({ name, rating, price, image, category }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 350,
          height: 250,
          resizeMode: "stretch",
        }}
        source={image}
      />

      <View style={styles.inplace}>
        <Text style={{ fontSize: 18, letterSpacing: 1 }}>{name}</Text>
        <Text>
          <MaterialCommunityIcons name="star-box" size={18} color="black" />
          {rating} <Text style={{ color: "#a4b0be" }}>/5</Text>
        </Text>
      </View>
      <View style={styles.inplace}>
        <Text style={{ fontSize: 13, color: "#a4b0be" }}>{category}</Text>
        <Text style={{ fontSize: 13, color: "#a4b0be" }}>INR {price}</Text>
      </View>
      <Text style={{ color: "#b33939", marginLeft: 4 }}>Opens at 10 am</Text>
      <View style={styles.inplace}>
        <Text>
          <FontAwesome5 name="clipboard-check" size={18} color="green" /> WHO
          has declared that food delivery is safe
        </Text>
        <Ionicons name="trending-up" size={18} color="purple" />
      </View>
    </SafeAreaView>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    top: 20,
    flex: 1,
    borderWidth: 1,
    marginTop: 20,
    flexDirection: "column",
    borderRadius: 8,
    borderColor: "#d1ccc0",
    backgroundColor: "white",
    //flexDirection: "row",
    //height: 45,
    shadowColor: "#d1ccc0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    padding: 6,
  },
  inplace: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "auto",
  },
});
