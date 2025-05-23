import React from "react";
import{View,  Text, Image, StyleSheet}from 'react-native'


const ImageComponent = () =>{
    return(
        <View >
            <Image style={styles.ima} 
            source={require('./.bundle/asset/wolf.jpg')}/>
            <Text style={styles.txt}>
                The Wolf
            </Text>
            <Text style={styles.txt1}>
                The Neon Wolf
            </Text>
            <Text style={styles.txt2}>
                In the heart of a midnight forest bathed in darkness, a creature of electric light prowls beneath the canopy — the Neon Wolf. Unlike any predator of the natural world, its fur shimmers with an iridescent glow, threads of violet, cyan, and magenta pulsing like the heartbeat of a distant galaxy. Its eyes burn like twin moons, casting faint glows onto the forest floor with every deliberate step.
            </Text>
            <Text style={styles.txt1}>
                Sample video
            </Text>
            <Video source={require('./videoplayback.mp4')}/>

        </View>
    )
}
const styles = StyleSheet.create({
    ima:{
     width:100,
     height:100,
     borderRadius:50,
      marginLeft:160

    },
    txt:{
        textAlign:"center",
        fontSize:30,
        fontWeight:"bold",
        color:"rgb(112, 2, 134)",
        
    },
    txt1:{
        fontSize:20,
        fontWeight:"bold",
        textDecorationLine:"underline",
        color:"blue",
        marginTop:15,
    },
    txt2:{
        fontStyle:"italic",
        marginTop:15,
        fontSize:15,
        fontWeight:"bold",
        paddingLeft:25,

    }
})
export default ImageComponent;


