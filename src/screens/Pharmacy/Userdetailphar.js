import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView
} from "react-native";
import TextInput from '../components/TextInput';
import { RadioButton } from 'react-native-paper';
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';

export default function Userdetailphar({ navigation, route }) {
    const [name, setName] = useState({ value: '', error: '' });
    const [phone, setPhone] = useState({ value: '', error: '' });
    const [address, setAddress] = useState({ value: '', error: '' });
    const [checked, setChecked] = React.useState('male');
    return(
        <View style = {styles.container}>
            <ScrollView>
            <Text style = {{ fontSize:24,}}>User Information</Text>
            <Text style = {{paddingTop: 3, fontSize:16, color: '#515357'}}>
                We will share this Information with Pharmacy
            </Text>
            <Text style = {styles.txt}> Patient Name</Text>
            <TextInput
                label="Enter your name"
                returnKeyType="next"
                value={name.value}
                onChangeText={text => setName({ value: text, error: '' })}
                error={!!name.error}
                errorText={name.error}
                style = {styles.txtin}
            />
            <Text style = {styles.txt}> Phone No</Text>
            <TextInput
                label="Phone No"
                returnKeyType="next"
                value={phone.value}
                onChangeText={text => setPhone({ value: text, error: '' })}
                error={!!phone.error}
                errorText={phone.error}
                keyboardType= "numeric"
            />
            <Text style = {styles.txt}> Delivering Address</Text>
            <TextInput
                label="Address"
                returnKeyType="next"
                value={address.value}
                onChangeText={text => setaddress({ value: text, error: '' })}
                error={!!address.error}
                errorText={address.error}
                style = {styles.txtin}
            />
            {/* <View>
            <Text style = {styles.txt}> Gender</Text>
            <View style = {{flexDirection: 'row'}}>
                <RadioButton
                    value="male"
                    color= '#18b4f5'
                    status={ checked === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('male')}
                />
                <Text style = {styles.ratxt}> Male</Text>
                <RadioButton
                    value="female"
                    color= '#18b4f5'
                    status={ checked === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('female')}
                />
                <Text style = {styles.ratxt}> Female</Text>
                </View>
            </View> */}
            </ScrollView>

            <View style={{position: 'relative', left: 0, right: 0, bottom: 0}}>
                <TouchableOpacity style= {styles.cons} mode="contained" 
                    onPress={() => {''} }>
                    {/* <FontAwesome name='calendar' color="#ffff" style= {styles.icon} size={22} /> */}
                    <Text style={styles.btnTxt}> Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    },
    txt: {
        marginTop: 6,
        fontWeight: 'bold',
        fontSize: 14 
    },
    ratxt: {
        marginTop: 8,
        fontWeight: 'bold',
        fontSize: 14 
    },
    cons: {
        backgroundColor: '#18b4f5',
        width: '93%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        padding: 10
      },
      btnTxt:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      }
})