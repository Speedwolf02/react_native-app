import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import Id_card from "./datafetch";




const Dash = ({navigation}) => {
    return(
        <View style={{padding:10}}>
            <View>
            <Text style={styles.txt}>
                Welcome To Our App
            </Text>
            </View>
            <View style={{marginRight:190}}>
              <Text style={styles.txt1}>Check user details</Text>
              <Button title="click here" onPress={() => navigation.navigate('data')} ></Button>
            </View>
            <View style={{marginRight:190}}>
              <Text style={styles.txt1}>Check Table</Text>
              <Button title="click here" onPress={() => navigation.navigate('table')} ></Button>
            </View>
             <View style={{marginRight:190}}>
              <Text style={styles.txt1}>Check game</Text>
              <Button title="click here" onPress={() => navigation.navigate('test')} ></Button>
            </View>
        </View>

    )
    
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 40,
    marginBottom:90
  },
  txt1:{
    fontSize:20,
    marginBottom:10,
    marginTop:10,
  }

}
)
export default Dash;