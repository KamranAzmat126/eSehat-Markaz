import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ambulance from "../asset/ambulance.png";
import { AntDesign } from "@expo/vector-icons";

export default function Ambulance({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SearchNearbyAmbulances");
    }, 1000);
  });

  return (
    <View>
      <View style={styles.container}>
        <Image source={ambulance} style={styles.logo}></Image>
        <Text style={styles.txt}>Find Nearby Registered Ambulances</Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SearchNearbyAmbulances")}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Next </Text>
          <AntDesign name="arrowright" size={22} color="#df2029" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignItems: "center",
  },
  logo: {
    width: 280,
    height: 200,
  },
  txt: {
    marginTop: "10%",
    color: "#df2029",
  },
  next: {
    marginTop: "75%",
    alignItems: "flex-end",
    marginRight: "12%",
  },
  btn: {
    flexDirection: "row",
  },
  btntxt: {
    color: "#df2029",
    fontSize: 16,
  },
});
