import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './components/Home/Home';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar={true}>
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="register" component={Register} title="Register"/>
                <Scene key="home" component={Home}/>
                </Stack>
            </Router>
        );
    }
}