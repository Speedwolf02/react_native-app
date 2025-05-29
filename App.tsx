import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Welcome from './welcome';
import ImageComponent from './image';
import VideoPlayer from './video';
import Counter from './state'
import Login_page from "./login";
import Dash from "./dashboard";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputFocus from "./useref";
import req_page from "./register";
import Id_card from "./datafetch";
import Table_pg from "./table";


const Stack =createNativeStackNavigator();


const App = () =>{
  return(
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Login">
         <Stack.Screen name="Login" component={Login_page}/>
         <Stack.Screen name="home" component={Dash}/>
         <Stack.Screen name="register" component={req_page}/>
         <Stack.Screen name="data" component={Id_card}/>
         <Stack.Screen name='table' component={Table_pg}/>
      </Stack.Navigator>
     
       
    </NavigationContainer>
  )
   
};
export default App;