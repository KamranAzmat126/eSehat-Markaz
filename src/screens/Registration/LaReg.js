import React, { useState } from 'react';
import {ScrollView, View, StyleSheet, TouchableOpacity,Alert, Modal, Image, StatusBar } from 'react-native';
import { Text } from 'react-native-paper';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import Dropdown from '../components/Dropdown';
import { theme } from '../core/theme';
import { emailValidator } from '../helpers/emailValidator';
import { passwordValidator } from '../helpers/passwordValidator';
import { nameValidator } from '../helpers/nameValidator';
import {emptyfield } from '../helpers/emptyfield';
import * as ImagePicker from 'expo-image-picker';

const LaReg = ( {navigation}) => {
 const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [empty, setEmpty] = useState({ value: '', error: '' });
  const [phone, setPhone] = useState({ value: '', error: '' });
  const [image, setImage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  
  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const emptyError = emptyfield(empty.value);
    const phoneError = emptyfield(phone.value);

    if (emailError || passwordError || nameError || emptyError||phoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setEmpty({ ...empty, error: emptyError });
      setPhone({ ...empty, error: phoneError });
      return;
    }

    navigation.navigate('LoginScreen');
  };
  // const _onSignUpPressed = () => {
  //  try {
  //     if (email.value !== '' && password.value !== '') {
  //         auth.createUserWithEmailAndPassword(email.value, password.value); 
  //         navigation.replace('LoginScreen', {otherParam: String})
  //     }
  //   } catch (error) {
  //       alert(error.message)
  //   }
  // };

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

  return (
    <View style= {styles.container}>
      <StatusBar backgroundColor="skyblue" translucent={true}/>
      {/* <Logo /> */}
      <ScrollView style= {styles.head}>
      <View style= {styles.headcon}>
      <Header>Create Account</Header>

      <TextInput
        label="Manager Name"
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
        label="Address"
        returnKeyType="next"
        value={empty.value}
        onChangeText={text => setEmpty({ value: text, error: '' })}
        error={!!empty.error}
        errorText={empty.error}
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
      <Dropdown/>
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
      <Button
        mode="contained"
        onPress={_onSignUpPressed}
        style={{ marginTop: 6 }}>
        Sign Up
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
};

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
    marginTop: 10,
    marginBottom: 20,
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
});

export default LaReg;