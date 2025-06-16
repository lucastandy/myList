import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button: {
        width:250,
        height:50,
        backgroundColor:themes.colors.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:5
        },
        shadowOpacity:0.29,
        shadowRadius:4.65,
        elevation:7
    },
    textButton: {
        fontSize:16,
        color:themes.colors.secondary,
        fontWeight:'bold'
    }
    
});