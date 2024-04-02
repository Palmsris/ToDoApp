import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function AddNewTodo({ navigation }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSaveTodo = () => {
        console.log("Save todo pressed");
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
                    <FontAwesome name="close" size={20} color="#593D25" style={styles.icon}/>
                    <Text style={styles.buttonText}>Cancel</Text>
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
