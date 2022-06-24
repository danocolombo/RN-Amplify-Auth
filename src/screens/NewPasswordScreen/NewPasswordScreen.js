import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const NewPasswordScreen = () => {
    const [userName, setUserName] = useState('');
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigation = useNavigation();
    const onBackToSignInPressed = () => {
        navigation.navigate('SignIn');
    };
    const onSubmitPressed = () => {
        //todo: send new password to backend
        navigation.navigate('Home');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>
                <CustomInput
                    placeholder='Code'
                    value={code}
                    setValue={setCode}
                />
                <CustomInput
                    placeholder='Enter new password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder='Confirm your new password'
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />

                <CustomButton text='Submit' onPress={onSubmitPressed} />

                <CustomButton
                    text='Back to Sign in'
                    onPress={onBackToSignInPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

export default NewPasswordScreen;
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
