
import {Platform} from 'react-native';

export const getIconByOs = (icon) => {
    return Platform.OS === 'android' ? `md-${icon}` : `ios-${icon}`;
}