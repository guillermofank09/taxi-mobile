
import {Platform} from 'react-native';

export const getIconByOs = (icon) => {
    return Platform.OS === 'android' ? `md-${icon}` : `ios-${icon}`;
}

export const getArrivalHour = (minutes) => {
    let min = minutes.split(" ");
    let date = new Date();
    date.setTime(date.getTime() + min[0] * 60 * 1000);
    return `${date.getHours()}:${date.getMinutes()} hs`;
}