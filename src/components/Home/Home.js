import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component{
    login(){
        Actions.login();
      }

    render(){
        return(
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>Welcome User!</Text>
                </View>
                <View style={styles.footerwrapper}>
                    <TouchableOpacity onPress={this.login}>
                        <Text style={cursor.pointer}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flexGrow: 1,
    },
    title:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        opacity: 0.9
    },
    footerwrapper:{
       alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-end'
    }
    
});