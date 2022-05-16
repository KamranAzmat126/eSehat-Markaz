import React from 'react'
import { Image, StyleSheet,View } from 'react-native'

export default function Logo() {
  return(
    <View style= {styles.cardimg}>
      <Image source={require('../asset/sehat.png')}
      resizeMode = 'contain' style={styles.image} />
      </View>
    )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    padding: 15,
  },
  cardimg: {
    width: '100%',
    height: '20%',
    marginBottom: 35,
    marginTop:35
  }
})
