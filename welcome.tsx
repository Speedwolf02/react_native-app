import React from "react";
import{View, Text, Image}from 'react-native'

const Welcome = () =>{
  return(
    <View>
      <Text>hello React</Text>
      <Image source={require('D:\React\im1.png')}>
    </View>
  );
};

export default Welcome;