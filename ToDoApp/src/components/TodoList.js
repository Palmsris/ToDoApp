import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function TodoList() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Laundry</Text>
            <Text style={styles.text}>Exercise for 17 minutes</Text>
            <Text style={styles.text}>Finish assignment</Text>
            <Text style={styles.text}>Clean bedroom</Text>

            
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: "lavender",
        margin: 50,
        height: 130,
        width: 300,
        borderRadius: 6,
    },
    text: {
        fontSize: 15,
        color: "black",
        padding: 5,
    }
    });
    