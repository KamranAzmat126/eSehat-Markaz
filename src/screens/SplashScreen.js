import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import { theme } from './core/theme';

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor="skyblue" translucent={true}/>
      {/* Onboarding Image */}
      <Image source={require('./asset/start.jpg')} style={style.image} />

      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Title container */}
        <View>
          <Text style={style.title}>Welcome to</Text>
          <Text style={style.title}>e Sehat Markaz</Text>
        </View>

        {/* Text container */}
        <View style={{ marginTop: 10 }}>
          <Text style={style.textStyle}>
            Now Get HeathCare Services
          </Text>
          <Text style={style.textStyle}>With just few clicks</Text>
        </View>
      </View>
      {/* Button container */}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingBottom: 40,
        }}>
        {/* button */}
        <Pressable onPress={() => navigation.navigate('StartScreen')}>
          <View style={style.btn}>
            <Text style={{ color: 'white',fontWeight: 'bold' }}>Get Started</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  image: {
    height: 410,
    width: '100%',
    borderBottomLeftRadius: 100,
  },
  btn: {
    height: 50,
    marginVertical: 25,
    marginHorizontal: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: { 
    fontSize: 32,
    fontWeight: 'bold', 
    color: theme.colors.primary 
    },
  textStyle: { 
    fontSize: 16, 
    color: 'grey' 
    },
});
export default SplashScreen;