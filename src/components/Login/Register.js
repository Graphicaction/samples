import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
    TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class Register extends Component{
    home(){
        Actions.home();
      }

    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                <Image
                   style={styles.logo} 
                   source={require('../../images/logo.jpg')}
                />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.title}>Name:</Text>
                        <TextInput 
                            placeholder="Full Name"
                            style={styles.input}
                            returnKeyLabel="next"
                            onSubmitEditing={()=>this.emailInput.focus()}
                        />
                    <Text style={styles.title}>Email Id:</Text>
                        <TextInput 
                        placeholder="Email Id"
                        returnKeyLabel="Next"
                        keyboardType="email-address"
                        style={styles.input}
                        onSubmitEditing={()=>this.passwordInput.focus()}
                        ref={(input)=>this.emailInput = input}
                        />
                    <Text style={styles.title}>Password:</Text>
                        <TextInput 
                        placeholder="password"
                        secureTextEntry={true} 
                        returnKeyLabel="Go"
                            style={styles.input}
                            ref={(input)=>this.passwordInput = input}
                        />
                    <TouchableOpacity style={styles.buttonContainer} onPress={this.home}>
                        <Text style={styles.buttonText}> Register </Text>
                    </TouchableOpacity>
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
    buttonContainer:{
        backgroundColor: 'blue',
        paddingVertical: 10,
        borderRadius: 25,
        marginVertical: 10
      },
    buttonText: {
    color: 'white',
    textAlign: 'center'
    },
    formContainer: {
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    title:{
        color: 'gray',
        textAlign: 'center',
        opacity: 0.9,
        flexDirection: 'row'
    },
    logo: {
        width: 200,
        height: 200
    }
});