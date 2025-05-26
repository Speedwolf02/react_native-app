import React ,{useRef} from "react";
import { TextInput, Button,View} from "react-native";

export default function InputFocus(){
    const InputRef = useRef<TextInput>(null);

    const focusInput = () =>{
        InputRef.current?.focus();

    }
    return(
        <View style={{padding:100}}>
            <TextInput ref={InputRef} placeholder="type here" />
            <Button title="Focus" onPress={focusInput}/>
            
        </View>
    )
}