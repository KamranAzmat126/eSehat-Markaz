import React, {useEffect} from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import {Text, View,ActivityIndicator } from 'react-native';
import StackNav from './src/screens/StackNav';

//Redux
import { Provider } from "react-redux";
import store from "./src/screens/redux/store";                                   


export default function App() {

  return (
    <Provider store={store}>
      <StackNav/>
      {/* <NavigationContainer>
      //   <StatusBar barStyle='dark-content' backgroundColor={'white'}/> 
      // <StackNav/>
      //  </NavigationContainer> */}
    </Provider>
  );
}
