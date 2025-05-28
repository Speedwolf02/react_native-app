import React, { useState } from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from "react-native";


const Login_page = ({ navigation }) => {
  const [name, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handle_log =() =>{
    if (name !=null & name=="saran" & password !=null & password=="saran123")
    {
      navigation.navigate('home')
    }
    else{
      setError("enter correct credentials")
    }
  }

  return (
    <View style={styles.vw}>
      <Text style={styles.txt}>Login Page</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email id"
        onChangeText={setUsername}
        value={name}
      />

      <TextInput
        style={styles.pass}
        placeholder="Enter your password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      {error? <Text style={styles.tst}>{error}</Text> : null}
      
      <TouchableOpacity
        onPress={handle_log }
        style={styles.btn}
      >
        <Text style={styles.txt1}>Login Now</Text>
      </TouchableOpacity>

      <Text
        onPress={() => navigation.navigate('register')}
        style={styles.txt2}
      >
        Already don't have an account? Register Now
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 50,
  },
  input: {
    borderWidth: 1,
    marginTop: 50,
    width: 300,
    padding: 10,
  },
  pass: {
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    padding: 10,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: "rgb(8, 216, 243)",
    width: 150,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
  txt1: {
    fontWeight: "bold",
    color: "#fff",
  },
  vw: {
    flex: 1,
    alignItems: "center",

  },
  txt2: {
    marginTop: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
  tst:{
    color:"red",
    marginRight:150,
    marginBottom:55,
  }
});

export default Login_page;
