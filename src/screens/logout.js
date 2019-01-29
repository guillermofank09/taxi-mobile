import { Component } from 'react';
import { AsyncStorage } from 'react-native';

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return null;
    }

    componentWillMount(){
        AsyncStorage.clear().then(()=> this.props.navigation.navigate('Login'));
    }
}

export default Logout;