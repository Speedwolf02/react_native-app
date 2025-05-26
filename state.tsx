import React ,{useState} from "react";
import { View,Text, Button } from "react-native";

export default function Counter () {
    const[count, setCount] = useState(0)
    const[decrement, setDecrement] = useState(10)
    return(
        <View style={{marginTop:100 , borderWidth:3, padding:"20%"}}>
            <Text>
                Count:{count}
            </Text>
            <Button title="Increase" onPress={() => setCount(count+1)}/>
            <Text>
                Decrement:{decrement}
            </Text>
            <Button title="Decrease" onPress={() => setDecrement(decrement-1)} />
        </View>
    )
}