import React from "react";
import { View,Text,StyleSheet } from "react-native";
import {name,password} from './login'



export default function Dash(){
    return(
        <View style={{padding:100}}>
            <Text style={styles.txt}>
                welcome to dash board
            </Text>
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
}
)