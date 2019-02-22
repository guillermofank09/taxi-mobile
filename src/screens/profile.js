import React, { Component } from 'react';
import { View, AsyncStorage, Image } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import defaultUser from '../assets/images/user-color.png';
import defaultDriver from '../assets/images/default-driver.png';
import {ROLES} from '../utils/constants'
import {isUser} from '../helpers/sessionHelper'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '', 
            role: ROLES.USER
        };
    }

    render() {
        return (
            <View style={appStyle.container} >
                <View style={{ height: 300, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={isUser(this.state.role) ? defaultUser : defaultDriver } style={{ height: 200, width: 200, borderRadius: 60 }} />
                </View>
                <View style={appStyle.profileSection}>
                    <FormTextInput id="name" icon="person" placeholder="Nombre" value={this.state.name} editable selected  />
                    <FormTextInput id="email" icon="mail" placeholder="Email" value={this.state.email} editable selected/>
                    {!isUser(this.state.role) && 
                    <>
                    <FormTextInput id="car" icon="car" placeholder="Vehiculo" value='Chevrolet Corsa' editable selected  />
                    <FormTextInput id="idcar" icon="paper" placeholder="Patente" value='PFR546' editable selected  />
                    </>
                    }
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

    setUserRole = (value) => {
        this.setState({ role: value });
    }

    componentWillMount() {
        AsyncStorage.getItem('userName').then((value) => this.setUserName(value));
        AsyncStorage.getItem('userEmail').then((value) => this.setUserEmail(value));
        AsyncStorage.getItem('userRole').then((value) => this.setUserRole(value));
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text) === true;
    }
}

export default Profile;