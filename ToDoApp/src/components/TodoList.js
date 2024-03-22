import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React from "react";

export default function TodoList({ taskDesc }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{taskDesc}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F2E3D5",
        margin: 7,
        height: 30,
        width: 300,
        borderRadius: 6,
    },
    text: {
        fontSize: 15,
        color: "black",
        padding: 5,
    }
    });
    