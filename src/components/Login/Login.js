import React, { Component } from 'react';
import {
    Platform,
  Image,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                <Image
                   style={styles.logo} 
                   source={require('../../images/logo.jpg')}
                />
                   <Text style={styles.title}>Possibilities Unlimited!</Text>
                </View>
                <View style={styles.formContainer}>
                   <LoginForm />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flexGrow: 1
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    },
    formContainer: {
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    title:{
        color: 'white',
        textAlign: 'center',
        opacity: 0.9
    },
    logo: {
        width: 200,
        height: 200
    }
});