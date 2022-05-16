import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
  import { Avatar } from 'react-native-paper';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import SearchBar from './components/SearchBar'

export default function Doctor({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <SearchBar/>
    <View style={styles.cardsWrapper}>
        <TouchableOpacity style={styles.card} 
        onPress = {()=>(navigation.navigate('DocProfile'))}>
          <View style={styles.cardImgWrapper}>
          <Avatar.Image
            source={require('./asset/image.jpg')}
            style={styles.cardImg}
              size= {100}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Muhammad Tayyab Khazain</Text>
            <Text style={styles.cardDetails}>
              Specialty: Surgeon{"\n"}
              Experince: 10Years
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Avatar.Image
            source={require('./asset/image2.jpeg')}
            style={styles.cardImg}
              size= {100}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Muhammad Kamran Azmat</Text>
            <Text style={styles.cardDetails}>
              Specialty: Genral Physician{"\n"}
              Experince: 12Years
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Avatar.Image
            source={require('./asset/image3.jpeg')}
            style={styles.cardImg}
              size= {100}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Usman Yousaf</Text>
            <Text style={styles.cardDetails}>
              Specialty: Gynecologist{"\n"}
              Experince: 5Years
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsWrapper: {
    marginTop: 5,
    width: '90%',
    height: '100%',
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
    backgroundColor: "transparent",
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
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
