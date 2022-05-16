import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
import users from "./DoctorData";
import SearchBar from '../components/SearchBar'
import { Avatar } from 'react-native-paper';

export default function DocProfile({ navigation }) {
  return (
    <View style= {styles.container}>
        <SearchBar/>
      <FlatList 
            data = {users}
            renderItem = {(itemData) =>(
        <View style= {styles.cardsWrapper}>
        <TouchableOpacity style={styles.card} 
        onPress={() =>
            navigation.push("DocDetails", { doc: itemData.item })
          }>
          <View style={styles.cardImgWrapper}>
          <Avatar.Image
            source={require('../asset/image.jpg')}
            style={styles.cardImg}
              size= {100}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Dr. {itemData.item.name}</Text>
            <Text style={styles.cardDetails}>
              Specialty: {itemData.item.category}{"\n"}
              Experince: {itemData.item.experience}
            </Text>
          </View>
        </TouchableOpacity>
        </View>     
    )}
      />
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemtxt:{
      fontSize:24,
      alignItems: 'center'
  },
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
