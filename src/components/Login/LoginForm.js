import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class LoginForm extends Component{

  register(){
    Actions.register();
  }
  home(){
    Actions.home();
  }

  render() {
    return (
    <View style={styles.container}>
       <TextInput 
        placeholder="username or email id"
        style={styles.input}
        returnKeyLabel="next"
        keyboardType="email-address"
        onSubmitEditing={()=>this.passwordInput.focus()}
       />
       <TextInput 
       placeholder="password"
       secureTextEntry={true} 
       returnKeyLabel="Go"
        style={styles.input}
        ref={(input)=>this.passwordInput = input}
       />
       <TouchableOpacity style={styles.buttonContainer} onPress={this.home}>
         <Text style={styles.buttonText}> Login </Text>
        </TouchableOpacity>
        <View style={styles.signupTextRow}>
          <Text>Not yet Registered?</Text>
          <TouchableOpacity onPress={this.register}>
            <Text style={styles.signup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
      height: 40,
      backgroundColor: 'white',
      marginBottom: 20,
      paddingHorizontal: 10,
      borderRadius: 25,
      marginVertical: 10
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
  signupTextRow: {
      flexGrow:1,
      alignItems:'center',
      justifyContent: 'center',
      flexDirection: 'row'
  },
  signup: {
      color: 'white'
  }
});