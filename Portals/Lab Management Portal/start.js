import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import labIcon from "../assets/LAB_Icon.png";
import { AntDesign } from "@expo/vector-icons";
import Data from "./labsDummyData";

export default function StartLabManagementPortal({ navigation }) {
  setTimeout(() => {
    navigation.navigate("LabManagementProfile", { lab: Data });
  }, 1500);

  return (
    <View>
      <View style={styles.container}>
        <Image source={labIcon} style={styles.logo}></Image>
        <Text style={styles.txt}>Welcome {Data.name}</Text>
      </View>

      <View style={styles.next}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("LabManagementProfile", { lab: Data })
          }
          style={styles.btn}
        >
          <Text style={styles.btntxt}>Next </Text>
          <AntDesign name="arrowright" size={22} color="black" />
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
    width: 250,
    height: 250,
  },
  txt: {
    marginTop: "10%",
    color: "black",
  },
  next: {
    marginTop: "60%",
    alignItems: "flex-end",
    marginRight: "12%",
  },
  btn: {
    flexDirection: "row",
  },
  btntxt: {
    color: "black",
    fontSize: 16,
  },
});
