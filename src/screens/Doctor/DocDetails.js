import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/Button";
// import { Button } from 'react-native-paper';

export default function DocDetails({ route, navigation }) {
  const [data, setData] = useState(route.params.doc);

  return (
    <ScrollView style={styles.container}>
      <Image source={require('../asset/image.jpg')} style={styles.img} />
      <View style={styles.detailContainer}>
        <Text style={styles.name}>Dr. {data.name}</Text>
        <Text style={styles.cont}>
          <Text style={styles.head}>Category:</Text>{" "}
          <Text style={styles.sub}>{data.category}</Text>
        </Text>
        <Text style={styles.cont}>
          <Text style={styles.head}>Experience:</Text>{" "}
          <Text style={styles.sub}>{data.experience}</Text>
        </Text>
        <Text style={styles.head}>Description:</Text>
        <Text style={styles.detail}>{data.description}</Text>
      </View>
      <View style={styles.btn}>
      <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => {}}>
          <FontAwesome name='video-camera' color="#ffff" style= {styles.icon} size={22} />
          <Text style={styles.btnTxt}>Online Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => {}}>
          <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} />
          <Text style={styles.btnTxt}>Book Appoinment</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.suc}
          onPress={() =>{}
            // Alert.alert("Confirm", "Are You Sure?", [
            //   {
            //     text: "Yes Proceed",
            //     onPress: () => {
            //       Alert.alert("Success", "Request is Approved Successfully");
            //       navigation.goBack();
            //     },
            //   },
            //   { text: "Cancel" },
            // ])
          }
        >
          <FontAwesome name="check" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Online Consultation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.war}
          onPress={() =>
            Alert.alert("Confirm", "Are You Sure?", [
              {
                text: "Yes Proceed",
                onPress: () => {
                  Alert.alert("Success", "Request is Rejected Successfully");
                  navigation.goBack();
                },
              },
              { text: "Cancel" },
            ])
          }
        >
          <FontAwesome name="times" color="#fff" size={24} />
          <Text style={styles.btnTxt}>Decline</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", //"#EEEAE2",
    borderBottomEndRadius: 30
  },
  img: {
    height: 250,
    width: 400,
    alignSelf: "center",
  },
  detailContainer: {
    marginVertical: 15,
    padding: 15,
  },
  name: {
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sub: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 5,
  },
  btn: {
    flexDirection: 'column',
    padding: 10,
    alignItems:'center'
  },
  cons: {
    backgroundColor: '#18b4f5',
    height: 44,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10,
  }
});
