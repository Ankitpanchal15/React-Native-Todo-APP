import React, { useState } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import AddTodo from "./AddTodo";
import Header from "./Header";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: 1 },
    { text: "Learn React Native ", key: 2 },
    { text: "Go For Shopping", key: 3 },
  ]);

  const removeHandler = (key) => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this Todo Item",
      [
        {
          text: "Yes",
          onPress: () => {
            setTodos((prevTodos) => {
              return prevTodos.filter((todo) => todo.key != key);
            });
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.topWrap}>
        <Header title="Todo APP" />

        {/* {todos.map((item, key)=> {
            return   <TodoItem item={item} key={key} removeHandler={removeHandler} />
        })} */}
        

        <FlatList
          style={styles.list}
        
        //   keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} removeHandler={removeHandler} />
          )}
        />
      </View>
      <AddTodo setTodos={setTodos} />
    </View>
  );
};

const styles = StyleSheet.create({
  todoWrapper: {
    flex: 1,
    backgroundColor: "#D0F0E4",
    justifyContent: "space-between",
  },
  topWrap: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default Todo;
