import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({
    onPress,
    text,
    type = 'PRIMARY',
    bgColor,
    fgColor,
}) => {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.container,
                type === 'PRIMARY'
                    ? styles['container_PRIMARY']
                    : styles['container_TERTIARY'],
                bgColor ? { backgroundColor: bgColor } : {},
            ]}
        >
            <Text
                style={[
                    styles.text,
                    type === 'PRIMARY'
                        ? styles['text_PRIMARY']
                        : styles['text_TERTIARY'],
                    fgColor ? { color: fgColor } : {},
                ]}
            >
                {text}
            </Text>
        </Pressable>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    container_PRIMARY: {
        backgroundColor: '#3b71f3',
    },
    container_TERTIARY: {},
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
    text_TERTIARY: {
        color: 'gray',
    },
});
