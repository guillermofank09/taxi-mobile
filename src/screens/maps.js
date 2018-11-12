import React, { Component } from 'react';
import { View, Button } from 'react-native';
import FormTextInput from '../components/commons/textInput';
import Title from '../components/commons/title';
import { appStyle } from '../styles/commons/app';
import MapView from 'react-native-maps';

class MapScreen extends Component {

    render() {
        return (
            <View style={appStyle.container}>
                <MapView
                    style={appStyle.map}
                    initialRegion={{
                        latitude: -27.3833,
                        longitude: -55.8833,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }
                    } />
            </View>
        );
    }
}
export default MapScreen;