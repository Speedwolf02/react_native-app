import React from "react";
import { Text, View, TouchableOpacity ,TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";



const req_page = ({navigation}) => {
    return(
        <View style={styles.vw}>
            <Text style={styles.txt}>
                Register form
            </Text>
            <TextInput style={styles.input} 
            placeholder="enter your email id"/>
            <TextInput
            style={styles.pass}
            secureTextEntry
            placeholder="enter your pass"/>
            <TextInput
            style={styles.mn}
            placeholder="enter your number"/>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('home')}>
                <Text style={styles.txt1}>
                    Register now
                </Text>
               
            </TouchableOpacity>
            <View style={styles.fl}>
                     <Text>
                         Already have account?
                    </Text>
                    <Text style={{color:"indigo"}} onPress={() =>navigation.navigate('Login')}>
                        Login now
                    </Text>
                </View>

        </View>
    )

}

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
  mn:{
    borderWidth: 1,
    marginTop: 20,
    width: 300,
    padding: 10,
    marginBottom: 55,
  },
  fl:{
    flexDirection:"row",
    marginTop:10
  }
});

export default req_page;