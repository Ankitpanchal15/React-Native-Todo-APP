import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({title})=> {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header :{
        paddingVertical:10,
        paddingHorizontal: 10,
        width:"100%",
        marginTop:45,
        backgroundColor:"#678D58",
       
    },
    title:{
        color:"#fff",
        textAlign:"left",
        fontSize:30
    }
})

export default Header;