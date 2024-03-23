import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import TodoList from "./TodoList"

export default function HomeScreen() {
    return (
        <View>
        <View>
                <Text style={styles.header}>
                    MY TODO LIST
                </Text>   
        </View>
        
        <TodoList taskDesc="Laundry"/>
        <TodoList taskDesc="Exercise for 17 minutes"/>
        <TodoList taskDesc="Finish assignment"/>

        <View
            style={styles.addButton}
        >
            <Text style={{ 
                color: "black",  
                fontSize: 13,
                
                }}> Add New Todo
            </Text>
        </View>
        </View>
    )
};

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

