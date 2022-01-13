import React,{useState} from 'react';
import {Text, StyleSheet,TouchableOpacity} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const TodoItem = ({item,removeHandler})=> {

  const [taskcomplete,setTaskComplete] = useState(false);

    return (
        <TouchableOpacity onPress={()=> setTaskComplete(!taskcomplete) } style={style.todoItem}>
           <Text style={taskcomplete ? style.taskCompleteText : style.text} >{item.text}</Text>
           <TouchableOpacity  onPress={()=>removeHandler(item.key)} >
               <Text style={style.button}><MaterialIcons size={20}  name="delete" /></Text>
            </TouchableOpacity> 
        </TouchableOpacity>
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
      fontSize:16,
    },
    taskCompleteText : {
      fontSize:16,
      textDecorationLine:"line-through"
    },
    button:{
      textAlignVertical:"center",
      color:"red",
    }
})

export default TodoItem;