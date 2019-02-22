import React, { Component } from 'react';
import { View, TouchableOpacity, Text, AsyncStorage, ScrollView } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import { login } from '../services/AuthServices';
import SocialButtons from '../components/commons/socialButtons';
import { Formik } from 'formik';
import { loginSchema } from '../helpers/validationSchema';

export const initialValues = { email: '', password: '' }

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            email: null,
            password: null
        };
    }

    componentWillMount() {
        AsyncStorage.getItem('token').then(
            (value) => {
                value && this.props.navigation.navigate('Home');
            }
        ).catch((error) => {
            console.error('Error trying to retrieve token: ' + error)
        });
    }

    render() {
        return (
            <ScrollView keyboardDismissMode='on-drag' style={appStyle.container}>
                <Formik initialValues={initialValues} onSubmit={this.onSubmit} validationSchema={loginSchema}
                    render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (
                        <>
                            <View style={appStyle.loginSection}>
                                <FormTextInput name="email" icon="mail" placeholder="Email" onPress={this.setUserEmail} value={values.email} onChange={setFieldValue} error={touched.email && errors.email} onTouch={setFieldTouched} />
                                <FormTextInput name="password" icon="key" secure placeholder="Contraseña" secureTextEntry value={values.password} onChange={setFieldValue} error={touched.password && errors.password} onTouch={setFieldTouched} />
                            </View>
                            <View style={appStyle.loginContainer}>
                                <View>
                                    <TouchableOpacity
                                        style={appStyle.actionButon}
                                        onPress={handleSubmit}
                                    >
                                        <Text> ENTRAR </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={appStyle.socialButtonsContainer}>
                                    <Text style={appStyle.integrateWith}>Ingresar con: </Text>
                                    <SocialButtons />
                                </View>
                                {this.state.error && <View style={appStyle.errorContainer}>
                                    <Text style={errorStyle.errorMessage}>{this.state.error}</Text>
                                </View>
                                }
                            </View>
                        </>
                    )
                    } />
                <View style={appStyle.registerButtonContainer}>
                    <Text style={appStyle.hiperlink}
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        Registrarme
                </Text>
                </View>
            </ScrollView>
        );
    }

    onSubmit = (values) => {
        this.login(values)
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

    login = (values) => {
        login(values.email, values.password).then((response) => {
            AsyncStorage.setItem('token', response.data.token);
            AsyncStorage.setItem('userEmail', response.data.user && response.data.user.email);
            AsyncStorage.setItem('userName', response.data.user && response.data.user.name);
            AsyncStorage.setItem('userRole', response.data.user && response.data.user.role && response.data.user.role[0]);
            this.props.navigation.navigate('Home');
        }).catch((e) => this.setLoginError(e))
    }
}
export default Login;