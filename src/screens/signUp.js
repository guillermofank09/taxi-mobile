import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import SocialButtons from '../components/commons/socialButtons';
import axios from 'axios';
import { LAZARUS_URL } from '../utils/resources';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            name: '',
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={appStyle.container} >
                <View style={appStyle.signUpSection}>
                    <FormTextInput id="name" icon="person" placeholder="Nombre" onPress={this.setUserName} />
                    <FormTextInput id="email" icon="mail" placeholder="Email" onPress={this.setUserEmail} />
                    <FormTextInput id="password" icon="key" placeholder="Contraseña" secureTextEntry onPress={this.setUserPassword} />
                </View>
                <View style={appStyle.buttonContainer}>
                    <Button title="Continuar" color="#26261b" onPress={this.signUp} />
                </View>
                {this.state.error && <View style={appStyle.buttonContainer}>
                    <Text>{this.state.error}</Text>
                </View>
                }
                <View style={appStyle.buttonContainer}>
                    <SocialButtons />
                </View>
            </View>
        );
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text) === true;
    }

    setMailError = () => {
        this.setState({error: 'Mail incorrecto. Por favor ingrese un mail válido para continuar'});
    }

    setUserName = value => {
        this.setState({ name: value });
    }
    setUserEmail = value => {
        this.setState({ email: value });
    }
    setUserPassword = value => {
        this.setState({ password: value });
    }

    setError = e => {
        this.setState({ error: 'Ops, ocurrió un error al registrar el usuario'});
    }

    signUp = () => {
        if(this.validate(this.state.email)){
        const data = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };
        axios.post(LAZARUS_URL + '/users', data).then(() => {
            this.props.navigation.navigate('Login');
        }).catch((e) => this.setError(e))
    } else {
        this.setMailError;
    }
    }
}

export default SignUp;