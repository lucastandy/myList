import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    tabArea: {
        height:80,
        flexDirection:'row',
        justifyContent:'space-around',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7
    },
    tabItem: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    tabItemButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        top: -30,
        backgroundColor: themes.colors.primary
    }
    
});