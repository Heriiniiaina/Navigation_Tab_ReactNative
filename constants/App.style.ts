import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30
    },
    addBtn:{
        alignItems:"center",
        justifyContent:"center",
        height:55,
        width:55,
        borderRadius:30,
        backgroundColor:"#0a7ea4",
        shadowColor:"#2b349c",
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity:0.44,
        marginBottom:10
    }
})