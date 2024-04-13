import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TodoList({ id, title, description, onDelete }) {
  const [expanded, setExpanded] = useState(false);
  const [finished, setFinished] = useState(false);

  const toggleExpanded = () => {
      setExpanded(!expanded);
  };

  const handleFinishTodo = async () => {
    try {
      await AsyncStorage.setItem(id, JSON.stringify({ title, description, finished: !finished }));
      setFinished(!finished);
            console.log("Finish successful");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await AsyncStorage.removeItem(id);
      onDelete(id);
            console.log("Delete successful");
    } catch (error) {
      console.log(error);

    }
  };

  return (
    <>
      <TouchableOpacity style={styles.todoBox} onPress={toggleExpanded}>
              <Text style={styles.title}>{title}</Text>
              
              <FontAwesome 
              name={expanded ? 'caret-up' : 'caret-down'} 
              size={20} color="#593D25" 
              />
      </TouchableOpacity>

          {expanded && (
            <>
              <View style={styles.descriptionContainer}>
                  <Text style={styles.description}>{description}</Text>

                  <View style={styles.controlPanel}>
                    { !finished && (
                      <TouchableOpacity onPress={handleFinishTodo}>
                          <FontAwesome name="check-circle" size={20} color="green"/>
                      </TouchableOpacity>
                    )}

                      <TouchableOpacity onPress={handleDeleteTodo}>
                          <FontAwesome name="trash" size={20} color="red"/>
                      </TouchableOpacity>
                  </View>
              </View>
            </>
          )}
    </>   
  );
}


const styles = StyleSheet.create({
    todoBox: {
        backgroundColor: "#F2E3D5",
        margin: 7,
        height: 30,
        width: 300,
        borderRadius: 6,
        flexDirection: "row",
    },
    text: {
        fontSize: 16,
        color: "#593D25",
        padding: 5,
        fontWeight: "bold",
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#593D25",
    },
    icon: {
        marginLeft: 5,
    },
    descriptionContainer: {
        backgroundColor: "#F2E3D5",
        padding: 10,
        borderRadius: 6,
        marginBottom: 15,
    },
    description: {
        fontSize: 16,
        color: "#593D25",
    },
    controlPanel: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 10,
    },
    });