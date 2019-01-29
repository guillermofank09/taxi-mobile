import React, { Component } from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import {login} from '../services/AuthServices';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: null,
            password: null
        };
    }

    componentWillMount(){
        AsyncStorage.getItem('userEmail').then(
            ()=> {
                this.props.navigation.navigate('Home');
            }
        );

    }

    render() {
        return (
            <View style={appStyle.container}>
                <View style={appStyle.loginSection}>
                    <FormTextInput id="email" icon="mail" placeholder="Email" onPress={this.setUserEmail} />
                    <FormTextInput id="password" icon="key" placeholder="Contraseña" secureTextEntry onPress={this.setUserPassword} />
                </View>
                <View style={appStyle.loginButtonContainer}>
                    <Button title="Entrar" color="#26261b" onPress={this.login} />
                    {this.state.error && <View style={appStyle.loginButtonContainer}>
                    <Text style={errorStyle.errorMessage}>{this.state.error}</Text> 
                </View>
                }
                </View>
                <View style={appStyle.loginButtonContainer}>
                <Text style={appStyle.hiperlink}
                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    Registrarme
                </Text>
                </View>
            </View>
        );
    }

    setUserEmail = value => {
        this.setState({ email: value, error: null });
    }

    setUserPassword = value => {
        this.setState({ password: value, error: null });
    }

    setLoginError = (e) => {
        this.setState({ error: 'Ops, ocurrió un loguear al registrar el usuario. Verifique su usuario o contraseña' });
    }

    login = () => {
        login(this.state.email, this.state.password).then((response) => {
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('userEmail', this.state.email);
            this.props.navigation.navigate('Home');
        }).catch((e) => this.setLoginError(e))
    }
}
export default Login;