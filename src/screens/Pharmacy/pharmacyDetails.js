import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import pharmacyLogo from "../asset/pharmacyLogo.png";
import { Entypo } from "@expo/vector-icons";

export default function PharmacyDetails({ navigation, route }) {
  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtName}>{route.params.pharm.name}</Text>
      <View style={{ alignItems: "center" }}>
        <Image source={pharmacyLogo} style={styles.img} />
      </View>

      <Text style={styles.addHead}>Address: </Text>
      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Entypo name="location-pin" size={18} color="black" />
        <Text
          style={styles.contactNum}
          onPress={() => location(route.params.pharm.address)}
        >
          {route.params.pharm.address}
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.callbtn}
          onPress={() => {
            Linking.openURL(`tel:${route.params.pharm.contact}`);
          }}
        >
          <Entypo
            name="phone"
            size={18}
            color="#f6f6f6"
            style={{ marginLeft: "32%" }}
          />
          <Text style={styles.callbtntxt}>Call Now</Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={styles.txtCntc}>Contact: </Text>
      <View style={{ flexDirection: "row", marginTop: 5 }}>
        <Entypo name="old-phone" size={18} color="black" />
        <Text
          style={styles.contactNum}
          onPress={() => {
            Linking.openURL(`tel:${route.params.pharm.contact}`);
          }}
        >
          {route.params.pharm.contact}
        </Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginHorizontal: "5%",
  },
  txtName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 10,
    width: 270,
    height: 200,
  },
  addHead: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  txtCntc: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNum: {
    fontSize: 17,
    marginLeft: 5,
    borderBottomWidth: 0.5,
    color: "black",
  },
  callbtn: {
    //alignItems: "center",
    flexDirection: "row",
    marginVertical: 50,
    backgroundColor: "#09da41",
    padding: 12,
    borderRadius: 10,
    width: "80%",
  },
  callbtntxt: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#f6f6f6",
    marginLeft: 5,
  },
});
