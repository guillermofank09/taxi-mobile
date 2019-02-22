
import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { appStyle } from '../styles/commons/app';
import taxiReyLogo from '../assets/images/splash.jpg';

export const WelcomeScreen = () => {
    return (<View style={appStyle.welcomePage}>
        <Image source={taxiReyLogo}
            style={{ width: '100%', height: '100%' }} />
        <Text style={appStyle.loadingMsg}>Cargando...</Text>
        <ActivityIndicator size="large" color="#26261b" style = {{marginTop: 60}}/>
    </View>
    );
}

export default WelcomeScreen;