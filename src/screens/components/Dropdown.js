import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {Picker} from '@react-native-picker/picker';
//import { color } from "react-native-reanimated";

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue)
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        itemStyle = {'blue'}
        style={[{ height: '100%', width: '100%'}, styles.pick]}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        mode ="dropdown"
        onPress
      >
        <Picker.Item label="Choose Role" value="" />
        <Picker.Item label="Patient" value="Pa" />
        <Picker.Item label="Doctor" value="doc" />
        <Picker.Item label="Pharmacist" value="phar" />
        <Picker.Item label="Ambulance" value="ambu" />
        <Picker.Item label="Blood Donor" value="bd" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 53,
   
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    borderColor: "gray",
    backgroundColor: 'white',
    color:'red'
  },
  pick: {
      borderColor: "blue"
  }
});

export default Dropdown;