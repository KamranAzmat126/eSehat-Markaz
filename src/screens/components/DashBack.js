import React from 'react';
import {StyleSheet, Image, View } from 'react-native';

export default class DashBack extends React.Component {
  render(){
      return(
        <View style = {style.header}>
        <Image source={require('../asset/back3.jpg')} style={style.image} />
        </View>
      );
  }
}
const style = StyleSheet.create({
  header:{
    width:"100%",
    height:"25%",
    alignItems:'center',
    justifyContent:'center',
  },
  image:{
    width:"100%",
    height:"210px"
  },
});
  