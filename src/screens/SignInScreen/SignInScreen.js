import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assets/images/P8-Logo150.png';
import CustomInput from '../../components/ui/CustomInput';
import CustomButton from '../../components/ui/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/ui/SocialSignInButtons';

const SignInScreen = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { height } = useWindowDimensions();
    const onSignInPressed = () => {
        console.warn('Sign In');
    };
    const onSignUpPressed = () => {
        console.warn('Sign Up');
    };
    const forgotPasswordPressed = () => {
        console.warn('forgotPasswordPressed');
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image
                    source={Logo}
                    styles={[styles.logo, { height: height * 0.3 }]}
                    resizeMode='stretch'
                />
                <CustomInput
                    placeholder='Username'
                    value={userName}
                    setValue={setUserName}
                />
                <CustomInput
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry
                />
                <CustomButton text='Sign In' onPress={onSignInPressed} />
                <CustomButton
                    text='Forgot Password'
                    onPress={forgotPasswordPressed}
                    type='TERTIARY'
                />
                <SocialSignInButtons />
                <CustomButton
                    text="Don't have an account? Create one"
                    onPress={onSignUpPressed}
                    type='TERTIARY'
                />
            </View>
        </ScrollView>
    );
};

export default SignInScreen;
const styles = StyleSheet.create({
    root: {
        // flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 80,
        width: '100%',
    },
    logo: {
        width: '70%',
        maxheight: 400,
        maxWidth: 400,
    },
});
