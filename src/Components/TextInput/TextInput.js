import React ,{Component}from "react";
import {View,TextInput} from "react-native";
import styles from "./styles";

class CustomTextInput extends Component{
    render(){


        return (
            <View style={styles.container}>
                <TextInput
                 autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                   {...this.props} 

                   />
            </View>
        )
    }

    }
   

export default CustomTextInput;