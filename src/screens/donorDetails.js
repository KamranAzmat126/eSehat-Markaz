import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-paper";
import kami from "../assets/kami.jpeg";
import { Entypo } from "@expo/vector-icons";

export default function DonorDetails({ route }) {
  const [data, setData] = useState(route.params.donor);

  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.naar}>
        <Avatar.Image source={kami} size={200} />
        <Text style={styles.name}>{data.name}</Text>
      </View>

      <View style={styles.details}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Age: </Text>
          <Text style={styles.values}> {data.age}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Blood Group: </Text>
          <Text style={styles.values}> {data.bloodgroup}</Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Address: </Text>
          <ScrollView
            horizontal={true}
            style={{ flexDirection: "row", marginTop: "5%" }}
          >
            <Entypo name="location-pin" size={18} color="black" />
            <Text style={styles.click} onPress={() => location(data.address)}>
              {data.address}
            </Text>
          </ScrollView>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.callbtn}
            onPress={() => {
              Linking.openURL(`tel:${data.contact}`);
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

        {/* <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Contact: </Text>
          <View
            style={{ flexDirection: "row", marginTop: "5%", marginLeft: 5 }}
          >
            <Entypo name="old-phone" size={18} color="black" />
            <Text
              style={styles.click}
              onPress={() => {
                Linking.openURL(`tel:${data.contact}`);
              }}
            >
              {" "}
              {data.contact}
            </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginHorizontal: 10,
  },
  naar: {
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#26241e",
    marginVertical: 10,
  },
  details: {
    borderTopWidth: 0.3,
    borderBottomEndRadius: 10,
    borderBottomRightRadius: 100,
    borderBottomStartRadius: 100,
    paddingHorizontal: 10,
    backgroundColor: "#f6f6f6",
    elevation: 5,
  },
  keys: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#26241e",
    marginTop: "5%",
  },
  values: {
    fontSize: 18,
    color: "#6e6464",
    marginTop: "5%",
  },
  click: {
    fontSize: 16,
    color: "#6e6464",
    borderBottomWidth: 0.5,
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
