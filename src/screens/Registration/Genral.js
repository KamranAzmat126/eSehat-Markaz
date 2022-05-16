import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image,StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
//import Uplaod from '../components/Upload';
//import { Button } from 'react-native-paper';
import TextInput from '../components/TextInput';
//import Dropdown from '../components/Dropdown';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';
import { RadioButton } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';



const Genral = ( {props, navigation, route}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState();
  const [checked, setChecked] = React.useState('male');

  const {otherParam}  = route.params;
 // console.log(otherParam)
  // const [selectedValue, setSelectedValue] = useState("");
  // console.log(selectedValue)

  // const DropdownRole = () => {
  //   return (
  //     <View style={{width: "100%",
  //       height: 53,
  //       borderWidth: 1,
  //       borderRadius: 4,
  //       margin: 10,
  //       borderColor: "gray",
  //       backgroundColor: 'white',
  //       color:'red'}}>
  //       <Picker
  //         selectedValue={selectedValue}
  //         itemStyle = {'blue'}
  //         style={[{ height: '100%', width: '100%'}, styles.pick]}
  //         onValueChange={(itemValue) => setSelectedValue(itemValue)}
  //         mode ="dropdown"
  //         onPress
  //       >
  //         <Picker.Item label="Choose Role" value="" />
  //         <Picker.Item label="Patient" value="Pa" />
  //         <Picker.Item label="Doctor" value="doc" />
  //         <Picker.Item label="Pharmacist" value="phar" />
  //         <Picker.Item label="Ambulance" value="ambu" />
  //         <Picker.Item label="Blood Donor" value="bd" />
  //         <Picker.Item label="Laboratory" value="lab" />
  //       </Picker>
  //     </View>
  //   );
  // }


  const _onNextPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const emptyError = emptyfield(phone.value);
    //const role = Valuecheck();

    if (emailError || passwordError || nameError || emptyError||role) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhone({ ...empty, error: emptyError });
      
      // fetch("http://192.168.18.10:5000/api/patient",{
      //   methood: "post",
      //   headers:{
      //     'Content-Type': 'application/json'
      //   },
      //   body:JSON.stringify({
      //     name, 
      //     email,
      //     password,
      //     empty
      //   })
      // })
      // .then(res=>res.json())
      // .then(data => {
      //   console.log(data)
      // })
    // const Valuecheck = ()=> {
    //     if (selectedValue === 'pa'){
    //     return 'PaReg'
    //     }
    //     else if (selectedValue === 'doc'){
    //     return 'DocReg'
    //     }
    //     else if (selectedValue === 'phar'){
    //     return 'PharReg'
    //     }
    //     else if (selectedValue === 'ambu'){
    //     return 'AmReg'
    //     }
    //     else if (selectedValue === 'bd'){
    //     return 'BDReg'
    //     }
    //     else if (selectedValue === 'lab'){
    //     return 'LaReg'
    //     }
    // }
      return;}
    navigation.navigate(otherParam);
  };
  const pickfromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:300, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  const pickfromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      cropping: true,
      width:300, 
      height:300,
      //aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }
  
// const _onSignUpPressed = () => {
//    try {
//       if (email.value !== '' && password.value !== '') {
//           auth.createUserWithEmailAndPassword(email.value, password.value); 
//           navigation.replace('LoginScreen', {otherParam: String})
//       }
//     } catch (error) {
//         alert(error.message)
//     }
//   };

  return (
    <View style= {styles.container}>
      <StatusBar backgroundColor="skyblue" translucent={true}/>
      {/* <Logo /> */}
      <ScrollView style= {styles.head}>
      <View style= {styles.headcon}>
      <Header>Create Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Phone No"
        returnKeyType="next"
        value={phone.value}
        onChangeText={text => setPhone({ value: text, error: '' })}
        error={!!phone.error}
        errorText={phone.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      {/* <DropdownRole/> */}
      
      <Button
        mode="outlined"
        icon = {'upload'} 
        onPress = {() =>setModalVisible(true)}
        labelStyle={{color: '#3d3c3a'}}
        style={{marginTop: 6, padding:4, width:'100%',borderWidth: 1}}>
        Upload Image
      </Button>
      <Image style = {styles.imagearea} source ={{uri:image}}></Image>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style = {styles.modalview}>
          <Button
            mode="contained"
            icon = 'camera'
            onPress = {pickfromCamera}
            style={{marginTop: 10, alignSelf: 'center', }}>
            Camera
          </Button>
          <Button
            mode="contained"
            icon = 'image-area'
            onPress = {pickfromGallery}
            style={{marginTop: 10, alignSelf: 'center' }}>
            Gallery
          </Button>
          <Button
            mode="contained"
            onPress = {()=> setModalVisible(!modalVisible)}
            style={{marginTop: 10, alignSelf: 'center' }}>
            Cancel
          </Button>
          </View>
        
        </Modal>
        <View style = {{marginRight:80}}>
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
                <RadioButton
                    value="other"
                    color= '#18b4f5'
                    status={ checked === 'other' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('other')}
                />
                <Text style = {styles.ratxt}> Other</Text>
                </View>
            </View>

      <Button
        mode="contained"
        onPress={() => navigation.navigate(otherParam)}
        style={{marginTop: 10 }}>
        Next
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  head: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headcon: {
    alignItems: 'center',
  },
  container: {
    width: '80%',
    height: '100%',
    alignSelf:'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    marginTop: 6,
    marginBottom: 20
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  modalview: {
    position: 'absolute',
    bottom:2,
    width:'100%',
    backgroundColor: '#e9f0ef'
  },
  txt: {
    marginTop: 6,
    marginLeft: 5,
    fontSize: 16 
},
ratxt: {
    marginTop: 8,
    fontSize: 14 
},
})

export default Genral;
