import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import { theme } from "./core/theme";
import { useNavigation } from "@react-navigation/native";
import { emailValidator } from "./helpers/emailValidator";
import { passwordValidator } from "./helpers/passwordValidator";
import axios from "axios";
import url from "../../url.json";
//import FormData from "form-data";

import Home from "../../Portals/Pharmacy Management Portal/Home";
//import Firebase from "./firebase";
//const auth = Firebase.auth();

export default function LoginScreen({ route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  const navigation = useNavigation();
  const { otherParam } = route.params;

  useEffect(() => {
    fetch("http://192.168.0.107:3000/users/get_user", {
      method: "GET",
      headers: {
        "x-access-tokens":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTMwNTcyNzMsImlhdCI6MTY1Mjk3MDgyMywic3ViIjoxfQ.C4dQhcZrj054OSJv8daCwlSPB6hdyT1wDQngiWtvZ20",
      },
    })
      .then((response) => {
        response.json().then((data) => {
          console.log("Data.data : ", data.data);
          setUser(data.data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(user);

  const onLoginPressed = async () => {
    // const emailError = emailValidator(email.value);
    // const passwordError = passwordValidator(password.value);

    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError });
    //   return;
    // }

    var serializeJSON = function (data) {
      return Object.keys(data)
        .map(function (keyName) {
          return (
            encodeURIComponent(keyName) +
            "=" +
            encodeURIComponent(data[keyName])
          );
        })
        .join("&");
    };

    // console.log("before axios");
    // console.log(url.url);
    // console.log(email);
    // console.log(password);
    let form_data = new FormData();
    form_data.append("email", email);
    form_data.append("password", password);
    console.log("formData : ", form_data);

    // let form_data = serializeJSON({
    //   email: email,
    //   password: password,
    // });

    // console.log(form_data);

    fetch("http://192.168.0.107:3000/users/login", {
      method: "post",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: form_data,
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.code === 200) {
            setUser(data.token);
            navigation.navigate("Root");
          } else {
            alert("Invalid Email or Password");
          }
          console.log(data.token);
        });
      })
      .catch((err) => {
        alert("Network Error");
        console.log("Error : ", err);
      });

    //form_data.append("user_type", "patient");

    // let data = {
    //   email: email,
    //   password: password,
    // };

    // var config = {
    //   method: "post",
    //   url: `http://192.168.0.104:3000/users/login`,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   body: form_data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log("responce data : ", response.data);
    //   })
    //   .catch(function (error) {
    //     console.log("error : ", error);
    //   });
    // axios({
    //   method: "post",
    //   url: `${url.url}users/login`,
    //   data: form_data,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     console.log("email : ", res.data);

    //     if (otherParam == "PharReg") {
    //       navigation.navigate("Home");
    //     } else if (otherParam == "PaReg") {
    //       navigation.navigate("Root");
    //     } else if (otherParam == "BDReg") {
    //       navigation.navigate("HomeBlood");
    //     } else if (otherParam == "LaReg") {
    //       navigation.navigate("HomeLab");
    //     } else if (otherParam == "AmReg") {
    //       navigation.navigate("HomeAmbulance");
    //     } else {
    //       console.log("Incorrect Credentials");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log("The database error is : ", err);
    //   });

    console.log("after axios");

    // console.log(otherParam);
    // if (otherParam == "PharReg") {
    //   navigation.navigate("Home");
    // } else if (otherParam == "PaReg") {
    //   navigation.navigate("Root");
    // } else if (otherParam == "BDReg") {
    //   navigation.navigate("HomeBlood");
    // } else if (otherParam == "LaReg") {
    //   navigation.navigate("HomeLab");
    // } else if (otherParam == "AmReg") {
    //   navigation.navigate("HomeAmbulance");
    // }
    //navigation.navigate("Root");
  };
  // const Value = ()=> {
  //   if (route.params.otherParam === 'PaReg'){
  //     return 'Patient'
  //   }
  //   else if (route.params.otherParam === 'AmReg'){
  //     return 'Patient'
  //   }
  //   else if (route.params.otherParam === 'PaReg'){
  //     return 'Patient'
  //   }
  //   else if (route.params.otherParam === 'PaReg'){
  //     return 'Patient'
  //   }
  //   else if (route.params.otherParam === 'PaReg'){
  //     return 'Patient'
  //   }
  //   else if (route.params.otherParam === 'PaReg'){
  //     return 'Patient'
  //   }

  // }

  //   const onLoginPressed = () => {
  //   try {
  //     if (email != '' && password != '') {
  //       auth.signInWithEmailAndPassword(email.value, password.value).
  //       then(() => {navigation.navigate('Dashboard')}
  //       ).catch(() => alert("Invalid"))
  //     }
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Logo />
      <Header>Welcome </Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail(text)}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword(text)}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ResetPasswordScreen")}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Genral", { otherParam })}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "85%",
    alignSelf: "center",
    alignItems: "center",
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 14,
  },
  forgot: {
    fontWeight: "bold",
    fontSize: 12,
    color: theme.colors.primary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
