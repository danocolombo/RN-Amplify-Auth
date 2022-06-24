import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/ui/SocialSignInButtons';

const SignUpScreen = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onSignUpPressed = () => {
        console.warn('Sign Up');
    };
    const onTermsOfUsePressed = () => {
        console.warn('Terms of Use');
    };
    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy Policy');
    };
    const onSignInPressed = () => {
        console.warn('Sign in');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput
                    placeholder='Username'
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    placeholder='Email'
                    value={email}
                    setValue={setEmail}
                />
                <CustomInput
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomInput
                    placeholder='Repea Password'
                    value={passwordRepeat}
                    setValue={setPasswordRepeat}
                    secureTextEntry
                />
                <CustomButton text='Sign Up' onPress={onSignUpPressed} />
                <Text style={styles.text}>
                    By signing up, you confirm that you accept our{' '}
                    <Text style={styles.link} onPress={onTermsOfUsePressed}>
                        Terms of Use
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                        Privacy Policy
                    </Text>
                </Text>
                <SocialSignInButtons />
                <CustomButton
                    text='Have an account? Sign in'
                    onPress={onSignInPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

export default SignUpScreen;
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
