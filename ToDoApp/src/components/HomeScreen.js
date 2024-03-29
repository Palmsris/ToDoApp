import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import TodoList from "./TodoList"
import AddNewTodo from "./AddNewTodo";
import { FontAwesome } from '@expo/vector-icons'; 
import { useState } from 'react';

export default function HomeScreen() {
    const [showAddTodo, setShowAddTodo] = useState(false);

    return (
        <View>
            <View>
                <Text style={styles.header}>MY TODO LIST</Text>
            </View>

            <TodoList taskDesc="Laundry"/>
            <TodoList taskDesc="Exercise for 17 minutes"/>
            <TodoList taskDesc="Finish assignment"/>

            {showAddTodo ? (
                <AddNewTodo /> // Render the AddNewTodo component
            ) : (
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setShowAddTodo(true)}
                >
                    <Text style={{ color: "black", fontSize: 13, marginRight: 5 }}>
                        <FontAwesome name="plus" size={15} color="#593D25" /> Add New Todo
                    </Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontSize: 25,
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
    todolist: {
        backgroundColor: "white",
        margin: 50,
        fontSize: 15,
        height: 30,
        width: 300,
    }
  });

