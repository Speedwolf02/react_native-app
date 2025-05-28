import React, { useEffect, useState } from "react";
import {Text,TextInput,View,TouchableOpacity,StyleSheet, Image} from "react-native";
import img from './im2.jpg'
import im2 from './im3.jpg'

const Fetchdata = () => {
  const [input, setInput] = useState(""); 
  const [users, setUsers] = useState(null); 
  const [user, setSelectedUser] = useState(null); 

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => console.error(error));
  }, []);

  const Display = () => {
    if (users) {
      const found = users.find((user) => user.id === parseInt(input));
      setSelectedUser(found || null);
    }
  };

  return (
    <View style={styles.vw}>
      <View style={styles.vw2}>
        <Text style={styles.txt2}>Enter id :</Text>
        <TextInput
          style={styles.input}
          onChangeText={setInput}
          placeholder="Enter the ID"
          value={input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.vw1}>
        <TouchableOpacity onPress={Display} style={styles.btn}>
          <Text style={styles.txt1}>Show Details</Text>
        </TouchableOpacity>
      </View>

      <View style={{ padding: 20 }}>
        {user ? (
          <View style={styles.vw4}>
            <View style={{backgroundColor:"blue",paddingBottom:30 ,paddingTop:10}} >
              <Image style={{width:50,height:50,borderRadius:50,marginLeft:130}} source={img}/>
              <Text style={{textAlign:"center",marginTop:30,color:"white",fontSize:30,fontWeight:"bold"}}>Id Card</Text>
            </View>
            <View style={styles.vw5}>
            <Image style={{width:80,height:80,borderWidth:1,marginLeft:100}} source={im2}/>
            <Text style={styles.t1}>
                Name : {user.name}
            </Text>
            <Text style={styles.t1}>
                Email : {user.email}
            </Text>
             <Text style={styles.t1}>
                Address : {user.address.city}
            </Text>
             <Text style={styles.t1}>
                Phone : {user.phone}
            </Text>
            </View>
          </View>
        ) : (
          <Text style={{marginTop:30,color:"red", marginLeft:30}}>Enter a valid ID and press Show Details</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vw: {
    padding: 30,
  },
  txt2: {
    fontWeight: "bold",
    color:"black"
  },
  input: {
    borderWidth: 1,
    width: 200,
    marginLeft: 20,
    height: 40,
    paddingHorizontal: 10,
  },
  vw1: {
    marginTop: 20,
    marginRight: 200,
  },
  vw2: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "rgb(8, 216, 243)",
    width: 150,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginLeft: 100,
    marginTop:50
  },
  txt1: {
    fontWeight: "bold",
    color: "#fff",
  },
  vw4:{
    marginTop:30,
    borderWidth:1,
    height:450,
  },
  t1:{
    marginTop:20,
    padding:3,
    fontSize:15,
    fontWeight:"bold"
  },
  vw5:{
    marginTop:10,
    marginLeft:20,
  }
});

export default Fetchdata;
