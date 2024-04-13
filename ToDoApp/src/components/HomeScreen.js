import { Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import TodoList from "./TodoList"
import AddNewTodo from "./AddNewTodo";
import { FontAwesome } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeScreen({ navigation }) {
    const [showAddTodo, setShowAddTodo] = useState(false);
    const [todos, setTodos] = useState([
            { id: 1, title: "Laundry", description: "Wash clothes and hang them to dry" },
            { id: 2, title: "Exercise", description: "Do 17 minutes of exercise" },
            { id: 3, title: "Assignment", description: "Finish assignment before 11:59 PM" },
    ]);

    useEffect(() => {
        loadTodos();
    }, []);

    useEffect(() => {
        saveTodos();
    }, [todos]);

    const loadTodos = async () => {
        try {
          const savedTodos = await AsyncStorage.getItem('todos');
          if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
          }
        } catch (error) {
          console.error('Error loading todos from AsyncStorage:', error);
        }
    };
    
    const saveTodos = async () => {
        try {
          await AsyncStorage.setItem('todos', JSON.stringify(todos));
        } catch (error) {
          console.error('Error saving todos to AsyncStorage:', error);
        }
    };

 
    // const addNewTodo = (title, description) => {
    //     const id = todos.length + 1;

    //     setTodos([...todos, { id: `${id}`, title: `${title}`, description: `${description}` }]);
    // };

    const addNewTodo = (title, description) => {
        const id = todos.length + 1;
        const newTodo = { id: `${id}`, title: `${title}`, description: `${description}`, finished: false };
        setTodos([...todos, newTodo]);
      };

    const toggleAddTodo = () => {
        setShowAddTodo(!showAddTodo);
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const renderItem = ({ item }) => (
        <TodoList
            id={item.id}
            title={item.title}
            description={item.description}
            onDelete={handleDeleteTodo}
        />
    );

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.header}>MY TODO LIST</Text>
            </View>


            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />


            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress ={()=>navigation.navigate('AddNewTodo', {todoSubmit: addNewTodo})}

                    >
                        <FontAwesome name="plus-circle" size={20} color="#593D25" style={styles.icon}/>
                        <Text style={styles.todoButton}>Add New Todo</Text>
                    </TouchableOpacity>
            </View>
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
        flexDirection: "row",
    },
    // todolist: {
    //     backgroundColor: "white",
    //     margin: 50,
    //     fontSize: 15,
    //     height: 30,
    //     width: 300,
    // },
  });