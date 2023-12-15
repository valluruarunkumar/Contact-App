import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../Config/Colors";

const window=Dimensions.get("window")
export default StyleSheet.create({
    container: {
        marginLeft:20,
        borderBottomColor:"black",
        // backgroundColor:"grey",
        marginTop:20
    },
    input:{
        width:window.width,
        height:60,
        fontSize:20,

    }
})