// import React, {useContext, useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
//   Image,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {Alert, Modal, Pressable} from 'react-native';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// //import auth from '@react-native-firebase/auth';
// //import {userData} from '../../../App';
// //import {userProfileData} from '../../../App';
// //import colores from '../../Constants';
// import {RadioButton} from 'react-native-paper';
// //import database from '@react-native-firebase/database';

// const ProfileView = ({navigation}) => {
//   const {width, height} = Dimensions.get('window');
//   const [modalVisible, setModalVisible] = useState(false);
//   const user = useContext('');
//   const profile = useContext('');
//   const [checked, setChecked] = useState('Male');
//   const [Loading, setLoading] = useState(false);
//   // const Signout = () => {
//   //   auth()
//   //     .signOut()
//   //     .then(() => console.log('User signed out!'));
//   // };
//   // useEffect(() => {
//   //   if (!profile){
//   //     navigation.navigate('CreateProfile');
//   //   }
//   // });
//   const Show = (msg, i) => {
//     showMessage({
//       message: ` ${msg}`,
//       description: 'Gender is saved',
//       type: 'info',
//       icon: i,
//       backgroundColor: colores.green, // background color
//       color: colores.white,
//     });
//   };
//   const data = [
//     {
//       label: 'Male',
//     },
//     {
//       label: 'Female',
//     },
//   ];

//   const createAcount = () => {
//     if (profile) {
//       if (checked == '') {
//         const Icon = 'info';
//         Show('Please select your Gender', Icon);
//       } else {
//         setLoading(true);
//         database()
//           .ref('/users/Profiles/' + user.uid)
//           .set({
//             name: profile.name,
//             ph: profile.ph,
//             Gender: checked,
//           })
//           .then(() => {
//             storeData();
//           })
//           .catch(e => {
//             const Icon = 'info';
//             Show(`${e.message}`, Icon);
//           });
//       }
//     }
//   };
//   const storeData = async () => {
//     try {
//       await AsyncStorage.setItem('@profile', 'ok').then(() => {
//         setLoading(false);
//         const Icon = 'success';
//         Show('Gender is updated', Icon);
//         if (route.params) {
//           navigation.popToTop('ProfileView');
//         } else {
//           navigation.replace('ProfileView');
//         }
//       });
//     } catch (e) {}
//   };
//   return (
//     <>
//       <View style={{width: width, backgroundColor: 'white', flex: 1}}>
//         <View
//           style={{
//             width: width - 50,
//             height: height - 600,
//             backgroundColor: 'white',
//             flex: 0.3,
//             alignSelf: 'center',
//             alignItems: 'center',
//             marginTop: 20,
//             borderRadius: 10,
//           }}>
//           <Image
//             source={{
//               uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
//             }}
//             style={{
//               width: 200,
//               height: 200,
//               borderRadius: 400 / 2,
//               alignSelf: 'center',
//               borderColor: 'green',
//               borderWidth: 1,
//             }}
//           />
//         </View>
//         <View
//           style={{
//             width: width,
//             flex: 0.75,
//             marginTop: 35,
//             position: 'relative',
//           }}>
//           <ScrollView showsVerticalScrollIndicator={false}>
//             <View
//               style={{
//                 marginTop: 10,
//                 marginBottom: 10,
//                 width: width - 60,
//                 borderBottomWidth: 0.7,
//                 alignSelf: 'center',
//                 borderColor: '#969696',
//               }}></View>
//             <View
//               style={{
//                 width: '95%',
//                 height: 400,
//                 backgroundColor: 'white',
//                 alignSelf: 'center',
//                 borderRadius: 10,

