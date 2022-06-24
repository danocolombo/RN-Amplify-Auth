import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const ForgotPasswordScreen = () => {
    const [userName, setUserName] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    const onSendPressed = () => {
        navigation.navigate('NewPassword');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder='Username'
                    value={userName}
                    setValue={setUserName}
                />

                <CustomButton text='Send' onPress={onSendPressed} />

                <CustomButton
                    text='Back to Sign in'
                    onPress={onBackToSignInPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

export default ForgotPasswordScreen;
const styles = StyleSheet.create({
    root: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 80,
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: '#FDB075',
    },
});
