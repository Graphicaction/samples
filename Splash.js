import React, { Component } from 'react';
import {
    Platform,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import loginForm from './loginForm';

export default class splash extends Component{
    render(){
        return(
            <View style={styles.wrapper}>
                <View style={styles.logoContainer}>
                <Image
                   style={styles.logo} 
                   source={require('./src/images/logo.jpg')}
                   />
                   <Text style={styles.title}>An app made for All! </Text>
                </View>
                <View style={styles.formContainer}>
                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#3498db',
        flex: 1
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    formContainer: {
        justifyContent: 'center',
        flex: 1
    },
    title:{
        color: 'white',
        textAlign: 'center',
        opacity: 0.9
    },
    logo: {
        width: 100,
        height: 200
    }
});

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// export default class Splash extends Component{
//     render(){
//         return(
//             <View style={styles.wrapper}>
//                 <View style={styles.titleWrapper}>
//                     <Text style={styles.title}>Hello</Text>
//                 </View>
//                 <View>
//                     <Text style={styles.footer}>Powered by SwaminiTeam</Text>
//                 </View>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     wrapper: {
//         backgroundColor: 'blue',
//         justifyContent: 'center',
//         flex: 1,
//         alignItems: 'center'
//     },
//     title: {
//         color: 'yellow',
//         fontSize: 25,
//         fontWeight: 'bold'
//     },
//     titleWrapper: {
//         justifyContent: 'center',
//         flex: 1
//     },
//     footer: {
//         color: 'white',
//         fontWeight: '200',
//         paddingBottom: 10
//     }
// });