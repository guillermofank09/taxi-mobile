
import { AsyncStorage } from 'react-native';
import {ROLES} from '../utils/constants'

export const validateSession = () => {
        AsyncStorage.getItem('token').then((value) => {
            this.setState({
                userId: value
            });
    
            return AsyncStorage.getItem('tokenKey');
        }).then((value) => {
            this.setState({
                loginToken: value
            });
         }).catch((error) => {
              console.tron.log('caught error');
    
              this.setState({
                  tokenValid: false,
                  isLoaded: true
              });
         });
}

export const isUser = (role) => {
        return ROLES.USER === role
}