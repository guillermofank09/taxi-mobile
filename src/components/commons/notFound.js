import React from 'react';
import { View, Image, Text } from 'react-native';
import { appStyle } from '../../styles/commons/app';
import failed from '../../assets/images/failed.png';

export const NotFound = (props) => {
    return (<View>
        <Image source={failed}
            style={{ width: 'auto', height: 300 }} />
        <Text style={appStyle.loadingMsg}>{props.message}</Text>
    </View>
    );
}

export default NotFound;