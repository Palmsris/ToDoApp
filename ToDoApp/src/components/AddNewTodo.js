import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AddNewTodo({ navigation, route }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSaveTodo = async () => {
        if (!title.trim() || !description.trim()) {
            if (!title.trim()) {
                Alert.alert('Error', 'Title cannot be empty');
            }
            if (!description.trim()) {
                Alert.alert('Error', 'Description cannot be empty');
            }
            return;
        }

        try {
            const todo = {
                title,
                description,
            };
            await AsyncStorage.setItem('todo', JSON.stringify(todo));

            console.log("Save todo pressed");
            console.log("Title: ", title);
            console.log("Description: ", description);
            route.params.todoSubmit(
                title,
                description,
            );

            setTitle('');
            setDescription('');

            Alert.alert('Success', 'Todo Added Successfully.');
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'Failed to save todo.');
        }
    };

    return (        
        <View style={styles.container}>
            <Text style={styles.title}>Add New Todo</Text>
            <TextInput
                style={styles.input}
                placeholder="Title"
                onChangeText={text => setTitle(text)}
                value={title}
            />
            <TextInput
                style={[styles.input, { height: 100 }]}
                multiline
                placeholder="Description"
                onChangeText={text => setDescription(text)}
                value={description}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress ={()=>navigation.navigate('HomeScreen')}
                    style={[styles.button]}
                >
                    <FontAwesome name="arrow-left" size={20} color="#593D25" style={styles.icon}/>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button]}
                    onPress={handleSaveTodo}
                >
                     <FontAwesome name="save" size={20} color="#593D25" style={styles.icon}/>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2B3B3",
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: "#593D25",
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#F2EFE9",
        padding: 10,
        marginBottom: 20,
        borderRadius: 6,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#F2E3D5",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        width: "45%",
    },
    buttonText: {
        color: "#593D25",
        fontSize: 16,
        fontWeight: "bold",
    },
    icon: {
        marginRight: 5,
    },
});