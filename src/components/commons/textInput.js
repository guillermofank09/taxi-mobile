import React, { Component } from 'react';
import { View, } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from "react-native-vector-icons/Ionicons";
import { getIconByOs } from '../../helpers/systemHelper';
import { appStyle } from '../../styles/commons/app';

class FormTextInput extends Component {

    render() {
        const { placeholder, icon, secure, value, error, editable, selected } = this.props
        return <View style={appStyle.formInput}>
            <Input placeholder={placeholder} leftIcon={
                this.props.icon &&
                <Icon
                    name={getIconByOs(icon)}
                    size={30}
                    color='#26261b'
                    style={appStyle.inputIcon}
                />
            }  errorStyle={{ color: 'red' }} value ={value} secureTextEntry={secure} errorMessage={error} onChangeText={this.handleChange} onBlur={this.handleTouch} 
            editable={!editable} selectTextOnFocus={!selected}/>

        </View>
    }

    handleChange = value => {
        this.props.onChange(this.props.name, value)
    }

    handleTouch = () => {
        this.props.onTouch(this.props.name);
    }
}

export default FormTextInput;