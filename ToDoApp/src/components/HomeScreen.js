import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import TodoList from "./TodoList"

export default function HomeScreen() {
    return (
        <View>
        <View>
                <Text style={styles.header}>
                    My Todo List
                </Text>   
        </View>
        
        <TodoList />

        <TouchableOpacity
            style={styles.addButton}
        >
            <Text style={{ 
                color: "black", 
                fontweight: "bold", 
                fontSize: 13,
                }}> Add New Todo
            </Text>
        </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        color: "black",
        fontweight: "bold",
        fontSize: 20,
        alignSelf: "center"
    },
    addButton: {
        backgroundColor: "lavender",
        borderRadius: 6,
        paddingVertical: 7,
        paddingHorizontal: 30,
        alignSelf: "center",
        alignItems: "center"
    },
    todolist: {
        backgroundColor: "white",
        margin: 50,
        fontSize: 15,
        height: 30,
        width: 300,
    }
  });

