import React, { Component } from "react";
import { ScrollView ,Button,View, Alert} from 'react-native';
import CustomTextInput from "../../Components/TextInput/TextInput";
import Colors from "../../Config/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";





const field=[
    {placeholder:'First Name', stateKey:"firstname"},
    {placeholder:'Last Name', stateKey:"lastname"},
    {placeholder:'Email', stateKey:"email",keyboardType:'email-address'},
    {placeholder:'Mobile Phone', stateKey:"mobilePhone"},
    {placeholder:'Home Phone', stateKey:"homePhone"},
    {placeholder:'City', stateKey:"city"},
    {placeholder:'Birthday', stateKey:"Birthday"},
    {placeholder:'Registered', stateKey:"registered"},
    {placeholder:'Username', stateKey:"userName"},

]

class NewContact extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeInput = (text, stateKey) => { // Corrected the parameter name from "field.stateKey" to "stateKey"
        const mod = {};
        mod[stateKey] = text;
        this.setState(mod);
    }

    handleSave=()=>{
        Alert('savedd');
    }


    render() {

        return (
            <KeyboardAwareScrollView style={{ backgroundColor: Colors.background }}>
                {
                    field.map((fieldItem) => ( 
                        <CustomTextInput
                            key={fieldItem.stateKey}
                            {...fieldItem}
                        />
                    ))
                }
                <View style={{marginTop:20}}>
                <Button title="Save"  onPress={()=>this.handleSave()} />
                </View>
              

            </KeyboardAwareScrollView>
        );
    }
}

export default NewContact;
