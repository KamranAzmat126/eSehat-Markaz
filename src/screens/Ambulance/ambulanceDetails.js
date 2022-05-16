import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import ambulance from "../asset/ambulance.png";
import Swiper from 'react-native-swiper';
import { Entypo } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';

export default function AmbulanceDetails({ navigation, route }) {
  const location = (address) => {
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${address}`
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.txtName}>{route.params.pharm.name}</Text>
      <Image source={ambulance} style={styles.img} />

      <Text style={styles.addHead}>Address: </Text>
      <View style={{ flexDirection: "row" }}>
        <Entypo name="location-pin" size={24} color="black" />
        <Text
          style={styles.contactNum}
          onPress={() => location(route.params.pharm.address)}
        >
          {route.params.pharm.address}
        </Text>
      </View> */}
      <View style = {{marginHorizontal: "5%",}}>
        <View style= {styles.cardsWrapper}>
              <TouchableOpacity style={styles.card} 
                onPress={() => ('') }>
            <View style={styles.cardImgWrapper}>
            <Avatar.Image
              source={require('../asset/ambulance.png')}
              style={styles.cardImg}
                size= {100}
              />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{route.params.pharm.name}</Text>
              <Text style={styles.cardDetails}>
              Opens: {route.params.pharm.timing}{"\n"}
              </Text> 
            </View>
          </TouchableOpacity>
          </View>
          <View style = {styles.cardloc}>
          <Text style={styles.addHead}>Location of Ambulance Service </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={styles.contactAdd}
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
          <Text style={styles.addHead}>Contact No </Text>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={styles.contactNum}
            >
              {route.params.pharm.contact}
            </Text>
      </View>
      </View>

      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={true}
          height={200}
          activeDotColor="#f71616">
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu1.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu2.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../asset/ambu3.jpeg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff'
  },
  txtName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  img: {
    marginVertical: 10,
    width: 300,
    height: 220,
  },
  addHead: {
    marginTop: 14,
    fontSize: 20,
    fontWeight: "bold",
  },
  contactNum: {
    marginTop: 5,
    fontSize: 16,
    color: "black",
    marginLeft: 2
  },
  contactAdd: {
    marginTop: 5,
    fontSize: 18,
    color: "black",
  },
  callbtn: {
    //alignItems: "center",
    flexDirection: "row",
    marginVertical: 30,
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
    justifyContent: 'center',
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


  sliderContainer: {
    height: 200,
    width: '100%',
    marginTop: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  }
});
