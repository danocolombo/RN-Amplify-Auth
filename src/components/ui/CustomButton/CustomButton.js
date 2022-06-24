import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b71f3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
