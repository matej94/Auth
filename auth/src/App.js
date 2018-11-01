import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount () {
        firebase.initializeApp ({
            apiKey: 'AIzaSyCHVPiLw3kzRTrfbokxOLt6o5RHEpvOxfQ',
            authDomain: 'authentication-d7f67.firebaseapp.com',
            databaseURL: 'https://authentication-d7f67.firebaseio.com',
            projectId: 'authentication-d7f67',
            storageBucket: 'authentication-d7f67.appspot.com',
            messagingSenderId: '1069603323655'
  });

    }

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>

        );
    }
}

export default App;