import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import labIcon from "../asset/LAB_Icon.png";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';

export default function LabDetails({ navigation, route }) {
  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };
  const Data = (name, type) => {
    person  = [name = name,
               type = type] 
    console.log(person)
  }
     
  
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* <Text style={styles.txtName}>{route.params.pharm.name}</Text>

      <View style={{ alignItems: "center" }}>
        <Image source={labIcon} style={styles.img} />
      </View> */}
      <View style= {styles.cardsWrapper}>
              <TouchableOpacity style={styles.card} 
                onPress={() => ('') }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/idc.png')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{route.params.pharm.name}</Text>
              <Text style={styles.cardDetails}>
              {route.params.pharm.type}{"\n"}
              </Text> 
            </View>
          </TouchableOpacity>
          </View>
      <View style = {styles.cardloc}>
      <Text style={styles.addHead}>Location of the lab </Text>
      <View style={{ flexDirection: "column" }}>
        <Text
          style={styles.contactNum}
        >
          {route.params.pharm.address}
        </Text>

        <TouchableOpacity style= {styles.locadd}>
        <Entypo name="location-pin" size={18} color="#43a2e6" />
        <Text style= {{color: '#43a2e6'}} onPress={() => location(route.params.pharm.address)}
        >View on map</Text>
        </TouchableOpacity>
        </View>
      </View>

      <View style = {styles.cardloc}>
        <Text style={styles.addHead}> Available Tests </Text>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >UtraSound</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 800 - 1900</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
        <View style = {styles.serv}>
          <Text style = {{padding:5, fontSize: 16}} >BloodTest</Text>
          <Text style = {{padding:5, fontSize: 16}} >Rs 400 - 2700</Text>
        </View>
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
      <View >
      <TouchableOpacity style= {styles.cons} mode="contained" 
        onPress={() => (navigation.push('BookLab')) }>
          <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} />
          <Text style={styles.btnTxt}>Book Appoinment</Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 8,
    backgroundColor: '#ffff'
  },
  txtName: {
    fontSize: 24,
    marginVertical: 10,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 10,
    width: 250,
    height: 250,
  },
  addHead: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  txtCntc: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  contactNum: {
    marginLeft: 5,
    marginTop: 7,
    color: "black",
    fontSize: 16,
  },
  callbtn: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#09da41",
    padding: 12,
    width: "80%",
    borderRadius: 10
  },
  callbtntxt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f6f6f6",
    marginLeft: 5,
  },
  serv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10
  },
  locadd:{
    flexDirection:'row',
    marginTop: 8,
    color:'blue'
  },
  cardsWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  cardloc:{
    paddingBottom: 8,
    backgroundColor:'#fff' ,
    borderBottomColor: '#000',
    borderBottomWidth: 0.7
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardsWrapper:{
    borderBottomColor: '#000',
    borderBottomWidth: 0.7
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRightWidth:0,
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
  cons: {
    backgroundColor: '#18b4f5',
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10
  },
  btnTxt:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10,
  }
});
