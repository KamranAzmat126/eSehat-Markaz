import React, { useState, useEffect } from "react";
// import blooddonation from "../asset/blooddonation.png";
// import notfound from "../asset/notfound.jpg";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Avatar } from "react-native-paper";
import Data from "./DonorsData";
import kami from "../asset/kami.jpeg";
import axios from "axios";
import url from "../../../url.json";

export default function BloodDonors({ navigation }) {
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    const apiCall = async () => {
      console.log("a");
      try {
        const res = await axios.get(`${url.url}api/blooddonor/`);
        console.log("b");
        setData(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        {/* <Image source={blooddonation} style={styles.img} /> */}

        <View
          style={{
            flexDirection: "row",
            marginVertical: 5,
            width: "90%",
          }}
        >
          <View style={styles.input}>
            <TextInput
              placeholder="City"
              value={city}
              name="city"
              onChangeText={(city) => setCity(city)}
              style={{ width: "58%" }}
            ></TextInput>
            <AntDesign name="search1" size={16} color="gray" />
          </View>

          <View style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={bloodGroup}
              onValueChange={(itemValue, itemIndex) => setBloodGroup(itemValue)}
            >
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="OO-" />
            </Picker>
          </View>
        </View>
      </View>

      <FlatList
        data={Data}
        renderItem={(itemData) => {
          if (city === "" && bloodGroup === "") {
            return <Btn item={itemData}></Btn>;
          }
          if (itemData.item.bloodGroup === bloodGroup && city === "") {
            return <Btn item={itemData}></Btn>;
          }
          if (
            itemData.item.city === city &&
            itemData.item.bloodGroup === bloodGroup
          ) {
            return <Btn item={itemData} />;
          }
        }}
      ></FlatList>
    </View>
  );
}

const Btn = (props) => {
  const navigation = useNavigation();

  return (
    // <TouchableOpacity
    //   onPress={() =>
    //     navigation.navigate("DonorDetails", { donor: props.item.item })
    //   }
    //   style={{ alignItems: "center" }}
    // >
    //   <View style={styles.list}>
    //     <Avatar.Image source={kami} style={styles.avatar} size= {100}/>
    //     <View style={styles.details}>
    //       <Text style={styles.name}>{props.item.item.name}</Text>
    //       <Text style={styles.city}>
    //         Blood Group: {props.item.item.bloodGroup}
    //       </Text>
    //     </View>
    //   </View>
    // </TouchableOpacity>

    <View style= {styles.cardsWrapper}>
      <TouchableOpacity style={styles.card} 
        onPress={() =>
          navigation.navigate("DonorDetails", { donor: props.item.item })
        }>
        <View style={styles.cardImgWrapper}>
        <Avatar.Image
        source={kami}
        style={styles.cardImg}
          size= {100}
        />
        </View>
        <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{props.item.item.name}</Text>
        <Text style={styles.cardDetails}>
          Blood Group: {props.item.item.bloodGroup}
        </Text> 
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    flex: 1,
  },
  // img: {
  //   alignItems: "center",
  //   marginTop: "12%",
  //   width: 70,
  //   height: 100,
  // },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    borderWidth: 1,
    //width: "65%",
    alignItems: "flex-start",
    height: 40,
    padding: 12,
    marginEnd: 5,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: 2,
    width: "30%",
    height: 40
  },
  // list: {
  //   //flexWrap: "wrap",
  //   flexDirection: "row",
  //   width: "90%",
  //   marginHorizontal: 5,
  //   marginVertical: 8,
  //   borderRadius: 10,
  //   //borderWidth: 0.5,
  //   elevation: 5,
  //   padding: 7,
  //   backgroundColor: "white",
  // },
  // details: {
  //   margin: 12,
  // },
  // name: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   color: "#26241e",
  // },
  // city: {
  //   fontSize: 14,
  //   color: "#26241e",
  // },
  // avatar: {
  //   margin: 10,
  // },
  cardsWrapper: {
    width: '90%',
    alignSelf: 'center',
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
    justifyContent:'center',
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
});
