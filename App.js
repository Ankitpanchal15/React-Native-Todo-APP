import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/todo';
import List from './components/List';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <List /> */}
      <Todo />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  //  alignItems: 'center',
    //justifyContent: 'space-evenly',
    
  },
});
