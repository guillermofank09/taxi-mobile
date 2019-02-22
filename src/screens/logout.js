import React from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';

class Logout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ActivityIndicator size="large" color="#26261b" style={{ marginTop: 60 }} />
    }

    componentDidMount() {
        AsyncStorage.removeItem('token').then(() => this.props.navigation.navigate('Login'))
            .catch((error) => {
                console.error('Error trying to remove token: ' + error)
            });
    }
}

export default Logout;