import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import { appStyle } from '../styles/commons/app';
import { errorStyle } from '../styles/commons/error';
import SocialButtons from '../components/commons/socialButtons';
import WelcomeScreen from './welcome';
import { signUp, login } from '../services/AuthServices';
import { Formik } from 'formik';
import { signUpSchema } from '../helpers/validationSchema';
import HeaderTitle from '../components/commons/headerTitle'

export const initialValues = { name: '', email: '', password: '', confirmPassword: '' }

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
        setTimeout(() => { this.finishLoading() }, 4000);
    }

    render() {
        return (
            this.state.isReady ?
                <ScrollView keyboardDismissMode='on-drag' style={appStyle.container} >
                    <HeaderTitle />
                    <Formik initialValues={initialValues} onSubmit={this.onSubmit} validationSchema={signUpSchema}
                        render={({ values, handleSubmit, setFieldValue, errors, touched, setFieldTouched, isValid }) => (
                            <>
                                <View style={appStyle.signUpSection}>
                                    <FormTextInput name="name" icon="person" placeholder="Nombre" value={values.name} onChange={setFieldValue} error={touched.name && errors.name} onTouch={setFieldTouched} />
                                    <FormTextInput name="email" icon="mail" placeholder="Email" value={values.email} onChange={setFieldValue} error={touched.email && errors.email} onTouch={setFieldTouched} />
                                    <FormTextInput name="password" icon="key" secure type='password' placeholder="Contraseña" value={values.password} onChange={setFieldValue} error={touched.password && errors.password} onTouch={setFieldTouched} />
                                    <FormTextInput name="confirmPassword" icon="key" secure type='password' placeholder="Confirme Contraseña" value={values.confirmPassword} onChange={setFieldValue} error={touched.confirmPassword && errors.confirmPassword} onTouch={setFieldTouched} />
                                </View>
                                <View>
                                    <TouchableOpacity
                                        style={appStyle.actionButon}
                                        onPress={handleSubmit}
                                    >
                                        <Text> CONTINUAR</Text>
                                    </TouchableOpacity>
                                    {this.state.error &&
                                        <View style={appStyle.buttonContainer}>
                                            <Text style={errorStyle.errorMessage}>{this.state.error}</Text>
                                        </View>
                                    }
                                </View>
                                <View style={appStyle.integrationContainer}>
                                    <Text style={appStyle.existingAccount} onPress={() => this.props.navigation.navigate('Login')}>Ya tengo una cuenta</Text>
                                    <Text style={appStyle.integrateWith}>Integrarse con: </Text>
                                    <SocialButtons />
                                </View>
                            </>
                        )
                        } />
                </ScrollView>
                :
                <WelcomeScreen />
        );
    }

    onSubmit = (values) => {
        let params = Object.assign({}, values);
        delete params.confirmPassword
        this.signUp(params);

    }

    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(text) === true;
    }

    setError = e => {
        this.setState({ error: 'Ops, ocurrió un error al registrar el usuario' });
    }

    finishLoading() {
        this.setState({ isReady: true });
    }

    signUp = (values) => {
        signUp(values.name, values.email, values.password).then(() => {
            AsyncStorage.setItem('userName', this.state.name);
            login(values.email, values.password).then((response) => {
                AsyncStorage.setItem('token', response.data.token);
                AsyncStorage.setItem('userName', values.name);
                AsyncStorage.setItem('userEmail', values.email);
                AsyncStorage.setItem('userRole', response.data.user && response.data.user.role[0]);
                this.props.navigation.navigate('Home');
            }).catch((e) => this.setError(e))
        }).catch((e) => this.setError(e))
    }
}

export default SignUp;