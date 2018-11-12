import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {getIconByOs} from '../../helpers/systemHelper';
import {appStyle} from '../../styles/commons/app';

class FormTextInput extends Component {

    render() {
        return <View style={appStyle.input}>
            {this.props.icon && <Icon
                name={getIconByOs(this.props.icon)}
                color="#26261b"
                size={30}
                style={appStyle.inputIcon}
            />}
            <TextInput secureTextEntry= {this.props.secureTextEntry} style={appStyle.inputTextBox} placeholder={this.props.placeholder} onChangeText={(text) => this.props.onPress(text)} />
        </View>
    }
}

export default FormTextInput;