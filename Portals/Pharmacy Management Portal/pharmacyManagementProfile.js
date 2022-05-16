import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  Linking,
  Image,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "react-native-paper";
import { Avatar } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
//import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import url from "../../url.json";

export default function PharmacyManagementProfile({ route }) {
  const [data, setData] = useState("");
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [profile_pic, setImage] = useState(
    "https://image.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg"
  );
  const { colors } = useTheme();

  useEffect(() => {
    const apiCall = async () => {
      console.log("a");
      try {
        const res = await axios.get(
          `${url.url}api/pharmacy/62311c1743d3123d6855c921`
        );
        setImage(res.data.profile_pic);
        setName(res.data.name);
        setAddress(res.data.address);
        setContact(res.data.contact);
      } catch (err) {
        console.log(err);
      }
    };
    apiCall();
  }, []);

  const pickFromGallery = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status) {
      let data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspectRatio: [1, 1],
        quality: 1,
      });
      if (!data.cancelled) {
        let newFile = {
          uri: data.uri,
          type: `test/${data.uri.split(".")[1]}`,
          name: `test.${data.uri.split(".")[1]}`,
        };
        handleUpload(newFile);
        //settemp(newFile);
        //setImage(newFile);
        Alert.alert("Success", "Image Uploaded Successfully!");
      }
      console.log(data);
    } else {
      Alert.alert("Warning", "Permissions to Gallery are Required");
    }
  };

  const handleUpload = (image) => {
    const d = new FormData();
    d.append("file", image);
    d.append("upload_preset", "esehatmarkaz");
    d.append("cloud_name", "esehatnarkaz");

    fetch("https://api.cloudinary.com/v1_1/esehatmarkaz/image/upload", {
      method: "POST",
      body: d,
    })
      .then((response) => response.json())
      .then((items) => {
        setImage(items.url);
        console.log(items.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onPresHandler = async () => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const body = { name, age, bloodgroup, address, contact, profile_pic };
    try {
      const res = await axios.post(
        `${url}api/pharmacy/update/62311c1743d3123d6855c921`,
        body,
        config
      );
      console.log("abc");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.uploadImageContainer}>
        <View style={styles.naar}>
          <Image
            source={{
              uri: profile_pic,
            }}
            style={{ width: 200, height: 200 }}
          />
          <View style={styles.uploadBtnContainer}>
            <TouchableOpacity
              onPress={pickFromGallery}
              style={styles.uploadBtn}
            >
              <Text>{profile_pic ? "Edit" : "Upload"} Image</Text>
              <AntDesign name="camera" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <Avatar.Image source={kami} size={200} /> */}
      {/* <View
        style={{
          flexDirection: "row-reverse",
          marginVertical: 20,
          marginLeft: 80,
        }}
      >
        <TouchableOpacity onPress={() => setEdit(!edit)}>
          <Entypo name="edit" size={20} color="gray" style={{ marginTop: 8 }} />
        </TouchableOpacity>
        <TextInput
          style={styles.name}
          editable={edit ? true : false}
          name="name"
          value={name}
          onChangeText={(name) => setName(name)}
        ></TextInput>
      </View> */}

      {/* <View style={styles.details}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Address: </Text>
          <TextInput
            style={styles.values}
            name="address"
            value={address}
            onChangeText={(address) => setAddress(address)}
          ></TextInput>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={styles.keys}>Contact: </Text>
          <TextInput
            style={styles.values}
            name="contact"
            value={contact}
            onChangeText={(contact) => setContact(contact)}
          ></TextInput>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            onPresHandler();
            alert("Profile Data Updated");
          }}
        >
          <Text style={styles.updateBtn}>Save</Text>
        </TouchableOpacity> */}
      <View style={styles.main}>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={26} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={26} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={26} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={26} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={colors.text} size={26} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={26} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => {
            onPresHandler();
            alert("Profile Data Updated");
          }}
        >
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    marginHorizontal: 10,
  },
  uploadImageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  uploadBtnContainer: {
    opacity: 0.7,
    position: "absolute",
    right: 0,
    bottom: 0,
    backgroundColor: "lightgrey",
    width: "100%",
    height: "25%",
  },
  uploadBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  naar: {
    elevation: 2,
    height: 200,
    width: 200,
    backgroundColor: "#efefef",
    position: "relative",
    borderRadius: 999,
    overflow: "hidden",
  },
  // name: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#26241e",
  //   marginRight: 20,
  // },
  // details: {
  //   borderTopWidth: 0.3,
  //   // borderBottomEndRadius: 10,
  //   // // borderBottomRightRadius: 100,
  //   // borderBottomStartRadius: 100,
  // },
  // keys: {
  //   fontSize: 16,
  //   fontWeight: "bold",
  //   color: "#26241e",
  //   marginTop: "7%",
  //   width: "30%",
  // },
  // values: {
  //   fontSize: 14,
  //   color: "#6e6464",
  //   marginTop: "5%",
  //   width: "65%",
  //   borderWidth: 1,
  //   borderRadius: 5,
  //   padding: 4,
  // },
  // click: {
  //   fontSize: 14,
  //   color: "#6e6464",
  //   borderBottomWidth: 0.5,
  // },
  // btn: {
  //   alignItems: "center",
  //   height: 100,
  //   marginTop: "10%",
  // },
  // updateBtn: {
  //   padding: 10,
  //   paddingHorizontal: 30,
  //   alignItems: "center",
  //   fontSize: 16,
  //   borderRadius: 15,
  //   backgroundColor: "darkgray",
  // },
  main: {
    marginTop: 5,
    padding: 15,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
    paddingLeft: 15,
    color: "#05375a",
  },
});
