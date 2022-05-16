import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Avatar } from 'react-native-paper';


const Dashboard = ({navigation}) => {
  const theme = useTheme();

   const handleSignOut = async () => {
    navigation.navigate('LoginScreen')
    // try {
    //   await auth.signOut();
    //   console.log(4)
    //   navigation.navigate('LoginScreen') 

    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="skyblue" translucent={true}/>
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#B2EBF6">
          <View style={styles.slide}>
            <Image
              source={require('./asset/back3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./asset/back.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./asset/back4.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Category', {title: 'Category'})
          }>
          <View style={styles.categoryIcon}>
            <Fontisto name="doctor" size={35} color="#57D4EB" />
          </View>
          <Text style={styles.categoryBtnTxt}>Doctors</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('SearchNearbyAmbulances', {title: ''})
          }>
          <View style={styles.categoryIcon}>
            <MaterialCommunityIcons name="ambulance" size={35} color="#57D4EB"/>
          </View>
          <Text style={styles.categoryBtnTxt}>Find Ambulance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>
            navigation.navigate('SearchLabs', {title: ''})
          }>
          <View style={styles.categoryIcon}>
            <Fontisto name="laboratory" size={35} color="#57D4EB" />
          </View>
          <Text style={styles.categoryBtnTxt}>Find Labs</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>
            navigation.navigate('SearchNearbyPharmacies', {title: ''})
          }>
          <View style={styles.categoryIcon}>
            <Fontisto name="pills" size={35} color="#57D4EB" />
          </View>
          <Text style={styles.categoryBtnTxt}>Find Pharmacies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() =>
            navigation.navigate('BloodDonors', {title: ''})
          }>
          <View style={styles.categoryIcon}>
            <Ionicons name="water" size={35} color="#57D4EB" />
          </View>
          <Text style={styles.categoryBtnTxt}>Blood Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} 
        onPress={() => ('')}>
          <View style={styles.categoryIcon}>
          <Icon name="notes-medical" size={35} color="#57D4EB" />
          </View>
          <Text style={styles.categoryBtnTxt}>Medicine Reminder</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Top Specialists
        </Text>
        <TouchableOpacity style={styles.card} 
        onPress = {()=>('')}>
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
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1, 
    backgroundColor: 'white'
  },
  sliderContainer: {
    height: 200,
    width: '97%',
    marginTop: 6,
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
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '94%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#E8EFF0' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#1D889D',
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