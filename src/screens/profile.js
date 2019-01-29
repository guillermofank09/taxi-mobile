import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: ''
        };
    }

    render() {
        return (
            <View style={appStyle.container} >
                <View style={{ height: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/images/user-color.png')} style={{ height: 200, width: 200, borderRadius: 60 }} />
                </View>
                <View style={appStyle.profileSection}>
                    <FormTextInput id="name" icon="person" placeholder="Nombre" value={this.state.name} onPress={this.setUserName} />
                    <FormTextInput id="email" icon="mail" placeholder="Email" value={this.state.email} onPress={this.setUserEmail} />
                </View>
            </View>
        );
    }

    setUserName = (value) => {
        this.setState({ name: value });
    }

    setUserEmail = (value) => {
        this.setState({ email: value });
    }

    componentWillMount() {
        AsyncStorage.getItem('userName').then((value) => this.setUserName(value));
        AsyncStorage.getItem('userEmail').then((value) => this.setUserEmail(value));
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text) === true;
    }
}

export default Profile;