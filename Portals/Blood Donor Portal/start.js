import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import pic from "../assets/blooddonation.png";
import { AntDesign } from "@expo/vector-icons";
import Data from "../Blood Donor Portal/donorProfileDummyData";
import axios from "axios";
import url from "../../url.json";

export default function StartBloodDonorPortal({ navigation }) {
  //const [data, setData] = useState();
  setTimeout(() => {
    navigation.navigate("BloodDonorProfile", { Data });
  }, 1500);
  return (
    <View>
      <View style={styles.container}>
        <Image source={pic} style={styles.img} />
        <Text style={styles.text}>
          Donating Blood is a Great Act of Kindness
        </Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("BloodDonorProfile")}
        >
          <Text style={styles.nxttxt}>Next</Text>
          <AntDesign name="arrowright" size={22} color="#e10c00" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: "40%",
    alignItems: "center",
  },
  text: {
    marginVertical: 10,
    color: "#e10c00",
  },
  img: {
    width: 150,
    height: 250,
  },
  next: {
    alignItems: "flex-end",
    marginRight: 45,
    marginTop: "60%",
  },
  btn: {
    flexDirection: "row",
  },
  nxttxt: {
    color: "#e10c00",
  },
});
