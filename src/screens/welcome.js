
import React from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { appStyle } from '../styles/commons/app';
import taxiReyLogo from '../assets/images/welcome.png';

export const WelcomeScreen = () => {
    return (<View style={appStyle.welcomePage}>
        <Image source={taxiReyLogo}
            style={{ width: 'auto', height: 400 }} />
        <Text style={appStyle.loadingMsg}>Cargando...</Text>
        <ActivityIndicator size="large" color="#26261b" style = {{marginTop: 60}}/>
    </View>
    );
}

export default WelcomeScreen;