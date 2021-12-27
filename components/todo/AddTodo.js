import React,{useState} from 'react';
import {Text, TextInput,View, Button, StyleSheet,Alert, KeyboardAvoidingView, Platform, TouchableOpacity} from 'react-native';

const AddTodo = ({setTodos})=> {
    const [inputText,setInputText] = useState('');
    const changeHandler = (val)=> {
        setInputText(val);
        console.log(val);
    }

    const handlePress = ()=> {
    
        if(inputText && inputText.length > 3 ){
            setTodos(prevTodos => {
                return [
                  { text:inputText, key: Math.random().toString() },
                  ...prevTodos
                ];
              });
              setInputText()
        } else {
            Alert.alert("OOPS!","Text Length Shoud be Grater than 3 Char")
        }
    }

    return(
        
        <KeyboardAvoidingView style={style.container}
        > 
            <TextInput value={inputText} style={style.textInput} placeholder='Please Type Something ' onChangeText={changeHandler} />
            <TouchableOpacity onPress={handlePress} >
                <View style={style.addButton} >
                    <Text style={style.buttonText}>+</Text> 
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>

    )
}

const style = StyleSheet.create({
    container: {
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
    },
    textInput : {
        paddingHorizontal:15,
        paddingVertical:10,
        backgroundColor:'#fff',
        flex:1,
        fontSize:16,
        margin:0
    },
    addButton:{
        width:50,
        height:50,
        backgroundColor:"#fff",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        marginLeft:15
    },
    buttonText : {
        fontSize:25
    }
})

export default AddTodo;