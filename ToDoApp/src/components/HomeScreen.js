import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import TodoList from "./TodoList"
import AddNewTodo from "./AddNewTodo";
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';


export default function HomeScreen({ navigation }) {
    const [showAddTodo, setShowAddTodo] = useState(false);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>MY TODO LIST</Text>
            </View>

            <TodoList taskDesc="Laundry"/>
            <TodoList taskDesc="Exercise for 17 minutes"/>
            <TodoList taskDesc="Finish assignment"/>

            {showAddTodo ? (
                <AddNewTodo /> 
            ) : (
                <TouchableOpacity
                    style={styles.addButton}
                    onPress ={()=>navigation.navigate('AddNewTodo')}
                >
                    <FontAwesome name="plus-circle" size={20} color="#593D25" style={styles.icon}/>
                    <Text style={styles.todoButton}>Add New Todo</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2B3B3",
        alignItems: "center",
        justifyContent: "start",
        padding: 60,
    },
    header: {
        color: "#593D25",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "center",
    },
    addButton: {
        backgroundColor: "#F2E3D5",
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 30,
        alignSelf: "center",
        alignItems: "center",
        margin: 17,
    },
    todoButton: {
        color: "#593D25", 
        fontSize: 16, 
        fontWeight: "bold",
        marginRight: 5,
    },
    icon: {
        marginRight: 5,
    },
    // todolist: {
    //     backgroundColor: "white",
    //     margin: 50,
    //     fontSize: 15,
    //     height: 30,
    //     width: 300,
    // },
  });