//                 padding: 5,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   //color: colores.fontHeadcolor,
//                   fontWeight: '700',
//                   marginBottom: 20,
//                 }}>
//                 Personal Information
//               </Text>
//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/kami.jpeg')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View style={{width: '60%', height: '100%'}}>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 20}}
//                     onPress={() => navigation.navigate('Edit_Name')}>
//                     Name
//                   </Text>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 16}}
//                     onPress={() => navigation.navigate('Edit_Name')}>
//                     {profile ? profile.name : 'No name'}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       onPress={() => navigation.navigate('Edit_Phone_number')}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View style={{width: '60%', height: '100%'}}>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 20}}
//                     onPress={() => navigation.navigate('Edit_Phone_number')}>
//                     Phone number
//                   </Text>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 16}}
//                     onPress={() => navigation.navigate('Edit_Phone_number')}>
//                     {profile ? profile.ph : 'No Number'}
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 27,
//                         height: 27,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View style={{width: '80%', height: '100%'}}>
//                   <Text style={{textAlign: 'left', fontSize: 20}}>
//                     Email Address
//                   </Text>
//                   <Text style={{textAlign: 'left', fontSize: 16}}>
//                     xhahg32@gmail.com
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     width: '60%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <Text
//                     onPress={() => navigation.navigate('ForgetPassword')}
//                     style={{textAlign: 'left', fontSize: 20}}>
//                     Change Password
//                   </Text>
//                 </View>
//               </View>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View style={{width: '60%', height: '100%'}}>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 20}}
//                     onPress={() => setModalVisible(true)}>
//                     Gender
//                   </Text>
//                   <Text
//                     style={{textAlign: 'left', fontSize: 16}}
//                     onPress={() => setModalVisible(true)}>
//                     {profile ? profile.Gender : 'No Gender is selected'}
//                   </Text>
//                 </View>
//               </View>
//             </View>
//             <Modal
//               animationType="slide"
//               transparent={true}
//               visible={modalVisible}
//               onRequestClose={() => {
//                 Alert.alert('No Changes is Made.');
//                 setModalVisible(!modalVisible);
//               }}>
//               <View style={styles.centeredView}>
//                 <View style={styles.modalView}>
//                   <Text style={styles.modalText}>Your Gender</Text>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'flex-start',
//                     }}>
//                     <RadioButton
//                       value="Male"
//                       status={checked === 'Male' ? 'checked' : 'unchecked'}
//                       onPress={() => setChecked('Male')}
//                       color={colores.green}
//                     />
//                     <Text
//                       style={{fontSize: 24}}
//                       onPress={() => setChecked('Male')}>
//                       Male
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       flexDirection: 'row',
//                       justifyContent: 'flex-start',
//                     }}>
//                     <RadioButton
//                       value="Female"
//                       status={checked === 'Female' ? 'checked' : 'unchecked'}
//                       onPress={() => setChecked('Female')}
//                       color={colores.green}
//                     />
//                     <Text
//                       style={{fontSize: 24}}
//                       onPress={() => setChecked('Female')}>
//                       Female
//                     </Text>
//                   </View>
//                   <Pressable
//                     style={[styles.button, styles.buttonClose]}
//                     onPress={() => {
//                       createAcount();
//                       setModalVisible(!modalVisible);
//                     }}>
//                     <Text style={styles.textStyle}>Confirm</Text>
//                   </Pressable>
//                 </View>
//               </View>
//             </Modal>
//             <View
//               style={{
//                 width: '90%',
//                 height: 200,
//                 backgroundColor: 'white',
//                 alignSelf: 'center',
//                 borderRadius: 10,

//                 padding: 5,
//                 marginTop: 30,
//               }}>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   color: colores.fontHeadcolor,
//                   fontWeight: '700',
//                   marginBottom: 20,
//                 }}>
//                 Support
//               </Text>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     width: '60%',
//                     height: '100%',
//                     justifyContent: 'center',
//                   }}>
//                   <Text style={{textAlign: 'left', fontSize: 20}}>Help</Text>
//                 </View>
//               </View>

//               <View style={styles.cantainer2}>
//                 <View
//                   style={{
//                     width: '20%',
//                     height: '100%',
//                     justifyContent: 'center',
//                     marginTop: 30,
//                   }}>
//                   <View style={{alignItems: 'center'}}>
//                     <Image
//                       source={require('../assets/sehat-markaz.png')}
//                       style={{
//                         width: 35,
//                         height: 35,
//                       }}
//                       resizeMode="cover"
//                     />
//                   </View>
//                 </View>
//                 <View
//                   style={{
//                     width: '60%',
//                     height: '100%',
//                     justifyContent: 'center',
//                     marginTop: 30,
//                   }}>
//                   <Text style={{textAlign: 'left', fontSize: 20}}>
//                     Rate the App
//                   </Text>
//                 </View>
//               </View>
//             </View>
//             <View
//               style={{
//                 width: width - 60,
//                 borderBottomWidth: 0.7,
//                 alignSelf: 'center',
//                 borderColor: '#969696',
//               }}></View>
//             <View
//               style={{
//                 width: '90%',
//                 height: 60,
//                 alignSelf: 'center',
//                 borderRadius: 20,
//                 marginTop: 10,
//                 flexDirection: 'row',
//               }}>
//               <Image
//                 source={require('../assets/sehat-markaz.png')}
//                 style={{width: '20%', height: '60%', resizeMode: 'contain'}}
//               />

//               <Text
//                 onPress={Signout}
//                 style={{
//                   fontSize: 18,
//                   color: colores.green,
//                   marginLeft: 5,
//                   marginTop: 5,
//                   fontWeight: '600',
//                 }}>
//                 Sign out
//               </Text>
//             </View>
//             <TouchableOpacity
//               style={{
//                 width: '100%',
//                 height: 150,
//                 width: width - 60,
//                 alignSelf: 'center',
//               }}>
//               <Text
//                 style={{fontSize: 20, color: 'red', fontWeight: '600'}}></Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
//     </>
//   );
// };

// export default ProfileView;
// const styles = StyleSheet.create({
//   fontText: {
//     width: '40%',
//     height: '100%',
//     textAlign: 'right',
//     textAlignVertical: 'center',
//   },
//   TextView: {
//     width: '40%',
//     height: '100%',
//     textAlign: 'center',
//     textAlignVertical: 'center',
//     fontSize: 15,
//     color: 'black',
//   },

//   cantainer2: {
//     width: '100%',
//     height: '15%',
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,

//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   button: {
//     marginTop: 20,
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   buttonOpen: {
//     //backgroundColor: '#F194FF',
//   },
//   buttonClose: {
//     //backgroundColor: colores.green,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     //marginBottom: 15,
//     textAlign: 'center',
//     fontSize: 30,
//     //color: colores.green,
//   },
// });