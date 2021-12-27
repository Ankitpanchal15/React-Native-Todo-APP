import React,{useState} from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';

const List = ()=> {

    const [list,setList] = useState([{
        name:"List Item 1",
        id: 1
    },
    {
        name:"List Item 2",
        id: 2
    },
    {
        name:"List Item 4",
        id: 3
    }]);
    
    const handlePress = (id)=> {
        setList((prevList)=> {
          return  prevList.filter(item => item.id != id)
        })
    }

    return (
            
            <View style={style.listGroup}>
            <Text style={style.heading}> List Items</Text>

            <FlatList
                
                data={list}
                renderItem={({item})=> (
                    <TouchableOpacity onPress={()=> handlePress(item.id)}>
                    <Text style={style.listItem}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
            {/* {
                list.map((item)=> {
                    return <Text style={style.listItem}>{item.name}</Text>
                })
            } */}
             </View>
      
    )
}


const style = StyleSheet.create({
    heading:{
        backgroundColor:'#000',
        color:'#fff',
        fontSize:20,
        width:"100%",
        padding:5
    },
    listGroup : {
        display:'flex',
       // flexDirection:'column',
        marginTop:20,
       // border:"1px solid #ccc",
        maxWidth:500,
        borderBottomWidth:0
    },
    listItem : {
        padding:10,
        marginBottom:10,
        borderBottomWidth:1,
        borderBottomColor:"#ccc",
    }
})


export default List;