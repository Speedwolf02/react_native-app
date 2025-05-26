import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Welcome from './welcome';
import ImageComponent from './image';
import VideoPlayer from './video';
import Counter from './state'
import Login_page from "./login";
import Dash from "./dashboard";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InputFocus from "./useref";
const Stack =createNativeStackNavigator();

const App = () =>{
  return(
   <View>
    <InputFocus/>
   </View>s
  )
   
};
export default App;