import React,{useState} from 'react';
import {View,FlatList,Text, StyleSheet} from 'react-native';
import AddTodo from './AddTodo';
import Header from './Header';
import TodoItem from './TodoItem';

const Todo = () => {

    const [todos,setTodos] = useState([
        {text:"Buy Coffee", key:1},
        {text:"Learn React Native ", key:2},
        {text:"Go For Shopping", key:3}
    ]);

    const removeHandler = (key)=> {
        console.log("key",key);
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.key != key);
          });
    }

    return(
        <View style={styles.todoWrapper} >
            <View style={styles.topWrap}>
            <Header/>
            
            <FlatList
            style={styles.list}
            data={todos}
            renderItem={({item})=> (
                <TodoItem item={item} removeHandler={removeHandler} />
            )}
            />
            </View>

        <AddTodo setTodos={setTodos} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoWrapper : {
        flex: 1,
        backgroundColor: '#D0F0E4',
        justifyContent:"space-between"
    },
    topWrap : {
      flex:1
    },
    list : {
        flex:1
    }
})

export default Todo;