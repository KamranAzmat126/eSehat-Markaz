import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StatusBar, FlatList, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import users from "./DoctorData";
//import Typography from '../components/Typography';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      
      <TouchableOpacity style={{marginRight: 10, marginTop: 20}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar></StatusBar>
      <TouchableOpacity style={styles.card} 
        onPress = {()=>(navigation.navigate('DocProfile'))}>
          <View style={styles.cardImgWrapper}>
          <Avatar.Image
            source={require('../asset/image.jpg')}
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

      <Text style={{fontSize:16, fontWeight:'bold', padding:4, marginLeft: 14}}>
        Pick a day</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2022-04-26'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;

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
    paddingLeft:10
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
    borderWidth: 0.6,
    borderLeftWidth: 0,
    borderTopLeftRadius:18,
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