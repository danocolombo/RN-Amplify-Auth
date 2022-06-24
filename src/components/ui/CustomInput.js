import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    container: {
        background: 'white',
        width: '100%',
        // borderColor: '#e8e8e8',
        borderColor: 'black',
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    input: {
        fontSize: 18,
    },
});
