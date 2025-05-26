import React from "react";
import { View, Text,StyleSheet, Dimensions } from "react-native";
import Video from "react-native-video";

const VideoPlayer =()=>{
    return(
        <View style={styles.container}>
            <Text>
                youtube video
            </Text>
            <Video source={require('./videoplayback.mp4')}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            paused={true}
            volume={0.5}       // Set volume (0.0 - 1.0)
            muted={false}      // Set true to mute the audio
            ignoreSilentSwitch="ignore"/>
        </View>
    )
}
const {width}=Dimensions.get('window')
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000",
        justifyContent:"center",
        alignItems:"center",
        marginTop:200,
        
    },
    video:{
        width:width-32,
        height:(width-32)*0.5625,
        marginTop:20,
        flex: 1,
        borderWidth: 2,           // Thickness of the border
        borderColor: 'red',       // Color of the border
        borderRadius: 10,         // Optional: rounded corners
        margin: 10,    


    }
})
export default VideoPlayer;