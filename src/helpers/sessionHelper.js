
import { AsyncStorage } from 'react-native';

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