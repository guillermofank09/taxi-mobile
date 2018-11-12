import React, { Component } from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import axios from 'axios';
import { LAZARUS_URL } from '../utils/resources';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: null,
            password: null
        };
    }

    render() {
        return (
            <View style={appStyle.container}>
                <View style={appStyle.loginSection}>
                    <FormTextInput id="email" icon="mail" placeholder="Email" onPress={this.setUserEmail} />
                    <FormTextInput id="password" icon="key" placeholder="Contraseña" onPress={this.setUserPassword} />
                </View>
                <View style={appStyle.buttonContainer}>
                    <Button title="Entrar" color="#26261b" onPress={this.login} />
                </View>
                <View style={appStyle.buttonContainer}>
                <Text style={appStyle.hiperlink}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    Registrarme
                </Text>
                </View>
                {this.state.error && <View style={appStyle.buttonContainer}>
                    <Text>{this.state.error}</Text>
                </View>
                }
            </View>
        );
    }

    setUserEmail = value => {
        this.setState({ email: value });
    }

    setUserPassword = value => {
        this.setState({ password: value });
    }

    setLoginError = (e) => {
        this.setState({ error: 'Ops, ocurrió un error al registrar el usuario' });
    }

    login = () => {
        const authValue = {
            username: this.state.email,
            password: this.state.password
        };

        const url = LAZARUS_URL + '/auth';
        axios({
            method: 'POST',
            url: url, auth: authValue, data: { email: this.state.email, password: this.state.password }
        }).then((response) => {
            AsyncStorage.setItem('token', response.data.token);
            this.props.navigation.navigate('MapScreen');
        }).catch((e) => this.setLoginError(e))
    }
}
export default Login;