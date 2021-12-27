import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ()=> {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Todo APP</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    header :{
        paddingVertical:10,
        paddingHorizontal: 10,
        width:"100%",
        marginTop:80,
        backgroundColor:"#678D58",
       
    },
    title:{
        color:"#fff",
         textAlign:"left",
        fontSize:30
    }
})

export default Header;