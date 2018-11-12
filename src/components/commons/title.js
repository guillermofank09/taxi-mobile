import React, {Component} from 'react';
import {Text} from 'react-native';
import {appStyle} from '../../styles/commons/app';

class Title extends Component {

    render(){
        return <Text style={appStyle.title}>{this.props.title}</Text>
    }

}

export default Title;