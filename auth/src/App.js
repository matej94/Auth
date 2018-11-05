import React, { Component } from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount () {
        firebase.initializeApp ({
            apiKey: 'AIzaSyCHVPiLw3kzRTrfbokxOLt6o5RHEpvOxfQ',
            authDomain: 'authentication-d7f67.firebaseapp.com',
            databaseURL: 'https://authentication-d7f67.firebaseio.com',
            projectId: 'authentication-d7f67',
            storageBucket: 'authentication-d7f67.appspot.com',
            messagingSenderId: '1069603323655'
  });

    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            this.setState({ loggedIn: true });
        } else {
            this.setState({ loggedIn: false });
        }

    });

}

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <Button 
                onPress={() => firebase.auth().signOut()}
                >
                Log Out
                </Button>
                );

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" />;
        }
}
  

    render () {
        return (
            <View>
                <Header headerText="Authentication" />
                    {this.renderContent()}
            </View>
        );
    }
}

export default App;