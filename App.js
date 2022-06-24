import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation/Navigation';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});
export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Navigation />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
