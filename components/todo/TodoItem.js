import React from 'react';
import {View,Text, Pressable , StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const TodoItem = ({item,removeHandler})=> {

    return (
        <View style={style.todoItem}>
           <Text style={style.text} >{item.text}</Text>
           <TouchableOpacity  onPress={()=>removeHandler(item.key)} >
               <Text style={style.button}><MaterialIcons size={20}  name="delete" /></Text>
            </TouchableOpacity> 
        </View>
    )
}

const style = StyleSheet.create({
    todoItem:{
      backgroundColor:'#fff',
      marginTop:10,
      marginHorizontal:10,
      padding:10,
     justifyContent:"space-between",
     flexDirection:"row",
     borderRadius:5
    },
    text:{
      fontSize:16
    },
    button:{
      textAlignVertical:"center",
      color:"red",
    }
})

export default TodoItem;