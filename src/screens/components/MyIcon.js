import React from 'react';
import {StyleSheet, Image, Text, View } from 'react-native';

export default function DashBack() {
  return(
        <View style = {style.container}>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Search Doctor</Text>
            </View>
          </View>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Order Medicine</Text>
            </View>
          </View>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Find Ambulance</Text>
            </View>
          </View>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Labs</Text>
            </View>
          </View>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Labs</Text>
            </View>
          </View>
          <View style = {style.box}>
            <View style = {style.inner}>
            <Text>Blood Donor</Text>
            </View>
          </View> 
        </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    height:'85%',
    marginTop: 60,
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  box:{
    width: '50%',
    height: '60%',
    padding:8
  },
  inner:{
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
  