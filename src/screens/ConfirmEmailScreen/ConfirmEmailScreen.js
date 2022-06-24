import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [userName, setUserName] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const onConfirmPressed = () => {
        //todo: validate
        navigation.navigate('Home');
    };
    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    const onResendCodePressed = () => {
        console.warn('Resend Code');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput
                    placeholder='Enter your confirmation code'
                    value={code}
                    setValue={setCode}
                />

                <CustomButton text='Confirm' onPress={onConfirmPressed} />

                <CustomButton
                    text='Resend code'
                    onPress={onResendCodePressed}
                    type='SECONDARY'
                />
                <CustomButton
                    text='Back to Sign in'
                    onPress={onBackToSignInPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

export default ConfirmEmailScreen;
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
