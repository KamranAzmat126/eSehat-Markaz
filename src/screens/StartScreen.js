import React from "react";
import { View, StyleSheet, Image, Text, StatusBar } from "react-native";
import { Button } from "react-native-paper";
import Paragraph from "./components/Paragraph";
import { theme } from "./core/theme";

export default function StartScreen({ navigation }) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="skyblue" translucent={true} />
      <View style={style.cardImg}>
        <Image source={require("./asset/sehat.png")} style={style.Img} />
      </View>
      <View style={style.card}>
        <Text style={style.head}>Welcome </Text>
        <Paragraph fontStyles="italic">
          Plesse select your role First!
        </Paragraph>
        <View style={style.cardbtn}>
          <View style={style.btn}>
            <Button
              style={style.text}
              mode="outlined"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "PaReg" })
              }
            >
              Patient
            </Button>
            <Button
              style={style.text}
              mode="outlined"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "BDReg" })
              }
            >
              Blood Donor
            </Button>
          </View>

          <View style={style.btn}>
            <Button
              style={style.text}
              mode="outlined"
              autoCapitalize="none"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "DocReg" })
              }
            >
              Doctor
            </Button>
            <Button
              style={style.text}
              mode="outlined"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "LaReg" })
              }
            >
              Laboratory
            </Button>
          </View>

          <View style={style.btn}>
            <Button
              style={style.text}
              mode="outlined"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "PharReg" })
              }
            >
              Pharmacy
            </Button>
            <Button
              style={style.text}
              mode="outlined"
              onPress={() =>
                navigation.navigate("LoginScreen", { otherParam: "AmReg" })
              }
            >
              Ambulance
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  Img: {
    height: 140,
    width: "100%",
  },
  cardImg: {
    padding: 10,
    marginTop: 40,
    marginBottom: 50,
  },
  card: {
    height: "100%",
  },
  cardbtn: {
    width: "85%",
    height: "100%",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 8,
    height: "7%",
  },
  head: {
    textAlign: "center",
    color: theme.colors.primary,
    fontWeight: "bold",
    fontSize: 24,
  },
  text: {
    backgroundColor: "#F4F4F4",
    marginLeft: 15,
    width: "50%",
    borderRadius: 50,
  },
});
