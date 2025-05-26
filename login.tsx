import React , {useState} from "react";
import { View, Button, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Dash from "./dashboard";

export default function Login(){
     const[name, setUsername] = useState('')
        const[password, setPassword] = useState('')
    return(
        <View style={styles.vw}>
            <Text style={styles.txt}>
                Login Page
            </Text>
            <TextInput  style={styles.input} placeholder="enter your email id"/>
            <TextInput style={styles.pass} placeholder="enter your password" secureTextEntry />
            <TouchableOpacity onPress={Dash} style={styles.btn}>
                <Text style={styles.txt1}>
                    Login Now
                </Text>
            </TouchableOpacity>
            <Text onPress={()=> } style={styles.txt2}>
                Already don't have account? Register Now
            </Text>
        </View>
    )
}
const styles= StyleSheet.create({
    txt:{
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:150,
    },
    input:{
        alignItems:"center",
        borderWidth:1,
        marginTop:50,
        width:300,
        marginLeft:55,
    },
    pass:{
         alignItems:"center",
        borderWidth:1,
        marginTop:20,
        width:300,
        marginLeft:55,
        marginBottom:55
    },
    btn:{
        backgroundColor:"rgb(8, 216, 243)",
        width:100,
        marginLeft:20,
        padding:10,
        borderRadius:20

    },
    txt1:{
        fontWeight:"bold",
        marginLeft:5,              
    },
    vw:{
        flex:1,
        alignItems:"center"
    },
    txt2:{
        marginTop:5,
        marginLeft:40
    }
})