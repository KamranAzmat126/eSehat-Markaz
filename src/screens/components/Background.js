import React from 'react'
import { StyleSheet, View} from 'react-native'
import { theme } from '../core/theme'

export default function Background({ children }) {
  return (
    <View styles= {styles.container}></View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '85%',
    alignSelf:'center',
    alignItems: 'center',
  },
})
