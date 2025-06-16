import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'

    },
    boxMid:{   
        height:Dimensions.get('window').height/4,
        width:'100%',
        // backgroundColor:'green',
        paddingHorizontal:37
        
    },
    boxBottom:{   
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        
    },
    logo: {
        width:80,
        height:80,
        marginTop:40  
    },
    text: {
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
    titleInput: {
        marginLeft:5,
        color:themes.colors.gray,
        marginTop:20
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        backgroundColor:themes.colors.lightGray,
        borderColor:themes.colors.lightGray
    },
    input: {
        height:'100%',
        width:'90%',
        borderRadius:40,
        paddingLeft:5
    },
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
    },
    textBottom: {
        fontSize:16,
        color:themes.colors.gray
    },
    textBottomCreate:{
        fontSize:16,
        color:themes.colors.primary
    }
});