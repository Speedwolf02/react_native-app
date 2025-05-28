import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import Id_card from "./datafetch";




const Dash = ({navigation}) => {
    return(
        <View style={{padding:100}}>
            <Text style={styles.txt}>
                welcome to dash board
            </Text>
            <Button title="click here" onPress={() => navigation.navigate('data')} ></Button>
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
export default Dash;