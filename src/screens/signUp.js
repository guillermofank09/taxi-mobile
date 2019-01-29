import React, { Component } from 'react';
import { View, Button, Text, AsyncStorage } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import SocialButtons from '../components/commons/socialButtons';
import WelcomeScreen from './welcome';
import {signUp, login} from '../services/AuthServices';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            name: '',
            email: '',
            password: '',
            isReady: false
        };
    }

    componentDidMount() {
        setTimeout(() => {this.finishLoading()}, 4000);
    }

    render() {
        return (
            this.state.isReady ?
            <View style={appStyle.container} >
                <View style={appStyle.signUpSection}>
                    <FormTextInput id="name" icon="person" placeholder="Nombre" onPress={this.setUserName} />
                    <FormTextInput id="email" icon="mail" placeholder="Email" onPress={this.setUserEmail} />
                    <FormTextInput id="password" icon="key" placeholder="Contraseña" secureTextEntry onPress={this.setUserPassword} />
                </View>
                <View style={appStyle.buttonContainer}>
                    <Button title="Continuar" color="#26261b" onPress={this.signUp} />
                    {this.state.error && <View style={appStyle.buttonContainer}>
                    <Text style={errorStyle.errorMessage}>{this.state.error}</Text>
                </View>
                }
                </View>
                <View style={appStyle.integrationContainer}>
                    <Text  style={appStyle.existingAccount} onPress={()=> this.props.navigation.navigate('Login')}>Ya tengo una cuenta</Text>
                    <Text style={appStyle.integrateWith}>Integrarse con: </Text>
                    <SocialButtons />
                </View>
            </View>
            : 
            <WelcomeScreen />
        );
    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text) === true;
    }

    setMailError = () => {
        this.setState({error: 'Mail incorrecto. Por favor ingrese un mail válido.'});
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

    finishLoading () {
        this.setState({isReady: true});
    }

    signUp = () => {
        if(this.validate(this.state.email)){
        signUp(this.state.name, this.state.email, this.state.password).then(() => {
            AsyncStorage.setItem('userName', this.state.name);
            login(this.state.email, this.state.password).then((response) => {
                AsyncStorage.setItem('token', response.data.token);
                AsyncStorage.setItem('userName', this.state.name);
                AsyncStorage.setItem('userEmail', this.state.email);
                this.props.navigation.navigate('Home');
            }).catch((e) => this.setError(e))
        }).catch((e) => this.setError(e))
    } else {
        this.setMailError;
    }
    }
}

export default SignUp;