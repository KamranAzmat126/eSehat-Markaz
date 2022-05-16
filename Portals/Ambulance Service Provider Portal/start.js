import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ambulance from "../assets/ambulance.png";
import { AntDesign } from "@expo/vector-icons";
import Data from "./ambulanceDummyData";

export default function StartAmbulanceServiceProvider({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("AmbulanceServiceProviderProfile", {
        ambulance: Data,
      });
    }, 1500);
  });

  return (
    <View>
      <View style={styles.container}>
        <Image source={ambulance} style={styles.logo}></Image>
        <Text style={styles.txt}>Welcome {Data.name}</Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AmbulanceServiceProviderProfile")}
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Next </Text>
          <AntDesign name="arrowright" size={22} color="#5b86fc" />
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
    color: "#5b86fc",
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
    color: "#5b86fc",
    fontSize: 16,
  },
});
