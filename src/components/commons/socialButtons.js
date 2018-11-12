import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {appStyle} from '../../styles/commons/app';

class SocialButtons extends Component {

    render() {
        return <View style={appStyle.socialContainer}>
            <Icon
                name="logo-facebook"
                color="#26261b"
                size={30}
                style={appStyle.socialButton}
            />
            <Icon
                name="logo-googleplus"
                color="#26261b"
                size={30}
                style={appStyle.socialButton}
            />
        </View>
    }
}
export default SocialButtons;