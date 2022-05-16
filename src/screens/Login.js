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

import Home from "../../Portals/Pharmacy Management Portal/Home";
//import Firebase from "./firebase";
//const auth = Firebase.auth();

export default function LoginScreen({ route }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const navigation = useNavigation();
  const { otherParam } = route.params;

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    console.log(otherParam);
    if (otherParam == "PharReg") {
      navigation.navigate("Home");
    } else if (otherParam == "PaReg") {
      navigation.navigate("Root");
    } else if (otherParam == "BDReg") {
      navigation.navigate("HomeBlood");
    } else if (otherParam == "LaReg") {
      navigation.navigate("HomeLab");
    } else if (otherParam == "AmReg") {
      navigation.navigate("HomeAmbulance");
    }
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
        onChangeText={(text) => setEmail({ value: text, error: "" })}
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
        onChangeText={(text) => setPassword({ value: text, error: "" })}
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
